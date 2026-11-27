// Suggestions and improvements (owner request, 27 Nov 2026; suggestions only, no kind to choose, owner correction the same day).
//   POST /api/feedback                         anyone, no account needed: {text, email?, contact?, page?, edition, lang, website?}
//   GET  /api/feedback/admin?since=<id>         the owner's reader only: Authorization: Bearer <FEEDBACK_ADMIN_TOKEN>
// Stored: the suggestion, the screen, edition and language, and server time. No IP (the rate limit keeps a hash),
// no account unless the sender ticked "you may contact me" while signed in, an email only if the sender typed one.
// The message text is never logged.
import { HttpError, json, readJson, ipKey, sha256, safeEqual } from "./http.js";
import { hit, sweep } from "./rate.js";
import { requireSession } from "./auth.js";
import { text as vText, email as vEmail, isObj, bad } from "./validate.js";

export const FB_MAX = 1000;
const PAGE_RE = /^[A-Za-z0-9/#?=&._~%:+-]{0,160}$/;
const KEYS = ["text", "email", "contact", "page", "edition", "lang", "website"];

function fbLimits(env) {
  const n = (k, d) => { const v = Number(env[k]); return Number.isFinite(v) && v > 0 ? v : d; };
  return {
    ip: n("LIMIT_FB_IP", 6),          // messages per address per 10 minutes
    ipDay: n("LIMIT_FB_IP_DAY", 30),  // messages per address per day
    all: n("LIMIT_FB_ALL", 1000),     // messages for the whole site per day (bounds what spam can store)
    admin: n("LIMIT_FB_ADMIN", 30),   // reader calls per address per hour, right token or wrong
  };
}

// Boundary validation: known keys only, 1 to 1000 characters of well-formed text, a plain email.
export function feedbackInput(b) {
  if (!isObj(b)) throw bad("bad_body");
  for (const k of Object.keys(b)) if (!KEYS.includes(k)) throw bad("unknown_field", { field: k });
  const tx = vText(b.text, FB_MAX, 1, "text");
  let em = null;
  if (b.email !== undefined && b.email !== null && b.email !== "") em = vEmail(b.email);
  if (b.contact !== undefined && typeof b.contact !== "boolean") throw bad("bad_contact");
  let page = null;
  if (b.page !== undefined && b.page !== null && b.page !== "") {
    if (typeof b.page !== "string" || !PAGE_RE.test(b.page)) throw bad("bad_page");
    page = b.page;
  }
  if (b.edition !== "kids" && b.edition !== "adult") throw bad("bad_edition");
  if (b.lang !== "ar" && b.lang !== "en") throw bad("bad_lang");
  if (b.website !== undefined && typeof b.website !== "string") throw bad("bad_body");
  return { text: tx, email: em, contact: b.contact === true, page, edition: b.edition, lang: b.lang, trap: !!(b.website && b.website.length) };
}

export async function feedbackPost(req, env, url) {
  const f = feedbackInput(await readJson(req, 8 * 1024));
  const L = fbLimits(env), ip = await ipKey(req, url), day = Math.floor(Date.now() / 86400000);
  await hit(env.DB, "fb:ip:" + ip, L.ip, 600);
  await hit(env.DB, "fb:ipd:" + ip, L.ipDay, 86400);
  // the honeypot: a field people never see. Filled means a bot; it is told "thanks" and nothing is stored.
  if (f.trap) return json({ ok: true });
  await hit(env.DB, "fb:all:" + day, L.all, 86400);
  let account = null;
  if (f.contact) {
    try { account = (await requireSession(req, env)).account.id; }
    catch (e) { if (!(e instanceof HttpError) || e.status !== 401) throw e; }
  }
  await env.DB.prepare("INSERT INTO feedback (t, text, email, account_id, page, edition, lang) VALUES (?, ?, ?, ?, ?, ?, ?)")
    .bind(Date.now(), f.text, f.email, account, f.page, f.edition, f.lang).run();
  if (Math.random() < 0.05) await sweep(env.DB);
  return json({ ok: true });
}

// The reader: a long random bearer secret, compared in constant time (both sides hashed first, so lengths match too).
async function adminOk(req, env) {
  const want = env.FEEDBACK_ADMIN_TOKEN;
  if (typeof want !== "string" || want.length < 32) return false;   // not configured: closed, never open
  const m = /^Bearer ([A-Za-z0-9_-]{16,256})$/.exec(req.headers.get("authorization") || "");
  const got = m ? m[1] : "";
  const ok = safeEqual(await sha256("fb:" + got), await sha256("fb:" + want));
  return ok && !!m;
}

export async function feedbackAdmin(req, env, url) {
  await hit(env.DB, "fb:adm:" + await ipKey(req, url), fbLimits(env).admin, 3600);
  if (!(await adminOk(req, env))) throw new HttpError(401, "unauthorized");
  const since = Number(url.searchParams.get("since") || 0), lim = Number(url.searchParams.get("limit") || 200);
  if (!Number.isSafeInteger(since) || since < 0) throw bad("bad_since");
  const limit = Number.isSafeInteger(lim) && lim > 0 ? Math.min(lim, 500) : 200;
  const r = await env.DB.prepare(
    `SELECT f.id, f.t, f.text, f.email, f.page, f.edition, f.lang, f.account_id IS NOT NULL AS acc, a.email AS acc_email
     FROM feedback f LEFT JOIN accounts a ON a.id = f.account_id WHERE f.id > ? ORDER BY f.id LIMIT ?`).bind(since, limit + 1).all();
  const rows = r.results || [], more = rows.length > limit, items = rows.slice(0, limit).map(x => ({
    id: x.id, at: new Date(x.t).toISOString(), text: x.text, page: x.page, edition: x.edition, lang: x.lang,
    reply_to: x.email || x.acc_email || null, account: !!x.acc,
  }));
  return json({ items, last: items.length ? items[items.length - 1].id : since, more });
}
