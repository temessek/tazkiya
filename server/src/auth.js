import { HttpError, json, readJson, cookies, cookie, randomToken, sha256, sha256b64url, safeEqual, isLocal, ipKey, SEC_HEADERS } from "./http.js";
import { hit, sweep, limits } from "./rate.js";
import { email as vEmail, lang as vLang, isObj } from "./validate.js";
import { signInMail, sendMail } from "./mail.js";

export const SESSION_COOKIE = "__Host-tz";
const OAUTH_COOKIE = "__Host-tz-o";
const SESSION_DAYS = 60, SESSION_MAX_DAYS = 365, SESSIONS_PER_ACCOUNT = 20;
const LINK_MINUTES = 15, OAUTH_MINUTES = 10;
const DAY = 86400000;

// ---------- sessions ----------

async function createSession(db, accountId) {
  const token = randomToken(32), now = Date.now();
  await db.batch([
    db.prepare("INSERT INTO sessions (hash, account_id, created, expires, seen) VALUES (?, ?, ?, ?, ?)")
      .bind(await sha256(token), accountId, now, now + SESSION_DAYS * DAY, now),
    // keep the newest sessions only
    db.prepare(`DELETE FROM sessions WHERE account_id = ?1 AND hash NOT IN
      (SELECT hash FROM sessions WHERE account_id = ?1 ORDER BY created DESC LIMIT ${SESSIONS_PER_ACCOUNT})`).bind(accountId),
  ]);
  return cookie(SESSION_COOKIE, token, SESSION_DAYS * 86400);
}

// Returns {account, setCookie?} or throws 401. Sessions slide (60 days from the last use), up to a year from sign-in.
export async function requireSession(req, env) {
  const token = cookies(req)[SESSION_COOKIE];
  if (!token || !/^[A-Za-z0-9_-]{43}$/.test(token)) throw new HttpError(401, "signed_out");
  const hash = await sha256(token), now = Date.now();
  const s = await env.DB.prepare(
    "SELECT s.account_id, s.created, s.expires, s.seen, a.email, a.google_sub, a.adult_at FROM sessions s JOIN accounts a ON a.id = s.account_id WHERE s.hash = ?")
    .bind(hash).first();
  if (!s || s.expires < now || now - s.created > SESSION_MAX_DAYS * DAY) {
    if (s) await env.DB.prepare("DELETE FROM sessions WHERE hash = ?").bind(hash).run();
    throw new HttpError(401, "signed_out");
  }
  let setCookie;
  if (now - s.seen > DAY) {
    const expires = Math.min(now + SESSION_DAYS * DAY, s.created + SESSION_MAX_DAYS * DAY);
    await env.DB.prepare("UPDATE sessions SET seen = ?, expires = ? WHERE hash = ?").bind(now, expires, hash).run();
    setCookie = cookie(SESSION_COOKIE, token, Math.max(1, Math.floor((expires - now) / 1000)));
  }
  return { account: { id: s.account_id, email: s.email, google: !!s.google_sub, adult_at: s.adult_at || null }, hash, setCookie };
}

export async function logout(req, env) {
  const token = cookies(req)[SESSION_COOKIE];
  if (token) await env.DB.prepare("DELETE FROM sessions WHERE hash = ?").bind(await sha256(token)).run();
  return json({ ok: true }, 200, { "set-cookie": cookie(SESSION_COOKIE, "", 0) });
}

async function accountForEmail(db, email) {
  await db.prepare("INSERT INTO accounts (id, email, created) VALUES (?, ?, ?) ON CONFLICT(email) DO NOTHING")
    .bind(crypto.randomUUID(), email, Date.now()).run();
  return db.prepare("SELECT id, google_sub FROM accounts WHERE email = ?").bind(email).first();
}

// ---------- email link ----------

export async function emailStart(req, env, url) {
  const body = await readJson(req, 4096);
  if (!isObj(body)) throw new HttpError(400, "bad_json");
  // sign-in by email is off until Email Sending is enabled (MAIL_MODE "off"): refused before anything is written
  if (!authInfo(env).email) throw new HttpError(503, "email_unavailable");
  const to = vEmail(body.email), lang = vLang(body.lang), L = limits(env);
  await hit(env.DB, "mail:ip:" + await ipKey(req, url), L.mailIp, 600);
  await hit(env.DB, "mail:to:" + (await sha256("to:" + to)).slice(0, 24), L.mailTo, 3600);
  if (Math.random() < 0.05) await sweep(env.DB);

  const token = randomToken(32);
  await env.DB.prepare("INSERT INTO login_tokens (hash, email, expires) VALUES (?, ?, ?)")
    .bind(await sha256(token), to, Date.now() + LINK_MINUTES * 60000).run();
  const link = `${url.origin}/api/auth/email/verify?t=${token}${lang === "en" ? "&lang=en" : ""}`;
  const how = await sendMail(env, to, signInMail(link, lang));

  // Test mode (preview and local tests only, never the production host): the link comes back to the holder of TEST_KEY.
  const out = { ok: true };
  if (how === "test" && url.hostname !== "tazkiya.family" && env.TEST_KEY && safeEqual(req.headers.get("x-test-key") || "", env.TEST_KEY)) out.test_link = link;
  return json(out);
}

// The link opens a small confirmation page; only its button (a same-origin POST) uses the token. Mail scanners that
// open links therefore cannot spend it.
export async function emailVerifyPage(req, env, url) {
  const t = url.searchParams.get("t") || "", en = url.searchParams.get("lang") === "en";
  const ok = /^[A-Za-z0-9_-]{43}$/.test(t);
  return page(en, ok
    ? `<h1>${en ? "Sign in to Tazkiya" : "الدخول إلى تزكية"}</h1>
       <form method="post" action="/api/auth/email/verify"><input type="hidden" name="t" value="${t}"><input type="hidden" name="lang" value="${en ? "en" : "ar"}">
       <button type="submit">${en ? "Sign in" : "ادخل"}</button></form>`
    : `<h1>${en ? "This link is not valid" : "هذا الرابط غير صالح"}</h1><p><a href="/">${en ? "Back to Tazkiya" : "العودة إلى تزكية"}</a></p>`, ok ? 200 : 400);
}

export async function emailVerify(req, env, url) {
  // a form POST: the Origin header must be ours (browsers always send it on POST)
  if (req.headers.get("origin") !== url.origin) throw new HttpError(403, "bad_origin");
  const ct = (req.headers.get("content-type") || "").toLowerCase();
  if (!ct.startsWith("application/x-www-form-urlencoded")) throw new HttpError(415, "form_required");
  if (Number(req.headers.get("content-length") || 0) > 1024) throw new HttpError(413, "too_large");
  const form = new URLSearchParams(await req.text());
  const t = form.get("t") || "", en = form.get("lang") === "en";
  await hit(env.DB, "verify:ip:" + await ipKey(req, url), limits(env).verifyIp, 600);
  const expired = () => page(en, `<h1>${en ? "This link has expired or was already used" : "انتهى هذا الرابط أو استُعمل من قبل"}</h1>
    <p>${en ? "Ask for a new link from the app." : "اطلب رابطًا جديدًا من التطبيق."}</p><p><a href="/">${en ? "Back to Tazkiya" : "العودة إلى تزكية"}</a></p>`, 400);
  if (!/^[A-Za-z0-9_-]{43}$/.test(t)) return expired();
  // single use: the row is deleted in the same statement that reads it
  const row = await env.DB.prepare("DELETE FROM login_tokens WHERE hash = ? RETURNING email, expires").bind(await sha256(t)).first();
  if (!row || row.expires < Date.now()) return expired();
  const acct = await accountForEmail(env.DB, row.email);
  const setCookie = await createSession(env.DB, acct.id);
  return new Response(null, { status: 303, headers: { location: "/#/signed-in", "set-cookie": setCookie, ...SEC_HEADERS } });
}

function page(en, body, status = 200) {
  const html = `<!doctype html><html lang="${en ? "en" : "ar"}" dir="${en ? "ltr" : "rtl"}"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${en ? "Tazkiya" : "تزكية"}</title>
<style>body{font-family:system-ui,Tahoma,sans-serif;background:#fbf7ef;color:#24364b;display:grid;place-items:center;min-height:90vh;margin:0;padding:16px;text-align:center;font-size:18px}
main{background:#fff;border-radius:16px;padding:28px 24px;max-width:420px;width:100%}h1{font-size:22px}button{font:inherit;background:#24364b;color:#fff;border:0;border-radius:12px;padding:12px 40px;cursor:pointer}a{color:#24364b}</style>
</head><body><main>${body}</main></body></html>`;
  return new Response(html, { status, headers: { "content-type": "text/html; charset=utf-8", ...SEC_HEADERS,
    "content-security-policy": "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'" } });
}

// ---------- Google (OAuth 2.0 code flow with PKCE and a nonce). Inactive until GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET exist. ----------

const googleOn = env => !!(env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET);
const redirectUri = url => `${url.origin}/api/auth/google/callback`;
const back = (where, extra = {}) => new Response(null, { status: 302, headers: { location: where, ...SEC_HEADERS, ...extra } });

export async function googleStart(req, env, url) {
  if (!googleOn(env)) throw new HttpError(503, "google_not_configured");
  await hit(env.DB, "google:ip:" + await ipKey(req, url), limits(env).googleIp, 600);
  // expired rows (sessions, sign-ins never finished, rate windows) are cleared now and then; Google is the live way in
  if (Math.random() < 0.05) await sweep(env.DB);
  const state = randomToken(24), verifier = randomToken(48), nonce = randomToken(24);
  await env.DB.prepare("INSERT INTO oauth_states (hash, verifier, nonce, expires) VALUES (?, ?, ?, ?)")
    .bind(await sha256(state), verifier, nonce, Date.now() + OAUTH_MINUTES * 60000).run();
  const q = new URLSearchParams({
    client_id: env.GOOGLE_CLIENT_ID, redirect_uri: redirectUri(url), response_type: "code", scope: "openid email profile",
    state, nonce, code_challenge: await sha256b64url(verifier), code_challenge_method: "S256", prompt: "select_account",
  });
  // the state is also kept in a cookie, so the answer must come back to the same browser that started (login CSRF)
  return back("https://accounts.google.com/o/oauth2/v2/auth?" + q, { "set-cookie": cookie(OAUTH_COOKIE, state, OAUTH_MINUTES * 60) });
}

export async function googleCallback(req, env, url) {
  if (!googleOn(env)) throw new HttpError(503, "google_not_configured");
  const fail = () => back("/#/signin?err=google", { "set-cookie": cookie(OAUTH_COOKIE, "", 0) });
  const state = url.searchParams.get("state") || "", code = url.searchParams.get("code") || "";
  if (url.searchParams.get("error") || !state || !code || code.length > 2048) return fail();
  if (!safeEqual(cookies(req)[OAUTH_COOKIE] || "", state)) return fail();
  const st = await env.DB.prepare("DELETE FROM oauth_states WHERE hash = ? RETURNING verifier, nonce, expires").bind(await sha256(state)).first();
  if (!st || st.expires < Date.now()) return fail();

  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ code, client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET,
      redirect_uri: redirectUri(url), grant_type: "authorization_code", code_verifier: st.verifier }),
  });
  if (!r.ok) return fail();
  const tok = await r.json().catch(() => null);
  const claims = tok && typeof tok.id_token === "string" ? decodeJwtPayload(tok.id_token) : null;
  // The ID token came straight from Google's token endpoint over TLS (OpenID Connect Core 3.1.3.7): its claims are checked,
  // and the signature check is not required for this direct channel.
  const now = Math.floor(Date.now() / 1000);
  if (!claims || !["https://accounts.google.com", "accounts.google.com"].includes(claims.iss) || claims.aud !== env.GOOGLE_CLIENT_ID
      || !(claims.exp > now) || claims.nonce !== st.nonce || typeof claims.sub !== "string" || !claims.sub
      || claims.email_verified !== true || typeof claims.email !== "string") return fail();
  let e; try { e = vEmail(claims.email); } catch { return fail(); }

  let acct = await env.DB.prepare("SELECT id FROM accounts WHERE google_sub = ?").bind(claims.sub).first();
  if (!acct) {
    acct = await accountForEmail(env.DB, e);
    // an account already tied to another Google identity with this address (a reissued Workspace address, say) is not
    // handed to the new one: the address alone does not prove it is the same person
    if (acct.google_sub && acct.google_sub !== claims.sub) return fail();
    const u = await env.DB.prepare("UPDATE accounts SET google_sub = ? WHERE id = ? AND google_sub IS NULL").bind(claims.sub, acct.id).run();
    if (!acct.google_sub && !(u.meta && u.meta.changes)) return fail();   // linked by another sign-in in the meantime
  }
  const setCookie = await createSession(env.DB, acct.id);
  const h = new Headers({ location: "/#/signed-in", ...SEC_HEADERS });
  h.append("set-cookie", setCookie); h.append("set-cookie", cookie(OAUTH_COOKIE, "", 0));
  return new Response(null, { status: 302, headers: h });
}

function decodeJwtPayload(jwt) {
  const p = jwt.split(".")[1]; if (!p) return null;
  try { return JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(p.replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0)))); }
  catch { return null; }
}

export const authInfo = env => ({ email: (env.MAIL_MODE || "off") !== "off", google: googleOn(env) });
export { isLocal };
