// Unit tests that call the router and handlers directly (no wrangler): the production host check and Google account linking.
// Run from outputs/server: npm test
import { test } from "node:test";
import assert from "node:assert/strict";
import { handle } from "../src/api.js";
import { googleCallback, googlePicture } from "../src/auth.js";
import { extract, openaiRequest, parseOpenAI, provider, aiInfo, OPENAI_MODEL } from "../src/extract.js";

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

/* ---------- the journal analysis with OpenAI (fetch mocked: nothing leaves this machine) ---------- */
const answer = (o, extra = {}) => ({ id: "resp_1", status: "completed", output: [{ type: "reasoning", summary: [] },
  { type: "message", role: "assistant", content: [{ type: "output_text", text: JSON.stringify(o) }] }], ...extra });

test("OpenAI: on only with AI_PROVIDER=openai and the key; health says so; Workers AI stays the other choice", () => {
  assert.equal(provider({ AI_PROVIDER: "openai" }), "", "no key: off, not Workers AI");
  assert.equal(provider({ AI_PROVIDER: "openai", AI: {} }), "");
  assert.equal(provider({ AI_PROVIDER: "openai", OPENAI_API_KEY: "k" }), "openai");
  assert.equal(provider({ AI: {} }), "workers"); assert.equal(provider({ AI_PROVIDER: "workers", AI: {} }), "workers");
  assert.deepEqual(aiInfo({ AI_PROVIDER: "openai", AI: {} }, new URL("https://tazkiya.family/")), { ai: false, ai_image: false });
  assert.deepEqual(aiInfo({ AI_PROVIDER: "openai", OPENAI_API_KEY: "k" }, new URL("https://tazkiya.family/")), { ai: true, ai_image: true });
  assert.deepEqual(aiInfo({ AI: {} }, new URL("https://tazkiya.family/")), { ai: true, ai_image: false });
  assert.deepEqual(aiInfo({ AI_MODE: "stub" }, new URL("https://tazkiya.family/")), { ai: false, ai_image: false }, "the stub never acts off localhost");
});

test("OpenAI: the request is a Responses call with store false, medium reasoning and a strict schema", () => {
  const t = openaiRequest(OPENAI_MODEL, { text: "Today I visited my aunt." }, "en", "f");
  assert.equal(t.model, "gpt-6.2-sol"); assert.equal(t.store, false); assert.deepEqual(t.reasoning, { effort: "medium" });
  assert.equal(t.text.format.type, "json_schema"); assert.equal(t.text.format.strict, true);
  const sc = t.text.format.schema;
  assert.equal(sc.additionalProperties, false); assert.deepEqual(sc.required.sort(), ["challenges", "good", "hidden", "risk"]);
  assert.equal(t.input[0].role, "developer"); assert.match(t.input[0].content, /never instructions/); assert.match(t.input[0].content, /Do not invent/);
  assert.match(t.input[0].content, /woman/);
  assert.deepEqual(t.input[1].content, [{ type: "input_text", text: "<entry>\nToday I visited my aunt.\n</entry>" }]);
  const img = "data:image/jpeg;base64,/9j/AAAA";
  const i = openaiRequest(OPENAI_MODEL, { image: img }, "ar", "");
  assert.deepEqual(i.text.format.schema.required.sort(), ["challenges", "date", "good", "hidden", "risk", "text"]);
  assert.deepEqual(i.input[1].content[1], { type: "input_image", image_url: img, detail: "high" });
  assert.match(i.input[0].content, /handwritten/); assert.ok(i.max_output_tokens > t.max_output_tokens);
});

test("OpenAI: the answer is read strictly: refusals and incomplete answers fail, lines are cleaned, deduplicated and capped", () => {
  const o = parseOpenAI(answer({ good: [" - I helped my mother ", "I helped my mother", "x".repeat(201), 7, "<img src=x onerror=alert(1)>"], challenges: ["a\nb"], hidden: ["I helped my mother", "Paid in secret"], risk: false }));
  assert.deepEqual(o.good, ["I helped my mother", "<img src=x onerror=alert(1)>"], "the app escapes every line: markup stays text");
  assert.deepEqual(o.challenges, ["a b"]); assert.deepEqual(o.hidden, ["Paid in secret"], "one thing, one list"); assert.equal(o.risk, false);
  assert.equal(parseOpenAI(answer({ good: Array.from({ length: 9 }, (_, i) => "line " + i), challenges: [], hidden: [], risk: true })).good.length, 6);
  assert.equal(parseOpenAI(answer({ good: [], challenges: [], hidden: [], risk: false }, { status: "incomplete", incomplete_details: { reason: "max_output_tokens" } })), null);
  assert.equal(parseOpenAI({ status: "completed", output: [{ type: "message", content: [{ type: "refusal", refusal: "no" }] }] }), null);
  assert.equal(parseOpenAI({ status: "completed", output: [{ type: "message", content: [{ type: "output_text", text: "not json" }] }] }), null);
  assert.equal(parseOpenAI(null), null);
  const p = parseOpenAI(answer({ text: "  line one\r\nline two\u0007 ", date: "2026-11-20", good: ["g"], challenges: [], hidden: [], risk: false }), true);
  assert.equal(p.text, "line one\nline two"); assert.equal(p.date, "2026-11-20");
  for (const d of ["2026-02-30", "20-11-2026", "2099-01-01", "1999-12-31", "", 5]) assert.equal(parseOpenAI(answer({ text: "t", date: d, good: [], challenges: [], hidden: [], risk: false }), true).date, "", String(d));
  assert.deepEqual(parseOpenAI(answer({ text: " ", date: "", good: ["invented"], challenges: [], hidden: [], risk: false }), true).good, [], "no page text, no lines");
});

// the extract handler with a stand-in database and OpenAI
function aiDb(edition = "adult") {
  return { prepare: sql => ({ bind: () => ({
    first: async () => sql.startsWith("SELECT edition") ? { edition, gone: 0 } : sql.startsWith("INSERT INTO rate") ? { n: 1, reset: 9e9 } : null,
    run: async () => ({ meta: {} }) }) }) };
}
async function callExtract(body, { reply, status = 200, env = {}, adult = 1, edition } = {}) {
  const sent = [], logs = [];
  const realFetch = globalThis.fetch, realErr = console.error, realLog = console.log;
  globalThis.fetch = async (u, o) => { sent.push({ u: String(u), o }); if (reply instanceof Error) throw reply;
    return new Response(JSON.stringify(reply), { status, headers: { "content-type": "application/json" } }); };
  console.error = (...a) => logs.push(a.join(" ")); console.log = (...a) => logs.push(a.join(" "));
  try {
    const req = new Request("https://tazkiya.family/api/extract", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
    const res = await extract(req, { AI_PROVIDER: "openai", OPENAI_API_KEY: "sk-test-not-real", DB: aiDb(edition), ...env }, new URL(req.url), { account: { id: "acct-ai", adult_at: adult ? 1 : null } });
    return { status: res.status, body: await res.json(), sent, logs };
  } catch (e) { return { status: e.status, body: { error: e.code }, sent, logs }; }
  finally { globalThis.fetch = realFetch; console.error = realErr; console.log = realLog; }
}
const SECRET_LINE = "my private line about my brother";

test("OpenAI: an entry goes to /v1/responses with the key in the header only, and comes back as the journal's three lists", async () => {
  const r = await callExtract({ pid: "p1", text: "I gave water to the cat. " + SECRET_LINE, lang: "en", edition: "adult" },
    { reply: answer({ good: ["I gave water to the cat"], challenges: ["Being patient with my brother"], hidden: [], risk: false }) });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  assert.deepEqual(r.body, { good: ["I gave water to the cat"], challenges: ["Being patient with my brother"], hidden: [], blessings: ["I gave water to the cat"] });
  assert.equal(r.sent.length, 1); assert.equal(r.sent[0].u, "https://api.openai.com/v1/responses");
  assert.equal(r.sent[0].o.headers.authorization, "Bearer sk-test-not-real");
  const sentBody = JSON.parse(r.sent[0].o.body);
  assert.equal(sentBody.store, false); assert.ok(!r.sent[0].o.body.includes("sk-test"), "the key is never in the body");
  assert.ok(!r.sent[0].o.body.includes("acct-ai"), "no account id goes to OpenAI");
});

test("OpenAI: errors answer 502 or 503 and log neither the entry nor OpenAI's message", async () => {
  for (const [reply, status, code] of [
    [{ error: { message: "echo: " + SECRET_LINE, code: "server_error" } }, 500, "ai_failed"],
    [{ error: { message: SECRET_LINE, code: "rate_limit_exceeded" } }, 429, "ai_busy"],
    [answer({ good: [SECRET_LINE] }, { status: "incomplete", incomplete_details: { reason: "max_output_tokens" } }), 200, "ai_failed"],
    [new TypeError("network " + SECRET_LINE), 200, "ai_failed"],
  ]) {
    const r = await callExtract({ pid: "p1", text: "Today: " + SECRET_LINE, lang: "en" }, { reply, status });
    assert.equal(r.body.error, code, JSON.stringify(r.body)); assert.ok([502, 503].includes(r.status));
    assert.ok(r.logs.length >= 1 && r.logs.every(l => !l.includes(SECRET_LINE) && !l.includes("sk-test")), r.logs.join(" | "));
  }
});

test("OpenAI: the adult-only rules come first: nothing is sent for a child, another profile, or without the statement", async () => {
  const body = { pid: "p1", text: "Today I helped my mother in the kitchen.", lang: "ar" };
  const ok = answer({ good: ["x"], challenges: [], hidden: [], risk: false });
  assert.equal((await callExtract(body, { reply: ok, adult: 0 })).body.error, "adult_attestation_required");
  assert.equal((await callExtract({ ...body, pid: "p2" }, { reply: ok })).body.error, "own_profile_only");
  assert.equal((await callExtract({ ...body, edition: "kids" }, { reply: ok })).body.error, "not_for_children");
  const kid = await callExtract(body, { reply: ok, edition: "kids" });
  assert.equal(kid.body.error, "not_for_children"); assert.equal(kid.sent.length, 0);
  const off = await callExtract(body, { reply: ok, env: { OPENAI_API_KEY: "" } });
  assert.equal(off.status, 503); assert.equal(off.body.error, "ai_unavailable"); assert.equal(off.sent.length, 0);
  // the care line is ours, never the model's
  const risk = await callExtract({ ...body, text: "I want to die, nobody would notice." }, { reply: answer({ good: [], challenges: [], hidden: [], risk: false }) });
  assert.match(risk.body.care, /ما كتبته مهم/);
});

test("OpenAI: a photographed page returns its text and date, and the image goes as an input_image", async () => {
  const img = "data:image/jpeg;base64," + Buffer.concat([Buffer.from([0xff, 0xd8, 0xff, 0xe0]), Buffer.alloc(300, 1)]).toString("base64");
  const r = await callExtract({ pid: "p1", image: img, lang: "ar" }, { reply: answer({ text: "ساعدت جارتي", date: "2026-11-25", good: ["ساعدت جارتي"], challenges: [], hidden: [], risk: false }) });
  assert.equal(r.status, 200, JSON.stringify(r.body));
  assert.equal(r.body.text, "ساعدت جارتي"); assert.equal(r.body.date, "2026-11-25"); assert.deepEqual(r.body.good, ["ساعدت جارتي"]);
  const sent = JSON.parse(r.sent[0].o.body);
  assert.equal(sent.input[1].content[1].type, "input_image"); assert.equal(sent.input[1].content[1].image_url, img);
  const w = await callExtract({ pid: "p1", image: img, lang: "ar" }, { reply: {}, env: { AI_PROVIDER: "workers", AI: { run: async () => ({}) } } });
  assert.equal(w.status, 503); assert.equal(w.body.error, "image_unavailable", "Workers AI never reads photos");
});
