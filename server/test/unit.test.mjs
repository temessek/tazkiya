// Unit tests that call the router and handlers directly (no wrangler): the production host check and Google account linking.
// Run from outputs/server: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { handle } from "../src/api.js";
import { googleCallback, googlePicture } from "../src/auth.js";

const PROD = { APP_ENV: "production" };

test("production answers only on tazkiya.family: pages.dev, deployment hashes and other hosts get 404", async () => {
  for (const host of ["tazkiya.pages.dev", "8ee0f7c1.tazkiya.pages.dev", "server-preview.tazkiya.pages.dev", "www.tazkiya.family", "evil.example"]) {
    const r = await handle(new Request(`https://${host}/api/health`), PROD);
    assert.equal(r.status, 404, host); assert.equal((await r.json()).error, "not_found");
  }
  // the real host goes on to the routes (no database in this test, hence 503)
  const ok = await handle(new Request("https://tazkiya.family/api/me"), PROD);
  assert.equal(ok.status, 503);
  // previews and local runs are not restricted; ALLOWED_HOSTS can widen production
  assert.equal((await handle(new Request("https://x.tazkiya.pages.dev/api/me"), { APP_ENV: "preview" })).status, 503);
  assert.equal((await handle(new Request("https://www.tazkiya.family/api/me"), { ...PROD, ALLOWED_HOSTS: "tazkiya.family, www.tazkiya.family" })).status, 503);
});

// a tiny D1 stand-in: answers by the start of each statement
function fakeDb(account) {
  const log = [];
  const stmt = sql => ({
    bind: (...a) => ({
      sql, a,
      first: async () => {
        log.push(sql);
        if (sql.startsWith("DELETE FROM oauth_states")) return { verifier: "v".repeat(64), nonce: "N1", expires: Date.now() + 60000 };
        if (sql.startsWith("SELECT id FROM accounts WHERE google_sub")) return null;
        if (sql.startsWith("SELECT id, google_sub FROM accounts WHERE email")) return account;
        return null;
      },
      run: async () => { log.push(sql); if (sql.startsWith("UPDATE accounts SET picture")) log.pics = (log.pics || []).concat([a[0]]); return { meta: { changes: sql.startsWith("UPDATE accounts SET google_sub") && !account.google_sub ? 1 : 0 } }; },
    }),
  });
  return { log, prepare: sql => stmt(sql), batch: async list => { list.forEach(s => log.push(s.sql)); return list.map(() => ({ meta: {} })); } };
}

const b64 = o => Buffer.from(JSON.stringify(o)).toString("base64url");
async function callback(account, extra = {}) {
  const env = { GOOGLE_CLIENT_ID: "cid.apps.googleusercontent.com", GOOGLE_CLIENT_SECRET: "s", DB: fakeDb(account) };
  const claims = { iss: "https://accounts.google.com", aud: env.GOOGLE_CLIENT_ID, exp: Math.floor(Date.now() / 1000) + 600, nonce: "N1",
    sub: "google-sub-new", email: "parent@example.com", email_verified: true, ...extra };
  const realFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(JSON.stringify({ id_token: `h.${b64(claims)}.sig` }), { headers: { "content-type": "application/json" } });
  try {
    const req = new Request("https://tazkiya.family/api/auth/google/callback?state=S1&code=C1", { headers: { cookie: "__Host-tz-o=S1" } });
    return { res: await googleCallback(req, env, new URL(req.url)), log: env.DB.log };
  } finally { globalThis.fetch = realFetch; }
}

test("Google: an address already tied to another Google identity is not handed over", async () => {
  const { res, log } = await callback({ id: "acct-1", google_sub: "google-sub-old" });
  assert.equal(res.headers.get("location"), "/#/signin?err=google");
  assert.ok(!log.some(s => s.startsWith("INSERT INTO sessions")), "no session created");
});

test("Google: an account with this address and no Google identity yet is linked and signed in", async () => {
  const { res, log } = await callback({ id: "acct-2", google_sub: null });
  assert.equal(res.headers.get("location"), "/#/signed-in");
  assert.ok(log.some(s => s.startsWith("INSERT INTO sessions")));
  assert.match(res.headers.getSetCookie().join("\n"), /__Host-tz=[A-Za-z0-9_-]{43}; Path=\/; HttpOnly; Secure; SameSite=Lax/);
});

test("Google: the account picture is stored as its address on Google's picture host, and nothing else", async () => {
  const pic = "https://lh3.googleusercontent.com/a/ACg8ocK_example=s96-c";
  const { res, log } = await callback({ id: "acct-3", google_sub: null }, { picture: pic });
  assert.equal(res.headers.get("location"), "/#/signed-in");
  assert.deepEqual(log.pics, [pic]);
  const other = await callback({ id: "acct-4", google_sub: null }, { picture: "https://evil.example/p.png" });
  assert.deepEqual(other.log.pics, [null], "another host is not kept");
  for (const v of ["http://lh3.googleusercontent.com/a/x", "https://u:p@lh3.googleusercontent.com/a", "https://lh3.googleusercontent.com:8443/a", "javascript:alert(1)", 7, null, "x".repeat(1001)])
    assert.equal(googlePicture(v), null, String(v).slice(0, 40));
  assert.equal(googlePicture(pic), pic);
});
