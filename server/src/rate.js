import { HttpError } from "./http.js";

// Fixed-window counter in D1: one atomic upsert per check. Throws 429 past the limit.
export async function hit(db, key, limit, windowSec) {
  const now = Math.floor(Date.now() / 1000), reset = now + windowSec;
  const r = await db.prepare(
    `INSERT INTO rate (k, n, reset) VALUES (?1, 1, ?2)
     ON CONFLICT(k) DO UPDATE SET
       n = CASE WHEN rate.reset <= ?3 THEN 1 ELSE rate.n + 1 END,
       reset = CASE WHEN rate.reset <= ?3 THEN ?2 ELSE rate.reset END
     RETURNING n, reset`).bind(key, reset, now).first();
  if (r && r.n > limit) throw new HttpError(429, "rate_limited", { retry: Math.max(1, r.reset - now) });
}

// Old rows are cleared now and then (on sign-in requests), so the table stays small.
export async function sweep(db) {
  const now = Date.now();
  await db.batch([
    db.prepare("DELETE FROM rate WHERE reset < ?").bind(Math.floor(now / 1000) - 60),
    db.prepare("DELETE FROM login_tokens WHERE expires < ?").bind(now),
    db.prepare("DELETE FROM oauth_states WHERE expires < ?").bind(now),
    db.prepare("DELETE FROM sessions WHERE expires < ?").bind(now),
  ]);
}

// Limits, overridable by environment variables (tests set small values).
export function limits(env) {
  const n = (k, d) => { const v = Number(env[k]); return Number.isFinite(v) && v > 0 ? v : d; };
  return {
    mailIp: n("LIMIT_MAIL_IP", 5),          // sign-in emails per address per 10 minutes
    mailTo: n("LIMIT_MAIL_TO", 3),          // sign-in emails to one inbox per hour
    verifyIp: n("LIMIT_VERIFY_IP", 20),     // link confirmations per address per 10 minutes
    googleIp: n("LIMIT_GOOGLE_IP", 20),     // Google sign-in starts per address per 10 minutes
    aiAccount: n("LIMIT_AI_ACCOUNT", 30),   // AI extractions per account per day
    aiIp: n("LIMIT_AI_IP", 60),             // AI extractions per address per day
    aiAll: n("LIMIT_AI_ALL", 1000),         // AI extractions for the whole site per day (about 7,300 of the 10,000 free neurons)
    syncAccount: n("LIMIT_SYNC_ACCOUNT", 600), // sync calls per account per hour
  };
}
