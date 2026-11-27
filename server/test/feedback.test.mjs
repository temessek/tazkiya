// Feedback and suggestions: POST /api/feedback (validation, honeypot, rate limit, CSRF) and the owner's reader
// GET /api/feedback/admin (401 without or with a wrong token). Real Pages Functions runtime with a fresh local D1.
// Run from outputs/server: npm test
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn, execSync } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { randomBytes } from "node:crypto";

const HERE = dirname(fileURLToPath(import.meta.url)), ROOT = join(HERE, "..");
const TEST_KEY = "local-test-key-" + Math.random().toString(36).slice(2);
const ADMIN = randomBytes(32).toString("base64url");
const PORT = 8900 + Math.floor(Math.random() * 90);
const BASE = `http://127.0.0.1:${PORT}`;
const npx = process.platform === "win32" ? "npx.cmd" : "npx";
let proc, tmp, ipN = 0;
const freshIp = () => `10.9.0.${++ipN}`;

before(async () => {
  tmp = mkdtempSync(join(tmpdir(), "tazkiya-fb-"));
  const stat = join(tmp, "static"), state = join(tmp, "state");
  execSync(`mkdir "${stat}"`, { shell: true });
  writeFileSync(join(stat, "index.html"), "<!doctype html><title>t</title>");
  execSync(`${npx} -y wrangler@4.167.0 d1 migrations apply tazkiya --local --persist-to "${state}"`, { cwd: ROOT, stdio: "pipe", shell: true, env: { ...process.env, CI: "1" } });
  const vars = { MAIL_MODE: "test", TEST_KEY, AI_MODE: "stub", APP_ENV: "local", LIMIT_FB_IP: "3", LIMIT_FB_ADMIN: "40", FEEDBACK_ADMIN_TOKEN: ADMIN };
  const args = ["-y", "wrangler@4.167.0", "pages", "dev", stat, "--port", String(PORT), "--ip", "127.0.0.1", "--persist-to", state, "--show-interactive-dev-session=false",
    ...Object.entries(vars).flatMap(([k, v]) => ["--binding", `${k}=${v}`])];
  proc = spawn(npx, args, { cwd: ROOT, shell: true, stdio: ["ignore", "pipe", "pipe"], env: { ...process.env, CI: "1" } });
  let log = ""; proc.stdout.on("data", d => (log += d)); proc.stderr.on("data", d => (log += d));
  for (let i = 0; i < 120; i++) {
    await new Promise(r => setTimeout(r, 1000));
    try { const r = await fetch(BASE + "/api/health"); if (r.ok) return; } catch {}
  }
  throw new Error("wrangler pages dev did not start:\n" + log.slice(-2000));
});

after(() => {
  if (proc) { if (process.platform === "win32") { try { execSync(`taskkill /pid ${proc.pid} /T /F`, { stdio: "ignore" }); } catch {} } else proc.kill(); }
  if (tmp) try { rmSync(tmp, { recursive: true, force: true }); } catch {}
});

function client(ip = freshIp()) {
  const jar = {};
  const c = async (method, path, body, extra = {}) => {
    const headers = { origin: BASE, "x-tazkiya": "1", "x-test-ip": ip, "x-test-key": TEST_KEY, ...extra.headers };
    if (body !== undefined && !extra.raw) headers["content-type"] = "application/json";
    for (const k of Object.keys(headers)) if (headers[k] === null) delete headers[k];
    const ck = Object.entries(jar).map(([k, v]) => `${k}=${v}`).join("; "); if (ck) headers.cookie = ck;
    const r = await fetch(BASE + path, { method, headers, body: body === undefined ? undefined : extra.raw ? body : JSON.stringify(body), redirect: "manual" });
    for (const sc of r.headers.getSetCookie()) { const [kv] = sc.split(";"); const i = kv.indexOf("="); const k = kv.slice(0, i), v = kv.slice(i + 1); if (v) jar[k] = v; else delete jar[k]; }
    const ct = r.headers.get("content-type") || "";
    return { status: r.status, headers: r.headers, body: ct.includes("json") ? await r.json() : await r.text() };
  };
  c.jar = jar;
  return c;
}
async function signIn(c, email) {
  const s = await c("POST", "/api/auth/email/start", { email, lang: "ar" });
  assert.equal(s.status, 200, JSON.stringify(s.body));
  const t = new URL(s.body.test_link).searchParams.get("t");
  const v = await c("POST", "/api/auth/email/verify", "t=" + t, { raw: true, headers: { "content-type": "application/x-www-form-urlencoded" } });
  assert.equal(v.status, 303);
}
const admin = (since = 0, auth = "Bearer " + ADMIN, ip) => client(ip)("GET", `/api/feedback/admin?since=${since}`, undefined, { headers: { authorization: auth, "x-tazkiya": null, origin: null } });
const msg = (o = {}) => ({ text: "A suggestion", edition: "adult", lang: "en", page: "adult/#/me", ...o });
let lastId = 0;

test("a message is stored and the reader returns it, with no IP and no account", async () => {
  const c = client();
  const r = await c("POST", "/api/feedback", msg({ text: "اقترح وردًا أقصر في أيام العمل", lang: "ar", email: "Someone@Example.com" }));
  assert.equal(r.status, 200, JSON.stringify(r.body)); assert.deepEqual(r.body, { ok: true });
  const a = await admin(0);
  assert.equal(a.status, 200); assert.equal(a.headers.get("cache-control"), "no-store");
  const it = a.body.items.at(-1);
  assert.equal(it.text, "اقترح وردًا أقصر في أيام العمل"); assert.ok(!("type" in it)); assert.equal(it.lang, "ar"); assert.equal(it.edition, "adult");
  assert.equal(it.page, "adult/#/me"); assert.equal(it.reply_to, "someone@example.com"); assert.equal(it.account, false);
  assert.ok(!("ip" in it)); assert.ok(/^\d{4}-\d\d-\d\dT/.test(it.at));
  assert.equal(a.body.last, it.id); lastId = it.id;
});

test("validation at the boundary: no kind field, length, encoding, fields, email, page", async () => {
  const cases = [
    [msg({ type: "idea" }), "unknown_field"], [msg({ text: "" }), "bad_text"], [msg({ text: "   " }), "bad_text"],
    [msg({ text: "x".repeat(1001) }), "bad_text"], [msg({ extra: 1 }), "unknown_field"], [msg({ email: "not-an-email" }), "bad_email"],
    [msg({ page: "<script>" }), "bad_page"], [msg({ edition: "teen" }), "bad_edition"], [msg({ lang: "fr" }), "bad_lang"],
    [msg({ contact: "yes" }), "bad_contact"], [msg({ text: 5 }), "bad_text"], [[1, 2], "bad_body"],
  ];
  for (const [body, code] of cases) {
    const r = await client()("POST", "/api/feedback", body);
    assert.equal(r.status, 400, code); assert.equal(r.body.error, code);
  }
  // exactly 1000 characters (Arabic letters count as one each) is fine
  assert.equal((await client()("POST", "/api/feedback", msg({ text: "ب".repeat(1000) }))).status, 200);
  // a lone surrogate, and bytes that are not UTF-8
  let r = await client()("POST", "/api/feedback", '{"text":"a\\ud800b","edition":"kids","lang":"ar"}', { raw: true, headers: { "content-type": "application/json" } });
  assert.equal(r.status, 400); assert.equal(r.body.error, "bad_text");
  r = await client()("POST", "/api/feedback", new Uint8Array([0x7b, 0x22, 0xff, 0xfe, 0x22, 0x7d]), { raw: true, headers: { "content-type": "application/json" } });
  assert.equal(r.status, 400); assert.equal(r.body.error, "bad_json");
  // control characters are removed, new lines kept
  r = await client()("POST", "/api/feedback", msg({ text: "a\u0000b\u0007\nc" })); assert.equal(r.status, 200);
  const a = await admin(lastId); assert.equal(a.body.items.at(-1).text, "ab\nc"); lastId = a.body.last;
});

test("the CSRF checks of every other endpoint apply", async () => {
  let r = await client()("POST", "/api/feedback", msg(), { headers: { "x-tazkiya": null } });
  assert.equal(r.status, 403); assert.equal(r.body.error, "csrf");
  r = await client()("POST", "/api/feedback", msg(), { headers: { origin: "https://evil.example" } });
  assert.equal(r.status, 403); assert.equal(r.body.error, "bad_origin");
  r = await client()("POST", "/api/feedback", "text=x", { raw: true, headers: { "content-type": "application/x-www-form-urlencoded" } });
  assert.equal(r.status, 415);
});

test("the honeypot: a filled hidden field is thanked and not stored", async () => {
  const r = await client()("POST", "/api/feedback", msg({ text: "spam spam", website: "http://spam.example" }));
  assert.equal(r.status, 200); assert.deepEqual(r.body, { ok: true });
  const a = await admin(lastId); assert.ok(!a.body.items.some(i => i.text === "spam spam"));
});

test("rate limit per address hash", async () => {
  const c = client();
  for (let i = 0; i < 3; i++) assert.equal((await c("POST", "/api/feedback", msg({ text: "n" + i }))).status, 200);
  const r = await c("POST", "/api/feedback", msg({ text: "one too many" }));
  assert.equal(r.status, 429); assert.ok(Number(r.headers.get("retry-after")) > 0);
  assert.equal((await client()("POST", "/api/feedback", msg({ text: "another address" }))).status, 200);
  lastId = (await admin(lastId)).body.last;
});

test("the reader is closed without the token, with a wrong one, and to other methods", async () => {
  for (const auth of [null, "", "Bearer", "Bearer " + ADMIN.slice(0, -1) + (ADMIN.endsWith("A") ? "B" : "A"), "Basic " + ADMIN, ADMIN, "Bearer " + ADMIN + "x", "Bearer wrong-token-of-some-length"]) {
    const r = await admin(0, auth);
    assert.equal(r.status, 401, String(auth && auth.slice(0, 8))); assert.equal(r.body.error, "unauthorized"); assert.ok(!r.body.items);
  }
  const p = await client()("POST", "/api/feedback/admin", {}, { headers: { authorization: "Bearer " + ADMIN } });
  assert.equal(p.status, 405);
  assert.equal((await admin("abc")).status, 400);
  assert.equal((await admin(-1)).status, 400);
});

test("the reader's cursor returns only what is new", async () => {
  const before = (await admin(0)).body.last;
  assert.equal((await client()("POST", "/api/feedback", msg({ text: "new one" }))).status, 200);
  const a = await admin(before);
  assert.equal(a.body.items.length, 1); assert.equal(a.body.items[0].text, "new one"); assert.equal(a.body.more, false);
  const b = await admin(a.body.last); assert.equal(b.body.items.length, 0); assert.equal(b.body.last, a.body.last);
});

test("signed in: no account unless 'you may contact me' is ticked; the link goes with the account", async () => {
  const c = client(); await signIn(c, `fb-${Date.now()}@example.com`);
  const start = (await admin(0)).body.last;
  assert.equal((await c("POST", "/api/feedback", msg({ text: "anonymous though signed in" }))).status, 200);
  assert.equal((await c("POST", "/api/feedback", msg({ text: "please reply", contact: true }))).status, 200);
  let a = await admin(start);
  const anon = a.body.items.find(i => i.text === "anonymous though signed in"), linked = a.body.items.find(i => i.text === "please reply");
  assert.equal(anon.account, false); assert.equal(anon.reply_to, null);
  assert.equal(linked.account, true); assert.match(linked.reply_to, /^fb-\d+@example\.com$/);
  // signed out, the tick attaches nothing
  assert.equal((await client()("POST", "/api/feedback", msg({ text: "ticked, signed out", contact: true }))).status, 200);
  a = await admin(start); assert.equal(a.body.items.find(i => i.text === "ticked, signed out").account, false);
  // deleting the account deletes its linked feedback
  assert.equal((await c("DELETE", "/api/account", { confirm: "delete" })).status, 200);
  a = await admin(start);
  assert.ok(!a.body.items.some(i => i.text === "please reply"));
  assert.ok(a.body.items.some(i => i.text === "anonymous though signed in"));
});

test("markup is returned as data, never as a page", async () => {
  const x = '<img src=x onerror=alert(1)><script>alert(1)</script>';
  assert.equal((await client()("POST", "/api/feedback", msg({ text: x }))).status, 200);
  const a = await admin(0);
  assert.match(a.headers.get("content-type"), /^application\/json/); assert.equal(a.headers.get("x-content-type-options"), "nosniff");
  assert.match(a.headers.get("content-security-policy"), /default-src 'none'/);
  assert.equal(a.body.items.at(-1).text, x);
});
