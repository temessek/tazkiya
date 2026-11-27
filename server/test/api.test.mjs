// Integration tests: the real Pages Functions runtime (wrangler pages dev, workerd) with a fresh local D1.
// Run from outputs/server: node --test test/      (or: npm test)
// BASE=https://<preview>.tazkiya.pages.dev TEST_KEY=... runs the same suite against a deployed preview (no AI stub there:
// the AI test then calls the real model once).
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn, execSync } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url)), ROOT = join(HERE, "..");
const REMOTE = !!process.env.BASE;
const TEST_KEY = process.env.TEST_KEY || "local-test-key-" + Math.random().toString(36).slice(2);
const PORT = 8790 + Math.floor(Math.random() * 100);
let BASE = process.env.BASE || `http://127.0.0.1:${PORT}`;
let proc, tmp, STATE;
const RUN = Math.random().toString(36).slice(2, 8);   // keeps addresses unique across runs against a preview
let ipN = 0; const freshIp = () => `10.0.${RUN.length}.${++ipN}`;

const npx = process.platform === "win32" ? "npx.cmd" : "npx";

before(async () => {
  if (REMOTE) return;
  tmp = mkdtempSync(join(tmpdir(), "tazkiya-api-"));
  const stat = join(tmp, "static"), state = join(tmp, "state"); STATE = state;
  execSync(`mkdir "${stat}"`, { shell: true });
  writeFileSync(join(stat, "index.html"), "<!doctype html><title>t</title>");
  execSync(`${npx} -y wrangler@4.167.0 d1 migrations apply tazkiya --local --persist-to "${state}"`, { cwd: ROOT, stdio: "pipe", shell: true, env: { ...process.env, CI: "1" } });
  const vars = { MAIL_MODE: "test", TEST_KEY, AI_MODE: "stub", APP_ENV: "local", LIMIT_MAIL_IP: "4", LIMIT_MAIL_TO: "3", LIMIT_AI_ACCOUNT: "3", LIMIT_SYNC_ACCOUNT: "500", LIMIT_ACCOUNT_BYTES: "1200000", LIMIT_ACCOUNT_ROWS: "1000", GOOGLE_CLIENT_SECRET: "local-dummy-secret" };
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

// a tiny browser: same-origin headers, the CSRF header, and a cookie jar
function client(ip = freshIp()) {
  const jar = {};
  const c = async (method, path, body, extra = {}) => {
    const headers = { origin: new URL(BASE).origin, "x-tazkiya": "1", "x-test-ip": ip, "x-test-key": TEST_KEY, ...extra.headers };
    if (body !== undefined && !extra.raw) headers["content-type"] = "application/json";
    const ck = Object.entries(jar).map(([k, v]) => `${k}=${v}`).join("; "); if (ck) headers.cookie = ck;
    const r = await fetch(BASE + path, { method, headers, body: body === undefined ? undefined : extra.raw ? body : JSON.stringify(body), redirect: "manual" });
    for (const sc of r.headers.getSetCookie()) { const [kv] = sc.split(";"); const i = kv.indexOf("="); const k = kv.slice(0, i), v = kv.slice(i + 1); if (v) jar[k] = v; else delete jar[k]; }
    const ct = r.headers.get("content-type") || "";
    return { status: r.status, headers: r.headers, body: ct.includes("json") ? await r.json() : await r.text() };
  };
  c.jar = jar; c.ip = ip;
  return c;
}

async function signIn(c, email) {
  const s = await c("POST", "/api/auth/email/start", { email, lang: "ar" });
  assert.equal(s.status, 200, JSON.stringify(s.body)); assert.ok(s.body.test_link, "test link returned in test mode");
  const t = new URL(s.body.test_link).searchParams.get("t");
  const v = await c("POST", "/api/auth/email/verify", "t=" + t, { raw: true, headers: { "content-type": "application/x-www-form-urlencoded" } });
  assert.equal(v.status, 303); return { t, v };
}

const mail = n => `t-${RUN}-${n}@example.com`;
const now = () => Date.now();

test("health answers and reports the sign-in methods", async () => {
  const r = await client()("GET", "/api/health");
  assert.equal(r.status, 200); assert.equal(r.body.ok, true);
  assert.equal(r.headers.get("cache-control"), "no-store");
});

test("unknown routes and methods", async () => {
  const c = client();
  assert.equal((await c("GET", "/api/nothing")).status, 404);
  assert.equal((await c("GET", "/api/sync")).status, 405);
});

test("CSRF: state-changing requests need our origin and the custom header", async () => {
  const c = client();
  let r = await c("POST", "/api/auth/email/start", { email: mail("csrf") }, { headers: { "x-tazkiya": "" } });
  assert.equal(r.status, 403); assert.equal(r.body.error, "csrf");
  r = await c("POST", "/api/auth/email/start", { email: mail("csrf") }, { headers: { origin: "https://evil.example" } });
  assert.equal(r.status, 403); assert.equal(r.body.error, "bad_origin");
  r = await c("POST", "/api/auth/email/start", { email: mail("csrf") }, { headers: { "sec-fetch-site": "cross-site" } });
  assert.equal(r.status, 403);
  r = await c("POST", "/api/auth/email/start", "email=x", { raw: true, headers: { "content-type": "text/plain" } });
  assert.equal(r.status, 415);
});

test("email validation at the boundary", async () => {
  const c = client();
  for (const email of ["", "no-at", "a@b", "a b@example.com", "<x>@example.com", "x".repeat(300) + "@example.com", 42, null])
    assert.equal((await c("POST", "/api/auth/email/start", { email })).status, 400, String(email));
});

test("email link: sign in end to end, single use, session cookie flags", async () => {
  const c = client();
  const s = await c("POST", "/api/auth/email/start", { email: "  " + mail("one").toUpperCase(), lang: "en" });
  assert.equal(s.status, 200);
  const link = new URL(s.body.test_link);
  assert.equal(link.pathname, "/api/auth/email/verify");
  // opening the link shows a confirmation page and does not spend the token
  const page = await c("GET", link.pathname + link.search);
  assert.equal(page.status, 200); assert.match(page.body, /<form method="post"/);
  assert.match(page.headers.get("content-security-policy"), /form-action 'self'/);
  // a POST from another origin is refused
  const t = link.searchParams.get("t");
  const evil = await c("POST", "/api/auth/email/verify", "t=" + t, { raw: true, headers: { "content-type": "application/x-www-form-urlencoded", origin: "https://evil.example" } });
  assert.equal(evil.status, 403);
  const v = await c("POST", "/api/auth/email/verify", "t=" + t + "&lang=en", { raw: true, headers: { "content-type": "application/x-www-form-urlencoded" } });
  assert.equal(v.status, 303); assert.equal(v.headers.get("location"), "/#/signed-in");
  const sc = v.headers.get("set-cookie");
  assert.match(sc, /^__Host-tz=[A-Za-z0-9_-]{43};/); for (const f of ["HttpOnly", "Secure", "SameSite=Lax", "Path=/"]) assert.ok(sc.includes(f), f);
  const me = await c("GET", "/api/me");
  assert.equal(me.status, 200); assert.equal(me.body.account.email, mail("one")); assert.deepEqual(me.body.profiles, []); assert.equal(me.body.profile_max, 4);
  // the same link cannot be used twice
  const again = await client()("POST", "/api/auth/email/verify", "t=" + t, { raw: true, headers: { "content-type": "application/x-www-form-urlencoded" } });
  assert.equal(again.status, 400);
  // a made-up token is refused the same way
  const fake = await client()("POST", "/api/auth/email/verify", "t=" + "A".repeat(43), { raw: true, headers: { "content-type": "application/x-www-form-urlencoded" } });
  assert.equal(fake.status, 400);
  // without the test key the link is not returned
  const noKey = await client()("POST", "/api/auth/email/start", { email: mail("nokey") }, { headers: { "x-test-key": "wrong" } });
  assert.equal(noKey.status, 200); assert.equal(noKey.body.test_link, undefined);
});

test("signed out: protected routes answer 401, a forged cookie too", async () => {
  const c = client();
  for (const [m, p] of [["GET", "/api/me"], ["POST", "/api/sync"], ["POST", "/api/extract"], ["DELETE", "/api/account"], ["POST", "/api/burn"]])
    assert.equal((await c(m, p, m === "GET" ? undefined : {})).status, 401, p);
  c.jar["__Host-tz"] = "B".repeat(43);
  assert.equal((await c("GET", "/api/me")).status, 401);
});

test("logout ends the session", async () => {
  const c = client(); await signIn(c, mail("logout"));
  const cookie = c.jar["__Host-tz"];
  assert.equal((await c("POST", "/api/auth/logout", {})).status, 200);
  const d = client(); d.jar["__Host-tz"] = cookie;
  assert.equal((await d("GET", "/api/me")).status, 401);
});

test("rate limits on sign-in emails (per address and per inbox)", { skip: REMOTE }, async () => {
  const c = client();
  for (let i = 0; i < 4; i++) assert.equal((await c("POST", "/api/auth/email/start", { email: mail("rl" + i) })).status, 200);
  const r = await c("POST", "/api/auth/email/start", { email: mail("rl9") });
  assert.equal(r.status, 429); assert.ok(Number(r.headers.get("retry-after")) > 0);
  // one inbox from many addresses
  for (let i = 0; i < 3; i++) assert.equal((await client()("POST", "/api/auth/email/start", { email: mail("inbox") })).status, 200);
  assert.equal((await client()("POST", "/api/auth/email/start", { email: mail("inbox") })).status, 429);
});

test("profiles: add, rename, the limit of four", async () => {
  const c = client(); await signIn(c, mail("prof"));
  for (const [pid, name, edition] of [["p1", "Parent", "adult"], ["p2", "Child A", "kids"], ["p3", "Child B", "kids"], ["p4", "Child C", "kids"]])
    assert.equal((await c("PUT", "/api/profiles/" + pid, { name, edition })).status, 200);
  const r = await c("PUT", "/api/profiles/p5", { name: "Too many" });
  assert.equal(r.status, 400); assert.equal(r.body.error, "profile_limit");
  assert.equal((await c("PUT", "/api/profiles/p2", { name: "Renamed" })).body.profiles.find(p => p.pid === "p2").name, "Renamed");
  assert.equal((await c("PUT", "/api/profiles/p2", { name: "x".repeat(21) })).status, 400);
  assert.equal((await c("PUT", "/api/profiles/p2", { edition: "teen" })).status, 400);
  assert.equal((await c("PUT", "/api/profiles/p2", { name: "ok", role: "admin" })).status, 400);
  assert.equal((await c("PUT", "/api/profiles/q1", { name: "x" })).status, 404);
});

test("sync: push every kind, pull on another device, last write wins", async () => {
  const a = client(); await signIn(a, mail("sync"));
  const b = client(); await signIn(b, mail("sync"));   // second device, same account
  const T = now() - 60000;
  const changes = [
    { pid: "p1", kind: "note", id: "n1", t: T, u: T, data: { tx: "اليوم ساعدتني أمي في الواجب.\nثم لعبنا.", d: "2026-11-23" } },
    { pid: "p1", kind: "blessing", id: "b1", t: T, u: T, data: { tx: "أمي التي ساعدتني", src: "ai", n: "n1" } },
    { pid: "p1", kind: "challenge", id: "c1", t: T, u: T, data: { tx: "أن أهدأ حين أغضب", f: "monkey" } },
    { pid: "p1", kind: "khabia", id: "k1", t: T, u: T, data: { tx: "سرّ", n: "n1" } },
    { pid: "p1", kind: "seen", id: "s1", t: T, u: T, data: { from: "p2", v: "human:1", tx: "رأيتك تساعد" } },
  ];
  const r = await a("POST", "/api/sync", { since: "0", profiles: [{ pid: "p1", name: "Me", edition: "adult" }, { pid: "p2", name: "Kid", edition: "kids" }], changes });
  assert.equal(r.status, 200, JSON.stringify(r.body)); assert.deepEqual(r.body.rejected, []);
  assert.equal(r.body.changes.length, 5); assert.equal(r.body.more, false);

  const p = await b("POST", "/api/sync", { since: "0" });
  assert.equal(p.body.changes.length, 5);
  assert.equal(p.body.changes.find(c => c.id === "n1").data.tx, changes[0].data.tx);
  assert.deepEqual(p.body.profiles.map(x => x.pid), ["p1", "p2"]);
  const cur = p.body.cursor;

  // an older edit loses, a newer one wins
  await b("POST", "/api/sync", { since: cur, changes: [{ ...changes[1], u: T - 1000, data: { tx: "older" } }] });
  let q = await a("POST", "/api/sync", { since: cur });
  assert.equal(q.body.changes.length, 0, "nothing newer after a losing write");
  await b("POST", "/api/sync", { since: cur, changes: [{ ...changes[1], u: T + 1000, data: { tx: "newer", src: "hand" } }] });
  q = await a("POST", "/api/sync", { since: cur });
  assert.equal(q.body.changes.length, 1); assert.equal(q.body.changes[0].data.tx, "newer");
  // nothing new: an empty page and a stable cursor
  const z = await a("POST", "/api/sync", { since: q.body.cursor });
  assert.equal(z.body.changes.length, 0); assert.equal(z.body.cursor, q.body.cursor);
});

test("sync: a profile's progress as one state object, last write wins, shape and size checked", async () => {
  const a = client(); await signIn(a, mail("state"));
  const T = now() - 60000, st = { pid: "p1", kind: "state", id: "main", t: T, u: T, data: { s: { read: { "pig:1": true }, lang: "ar" } } };
  let r = await a("POST", "/api/sync", { since: "0", profiles: [{ pid: "p1", edition: "kids" }], changes: [st] });
  assert.equal(r.status, 200, JSON.stringify(r.body)); assert.deepEqual(r.body.changes[0].data, st.data);
  // an update replaces it (the cap counts it once), an older one loses
  r = await a("POST", "/api/sync", { since: r.body.cursor, changes: [{ ...st, u: T + 1000, data: { s: { read: { "pig:1": true, "pig:2": true } } } }] });
  assert.equal(r.status, 200, JSON.stringify(r.body)); assert.equal(Object.keys(r.body.changes[0].data.s.read).length, 2);
  r = await a("POST", "/api/sync", { since: r.body.cursor, changes: [{ ...st, u: T + 10 }] });
  assert.equal(r.body.changes.length, 0);
  const bad = [[{ ...st, id: "other" }, "bad_id"], [{ ...st, data: { s: [1] } }, "bad_s"], [{ ...st, data: { s: "x" } }, "bad_s"],
    [{ ...st, data: { s: { big: "x".repeat(270000) } } }, "state_too_large"], [{ ...st, data: { s: {}, more: 1 } }, "unknown_field"]];
  for (const [ch, code] of bad) {
    const q = await a("POST", "/api/sync", { since: "0", changes: [ch] });
    assert.equal(q.status, 400, code + " " + JSON.stringify(q.body)); assert.equal(q.body.error, code);
  }
});

test("sync: pages of 500 with a cursor", async () => {
  const c = client(); await signIn(c, mail("pages"));
  const T = now() - 60000;
  for (let k = 0; k < 4; k++) {
    const changes = Array.from({ length: 150 }, (_, i) => ({ pid: "p1", kind: "blessing", id: `b${k}-${i}`, t: T + i, u: T + i, data: { tx: "نعمة " + i } }));
    const r = await c("POST", "/api/sync", { since: "0", profiles: k ? undefined : [{ pid: "p1" }], changes });
    assert.equal(r.status, 200, JSON.stringify(r.body));
  }
  const d = client(); await signIn(d, mail("pages"));
  const p1 = await d("POST", "/api/sync", { since: "0" });
  assert.equal(p1.body.changes.length, 500); assert.equal(p1.body.more, true);
  const p2 = await d("POST", "/api/sync", { since: p1.body.cursor });
  assert.equal(p2.body.changes.length, 100); assert.equal(p2.body.more, false);
  const ids = new Set([...p1.body.changes, ...p2.body.changes].map(x => x.id)); assert.equal(ids.size, 600);
});

test("sync validation: kinds, fields, lengths, ids, timestamps, sizes", async () => {
  const c = client(); await signIn(c, mail("val"));
  await c("PUT", "/api/profiles/p1", { name: "Me" });
  const T = now() - 1000, ok = { pid: "p1", kind: "blessing", id: "x1", t: T, u: T, data: { tx: "ok" } };
  const cases = [
    [{ ...ok, kind: "secret" }, "bad_kind"],
    [{ ...ok, id: "Bad ID" }, "bad_id"],
    [{ ...ok, id: "x".repeat(25) }, "bad_id"],
    [{ ...ok, pid: "p0" }, "bad_pid"],
    [{ ...ok, t: "yesterday" }, "bad_t"],
    [{ ...ok, t: 1000 }, "bad_t"],
    [{ ...ok, u: T + 3 * 86400000 }, "bad_u"],
    [{ ...ok, data: { tx: "x".repeat(201) } }, "bad_tx"],
    [{ ...ok, data: { tx: "" } }, "bad_tx"],
    [{ ...ok, data: { tx: 5 } }, "bad_tx"],
    [{ ...ok, data: { tx: "ok", evil: 1 } }, "unknown_field"],
    [{ ...ok, data: { tx: "ok", f: "dragon" } }, "bad_f"],
    [{ ...ok, extra: 1 }, "unknown_field"],
    [{ ...ok, del: true, data: { tx: "x" } }, "data_on_delete"],
    [{ ...ok, kind: "note", data: { tx: "x".repeat(8001) } }, "bad_tx"],
    [{ ...ok, kind: "note", data: { tx: "ok", d: "23/11/2026" } }, "bad_d"],
    [{ ...ok, kind: "seen", data: { from: "p2" } }, "bad_seen"],
    [{ ...ok, kind: "seen", data: { from: "x", tx: "hi" } }, "bad_pid"],
    [{ ...ok, kind: "challenge", data: { tx: "ok", done: "yes" } }, "bad_done"],
  ];
  for (const [ch, code] of cases) {
    const r = await c("POST", "/api/sync", { since: "0", changes: [ch] });
    assert.equal(r.status, 400, code + " " + JSON.stringify(r.body)); assert.equal(r.body.error, code);
  }
  assert.equal((await c("POST", "/api/sync", { since: "nope" })).body.error, "bad_since");
  assert.equal((await c("POST", "/api/sync", { since: "0", junk: 1 })).body.error, "unknown_field");
  assert.equal((await c("POST", "/api/sync", { since: "0", changes: Array(201).fill(ok) })).body.error, "too_many_changes");
  assert.equal((await c("POST", "/api/sync", "{not json", { raw: true, headers: { "content-type": "application/json" } })).status, 400);
  // a profile that was never registered: the change is refused, the rest goes through
  const r = await c("POST", "/api/sync", { since: "0", changes: [ok, { ...ok, pid: "p3", id: "x2" }] });
  assert.equal(r.status, 200); assert.deepEqual(r.body.rejected, [{ pid: "p3", kind: "blessing", id: "x2", reason: "no_profile" }]);
  // control characters are removed, new lines kept, text trimmed
  const w = await c("POST", "/api/sync", { since: "0", changes: [{ ...ok, id: "x3", kind: "note", data: { tx: "  a\u0007b\nc  " } }] });
  assert.equal(w.body.changes.find(x => x.id === "x3").data.tx, "ab\nc");
  // a clock a little ahead is pulled back to the server's time
  const f = await c("POST", "/api/sync", { since: "0", changes: [{ ...ok, id: "x4", t: now() + 3600000, u: now() + 3600000 }] });
  assert.ok(f.body.changes.find(x => x.id === "x4").t <= now());
});

test("delete one entry: the text leaves the server, other devices see the deletion", async () => {
  const a = client(); await signIn(a, mail("del"));
  const T = now() - 5000;
  await a("POST", "/api/sync", { since: "0", profiles: [{ pid: "p1" }], changes: [{ pid: "p1", kind: "note", id: "n9", t: T, u: T, data: { tx: "private words" } }] });
  const b = client(); await signIn(b, mail("del"));
  const before = await b("POST", "/api/sync", { since: "0" });
  assert.equal((await a("DELETE", "/api/entries/p1/note/n9")).status, 200);
  const after = await b("POST", "/api/sync", { since: before.body.cursor });
  assert.deepEqual(after.body.changes.map(x => [x.id, x.del, x.data]), [["n9", true, undefined]]);
  assert.ok(!JSON.stringify(after.body).includes("private words"));
  // a stale device cannot bring it back with an older edit
  await b("POST", "/api/sync", { since: after.body.cursor, changes: [{ pid: "p1", kind: "note", id: "n9", t: T, u: T + 1, data: { tx: "private words" } }] });
  const full = await client()("GET", "/api/health"); assert.equal(full.status, 200);
  const all = await a("POST", "/api/sync", { since: "0" });
  assert.equal(all.body.changes.find(x => x.id === "n9").del, true);
  assert.equal((await a("DELETE", "/api/entries/p1/secret/n9")).status, 400);
  assert.equal((await a("DELETE", "/api/entries/p7/note/n9")).status, 404);
});

test("year-end burn: challenges leave the server, blessings stay, older challenges are refused after", async () => {
  const a = client(); await signIn(a, mail("burn"));
  const T = now() - 10000;
  await a("POST", "/api/sync", { since: "0", profiles: [{ pid: "p1" }, { pid: "p2", edition: "kids" }], changes: [
    { pid: "p1", kind: "challenge", id: "c1", t: T, u: T, data: { tx: "hard thing one" } },
    { pid: "p1", kind: "challenge", id: "c2", t: T, u: T, data: { tx: "hard thing two" } },
    { pid: "p1", kind: "blessing", id: "b1", t: T, u: T, data: { tx: "kept" } },
    { pid: "p1", kind: "note", id: "n1", t: T, u: T, data: { tx: "my notebook" } },
    { pid: "p2", kind: "challenge", id: "c1", t: T, u: T, data: { tx: "the other child's" } },
  ] });
  const r = await a("POST", "/api/burn", { pid: "p1" });
  assert.equal(r.status, 200); assert.equal(r.body.burned, 2);
  const all = (await a("POST", "/api/sync", { since: "0" })).body.changes;
  const get = (pid, id, kind) => all.find(x => x.pid === pid && x.id === id && x.kind === kind);
  assert.equal(get("p1", "c1", "challenge").del, true); assert.equal(get("p1", "c2", "challenge").del, true);
  assert.equal(get("p1", "b1", "blessing").data.tx, "kept");
  assert.equal(get("p1", "n1", "note").data.tx, "my notebook", "the notebook stays unless asked");
  assert.equal(get("p2", "c1", "challenge").data.tx, "the other child's", "other profiles untouched");
  assert.ok(!JSON.stringify(all).includes("hard thing"));
  // an offline device uploading an old challenge after the burn: refused
  const s = await a("POST", "/api/sync", { since: "0", changes: [{ pid: "p1", kind: "challenge", id: "c3", t: T, u: now(), data: { tx: "hard thing three" } }] });
  assert.equal(s.body.rejected[0].reason, "burned");
  // a new challenge after the burn is fine
  const n = await a("POST", "/api/sync", { since: "0", changes: [{ pid: "p1", kind: "challenge", id: "c4", t: now(), u: now(), data: { tx: "new year" } }] });
  assert.deepEqual(n.body.rejected, []);
  // the notebook too, when asked
  const r2 = await a("POST", "/api/burn", { pid: "p1", notes: true });
  assert.equal(r2.body.burned, 2);
  assert.equal((await a("POST", "/api/burn", { pid: "p1", extra: 1 })).status, 400);
});

test("delete a profile: its journal goes, the deletion reaches other devices, it returns only as fresh", async () => {
  const a = client(); await signIn(a, mail("pdel"));
  const T = now() - 5000;
  await a("POST", "/api/sync", { since: "0", profiles: [{ pid: "p1" }, { pid: "p2", name: "Kid" }], changes: [{ pid: "p2", kind: "note", id: "n1", t: T, u: T, data: { tx: "child's words" } }] });
  assert.equal((await a("DELETE", "/api/profiles/p1")).status, 400);
  assert.equal((await a("DELETE", "/api/profiles/p2")).status, 200);
  const s = await a("POST", "/api/sync", { since: "0" });
  assert.deepEqual(s.body.profiles.find(p => p.pid === "p2"), { pid: "p2", gone: true, updated: s.body.profiles.find(p => p.pid === "p2").updated });
  assert.ok(!JSON.stringify(s.body).includes("child's words"));
  const stale = await a("POST", "/api/sync", { since: "0", profiles: [{ pid: "p2", name: "Kid" }] });
  assert.equal(stale.status, 409);
  assert.equal((await a("PUT", "/api/profiles/p2", { name: "New kid", fresh: true })).status, 200);
});

test("delete the account: everything goes, the session ends, the same email starts empty", async () => {
  const a = client(); await signIn(a, mail("acct"));
  const T = now() - 5000;
  await a("POST", "/api/sync", { since: "0", profiles: [{ pid: "p1" }], changes: [{ pid: "p1", kind: "note", id: "n1", t: T, u: T, data: { tx: "gone soon" } }] });
  assert.equal((await a("DELETE", "/api/account", {})).body.error, "confirm_required");
  const r = await a("DELETE", "/api/account", { confirm: "delete" });
  assert.equal(r.status, 200); assert.match(r.headers.get("set-cookie"), /Max-Age=0/);
  assert.equal((await a("GET", "/api/me")).status, 401);
  const b = client(); await signIn(b, mail("acct"));
  const me = await b("GET", "/api/me"); assert.deepEqual(me.body.profiles, []);
  assert.equal((await b("POST", "/api/sync", { since: "0" })).body.changes.length, 0);
});

test("adult attestation: stated once, kept with its time, shown in /me", async () => {
  const c = client(); await signIn(c, mail("attest"));
  assert.equal((await c("GET", "/api/me")).body.account.adult_at, null);
  assert.equal((await c("GET", "/api/me")).body.account.picture, null, "no picture without a Google sign-in");
  for (const body of [{}, { confirm: "yes" }, { confirm: true, age: 30 }]) assert.equal((await c("POST", "/api/account/adult", body)).body.error, "confirm_required");
  const r = await c("POST", "/api/account/adult", { confirm: true });
  assert.equal(r.status, 200); assert.ok(r.body.adult_at > now() - 60000);
  const again = await c("POST", "/api/account/adult", { confirm: true });
  assert.equal(again.body.adult_at, r.body.adult_at, "the first statement's time is kept");
  assert.equal((await c("GET", "/api/me")).body.account.adult_at, r.body.adult_at);
});

test("AI extract: adults only, the holder's own profile, validation, the care line, rate limit", async () => {
  const c = client(); await signIn(c, mail("ai"));
  await c("POST", "/api/sync", { since: "0", profiles: [{ pid: "p1", name: "Parent", edition: "adult" }, { pid: "p2", name: "Child", edition: "kids" }, { pid: "p3", name: "Teen", edition: "adult" }] });
  const ok = { pid: "p1", text: "Today my colleague covered for me when I was late, then I lost my temper with my son.", lang: "en" };
  // without the attestation: refused
  let r = await c("POST", "/api/extract", ok);
  assert.equal(r.status, 403); assert.equal(r.body.error, "adult_attestation_required");
  await c("POST", "/api/account/adult", { confirm: true });
  // a child's profile, another family member's profile, the children's edition: refused
  r = await c("POST", "/api/extract", { ...ok, pid: "p2" }); assert.equal(r.status, 403); assert.equal(r.body.error, "own_profile_only");
  r = await c("POST", "/api/extract", { ...ok, pid: "p3" }); assert.equal(r.status, 403); assert.equal(r.body.error, "own_profile_only");
  r = await c("POST", "/api/extract", { ...ok, edition: "kids" }); assert.equal(r.status, 403); assert.equal(r.body.error, "not_for_children");
  // the holder's own profile set to the children's edition: refused
  await c("PUT", "/api/profiles/p1", { name: "Parent", edition: "kids" });
  r = await c("POST", "/api/extract", ok); assert.equal(r.status, 403); assert.equal(r.body.error, "not_for_children");
  await c("PUT", "/api/profiles/p1", { name: "Parent", edition: "adult" });
  // validation
  assert.equal((await c("POST", "/api/extract", { text: ok.text })).body.error, "bad_pid");
  assert.equal((await c("POST", "/api/extract", { ...ok, text: "short" })).body.error, "bad_text");
  assert.equal((await c("POST", "/api/extract", { ...ok, text: "x".repeat(8001) })).body.error, "bad_text");
  assert.equal((await c("POST", "/api/extract", { ...ok, other: 1 })).body.error, "unknown_field");
  assert.equal((await c("POST", "/api/extract", { ...ok, source: "child" })).body.error, "bad_source");
  // the adult's own journal
  r = await c("POST", "/api/extract", ok);
  assert.equal(r.status, 200, JSON.stringify(r.body));
  assert.ok(Array.isArray(r.body.good) && r.body.good.length >= 1 && r.body.good.length <= 6);
  assert.ok(Array.isArray(r.body.challenges) && r.body.challenges.length <= 6);
  assert.ok(Array.isArray(r.body.hidden) && r.body.hidden.length <= 6);
  assert.deepEqual(r.body.blessings, r.body.good, "blessings repeats good for app versions before 27 Nov 2026");
  assert.equal(r.body.care, undefined); assert.equal(r.body.text, undefined, "no page text for a written entry");
  if (REMOTE) {
    // the real model on the preview: Arabic in, Arabic out, and the care line for a frightening entry
    const ar = await c("POST", "/api/extract", { pid: "p1", text: "اليوم ساعدت أمي في ترتيب المطبخ وفرحت كثيرًا. لكني تأخرت في صلاة العصر لأني انشغلت بالهاتف.", lang: "ar", gender: "m" });
    assert.equal(ar.status, 200, JSON.stringify(ar.body));
    assert.ok(ar.body.good.length >= 1 && ar.body.good.every(x => /[؀-ۿ]/.test(x)), JSON.stringify(ar.body));
    const k = await c("POST", "/api/extract", { pid: "p1", source: "session", text: "جلستُ مع ابني بعد المدرسة، فأخبرني أن ولدًا في الصف يضربه كل يوم ويأخذ مصروفه.", lang: "ar", gender: "f" });
    assert.equal(k.status, 200, JSON.stringify(k.body)); assert.match(k.body.care || "", /طفلك في خطر/);
  } else {
    const k = await c("POST", "/api/extract", { pid: "p1", source: "session", text: "My son told me a boy at school hits him every day.", lang: "en" });
    assert.match(k.body.care, /If your child may be unsafe/);
    let lim; for (let i = 0; i < 3 && (!lim || lim.status !== 429); i++) lim = await c("POST", "/api/extract", { ...ok, text: "one more entry for the limit" });
    assert.equal(lim.status, 429, "the per-account daily limit (3 in tests) is reached");
  }
});

// a JPEG and a PNG that are only their first bytes and padding: enough for the format check, never sent anywhere (stub)
const fakeImg = (mime, head) => `data:${mime};base64,` + Buffer.concat([Buffer.from(head), Buffer.alloc(400, 7)]).toString("base64");
const JPG = fakeImg("image/jpeg", [0xff, 0xd8, 0xff, 0xe0]), PNG = fakeImg("image/png", [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

test("AI extract, a photographed page: the same adult-only rules, format and size checked, the page's text comes back", { skip: REMOTE }, async () => {
  const h = await client()("GET", "/api/health");
  assert.equal(h.body.ai, true); assert.equal(h.body.ai_image, true, "the local stub reads photos");
  const c = client(); await signIn(c, mail("img"));
  await c("POST", "/api/sync", { since: "0", profiles: [{ pid: "p1", name: "Parent", edition: "adult" }, { pid: "p2", name: "Child", edition: "kids" }] });
  const ok = { pid: "p1", image: JPG, lang: "ar", edition: "adult" };
  let r = await c("POST", "/api/extract", ok);
  assert.equal(r.status, 403); assert.equal(r.body.error, "adult_attestation_required");
  await c("POST", "/api/account/adult", { confirm: true });
  r = await c("POST", "/api/extract", { ...ok, pid: "p2" }); assert.equal(r.body.error, "own_profile_only");
  r = await c("POST", "/api/extract", { ...ok, edition: "kids" }); assert.equal(r.body.error, "not_for_children");
  // the boundary: one of text or image, a real JPEG or PNG, a journal page only, a size cap
  assert.equal((await c("POST", "/api/extract", { ...ok, text: "and some text too" })).body.error, "text_or_image");
  for (const bad of [JPG.replace("image/jpeg", "image/gif"), JPG.replace("image/jpeg", "image/png"), PNG.replace("image/png", "image/jpeg"),
    "data:image/jpeg;base64,/9j/4AAQ", JPG + "<script>", "https://example.com/page.jpg", JPG.replace("base64,", "base64, "), 12, ["x"], { src: JPG }])
    assert.equal((await c("POST", "/api/extract", { ...ok, image: bad })).body.error, "bad_image", String(bad).slice(0, 40));
  assert.equal((await c("POST", "/api/extract", { ...ok, source: "session" })).body.error, "bad_source");
  const big = fakeImg("image/jpeg", [0xff, 0xd8, 0xff, 0xe0]).slice(0, 23) + "A".repeat(2000100);
  assert.ok([400, 413].includes((await c("POST", "/api/extract", { ...ok, image: big })).status), "an image past the cap is refused");
  // a JPEG and a PNG page
  r = await c("POST", "/api/extract", ok);
  assert.equal(r.status, 200, JSON.stringify(r.body));
  assert.match(r.body.text, /stub page text/); assert.equal(r.body.date, ""); assert.ok(r.body.good.length >= 1);
  r = await c("POST", "/api/extract", { ...ok, image: PNG }); assert.equal(r.status, 200);
  // a hidden deed comes back in its own list (stub keyword)
  r = await c("POST", "/api/extract", { pid: "p1", text: "stub-hidden: I paid for a stranger's bread without telling anyone.", lang: "en" });
  assert.deepEqual(r.body.hidden, ["stub hidden deed"]);
});

test("Google sign-in: inactive without its secret, otherwise a PKCE redirect bound to this browser", async () => {
  const h = await client()("GET", "/api/health");
  const c = client();
  const r = await c("GET", "/api/auth/google/start");
  if (!h.body.sign_in.google) { assert.equal(r.status, 503); assert.equal(r.body.error, "google_not_configured"); return; }
  assert.equal(r.status, 302);
  const to = new URL(r.headers.get("location"));
  assert.equal(to.origin + to.pathname, "https://accounts.google.com/o/oauth2/v2/auth");
  const q = to.searchParams;
  assert.match(q.get("client_id"), /\.apps\.googleusercontent\.com$/);
  assert.equal(q.get("redirect_uri"), new URL(BASE).origin + "/api/auth/google/callback");
  assert.equal(q.get("scope"), "openid email profile");
  assert.equal(q.get("response_type"), "code"); assert.equal(q.get("code_challenge_method"), "S256");
  assert.match(q.get("code_challenge"), /^[A-Za-z0-9_-]{43}$/); assert.ok(q.get("nonce") && q.get("state"));
  assert.equal(c.jar["__Host-tz-o"], q.get("state"), "the state is also kept in this browser's cookie");
  assert.match(r.headers.get("set-cookie"), /HttpOnly; Secure; SameSite=Lax/);
  // a callback from another browser (no state cookie), a wrong state, or an error: back to the app, no session
  for (const [who, qs] of [[client(), `state=${q.get("state")}&code=x`], [c, "state=wrong&code=x"], [c, "error=access_denied"]]) {
    const cb = await who("GET", "/api/auth/google/callback?" + qs);
    assert.equal(cb.status, 302); assert.equal(cb.headers.get("location"), "/#/signin?err=google");
    assert.equal(who.jar["__Host-tz"], undefined);
  }
});

// ---------- security review, 23 Nov 2026 ----------

test("security headers on every API answer: HSTS, a CSP that runs nothing, no framing, no caching", async () => {
  for (const r of [await client()("GET", "/api/health"), await client()("GET", "/api/me"), await client()("GET", "/api/nothing")]) {
    assert.match(r.headers.get("strict-transport-security") || "", /max-age=31536000/);
    assert.match(r.headers.get("content-security-policy") || "", /default-src 'none'.*frame-ancestors 'none'/);
    assert.equal(r.headers.get("x-frame-options"), "DENY"); assert.equal(r.headers.get("cache-control"), "no-store");
    assert.equal(r.headers.get("x-content-type-options"), "nosniff"); assert.equal(r.headers.get("access-control-allow-origin"), null);
  }
});

test("bodies are cut off at their limit, with or without Content-Length", async () => {
  const c = client();
  const big = JSON.stringify({ email: "x".repeat(10000) + "@example.com" });
  assert.equal((await c("POST", "/api/auth/email/start", big, { raw: true, headers: { "content-type": "application/json" } })).status, 413);
  // a streamed (chunked) body has no Content-Length: it is still refused past the limit
  const stream = new ReadableStream({ start(ctl) { for (let i = 0; i < 20; i++) ctl.enqueue(new TextEncoder().encode("x".repeat(1024))); ctl.close(); } });
  const r = await fetch(BASE + "/api/auth/email/start", { method: "POST", body: stream, duplex: "half",
    headers: { origin: new URL(BASE).origin, "x-tazkiya": "1", "x-test-ip": freshIp(), "content-type": "application/json" } });
  assert.equal(r.status, 413);
});

test("one account never reaches another's journal, profiles, entries or burn (IDOR)", async () => {
  const a = client(); await signIn(a, mail("idor-a"));
  const b = client(); await signIn(b, mail("idor-b"));
  const T = now() - 5000;
  await a("POST", "/api/sync", { since: "0", profiles: [{ pid: "p1", name: "A" }, { pid: "p2", name: "A kid" }],
    changes: [{ pid: "p2", kind: "note", id: "secret1", t: T, u: T, data: { tx: "a's child wrote this" } },
              { pid: "p1", kind: "challenge", id: "ch1", t: T, u: T, data: { tx: "a's challenge" } }] });
  // b pulls from the beginning: nothing of a's
  const pb = await b("POST", "/api/sync", { since: "0" });
  assert.equal(pb.body.changes.length, 0); assert.deepEqual(pb.body.profiles, []);
  assert.ok(!JSON.stringify(pb.body).includes("a's"));
  // b's deletes and burn name the same pids and ids, and act only inside b's own account
  assert.equal((await b("DELETE", "/api/entries/p2/note/secret1")).status, 404);
  assert.equal((await b("POST", "/api/burn", { pid: "p1" })).status, 404);
  assert.equal((await b("DELETE", "/api/profiles/p2")).status, 200);
  // b writing the same ids into its own p1 does not touch a's rows
  await b("POST", "/api/sync", { since: "0", profiles: [{ pid: "p1" }, { pid: "p2", fresh: true }], changes: [{ pid: "p2", kind: "note", id: "secret1", t: T, u: T + 99999, data: { tx: "b's text" } }] });
  const pa = await a("POST", "/api/sync", { since: "0" });
  assert.equal(pa.body.changes.find(x => x.id === "secret1").data.tx, "a's child wrote this");
  assert.equal(pa.body.changes.find(x => x.id === "ch1").data.tx, "a's challenge");
  assert.equal(pa.body.profiles.find(p => p.pid === "p2").name, "A kid");
});

test("an account's stored journal has a ceiling, in bytes and in rows (deletion markers too)", { skip: REMOTE }, async () => {
  const c = client(); await signIn(c, mail("full"));
  const T = now() - 60000;
  const notes = k => Array.from({ length: 95 }, (_, i) => ({ pid: "p1", kind: "note", id: `n${k}-${i}`, t: T + i, u: T + i, data: { tx: "x".repeat(8000) } }));
  let r = await c("POST", "/api/sync", { since: "0", profiles: [{ pid: "p1" }], changes: notes(0) });
  assert.equal(r.status, 200, JSON.stringify(r.body).slice(0, 200));
  r = await c("POST", "/api/sync", { since: "0", changes: notes(1) });
  assert.equal(r.status, 413); assert.equal(r.body.error, "account_full");
  // rows: bare deletion markers carry no text, yet they count
  const d = client(); await signIn(d, mail("rows"));
  for (let k = 0; k < 5; k++) {
    r = await d("POST", "/api/sync", { since: "0", profiles: k ? undefined : [{ pid: "p1" }],
      changes: Array.from({ length: 200 }, (_, i) => ({ pid: "p1", kind: "blessing", id: `d${k}-${i}`, t: T, u: T, del: true })) });
    assert.equal(r.status, 200, JSON.stringify(r.body).slice(0, 200));
  }
  r = await d("POST", "/api/sync", { since: "0", changes: [{ pid: "p1", kind: "blessing", id: "one-more", t: T, u: T, data: { tx: "x" } }] });
  assert.equal(r.status, 413); assert.equal(r.body.error, "account_full");
});

test("a session ends a year after sign-in, however often it is used", { skip: REMOTE }, async () => {
  const c = client(); await signIn(c, mail("old"));
  assert.equal((await c("GET", "/api/me")).status, 200);
  const old = Date.now() - 366 * 86400000, hash = createHash("sha256").update(c.jar["__Host-tz"]).digest("hex");
  execSync(`${npx} -y wrangler@4.167.0 d1 execute tazkiya --local --persist-to "${STATE}" --command "UPDATE sessions SET created = ${old}, seen = ${Date.now()} WHERE hash = '${hash}'"`,
    { cwd: ROOT, stdio: "pipe", shell: true, env: { ...process.env, CI: "1" } });
  assert.equal((await c("GET", "/api/me")).status, 401);
});
