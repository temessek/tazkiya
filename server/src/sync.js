import { HttpError, json, readJson, cookie } from "./http.js";
import { hit, limits } from "./rate.js";
import { KINDS, PROFILE_MAX, change as vChange, profile as vProfile, pid as vPid, id as vId, isObj, bad } from "./validate.js";
import { SESSION_COOKIE } from "./auth.js";

const PAGE = 500;            // rows per pull page
const MAX_CHANGES = 200;     // changes per sync request
const MAX_BODY = 1024 * 1024;

const profilesOf = db => aid => db.prepare("SELECT pid, name, edition, burn_at, gone, updated FROM profiles WHERE account_id = ? ORDER BY pid").bind(aid).all().then(r => r.results);
const outProfile = p => (p.gone ? { pid: p.pid, gone: true, updated: p.updated }
  : { pid: p.pid, name: p.name || "", edition: p.edition || "", burn_at: p.burn_at || 0, updated: p.updated });

export async function me(req, env, url, s) {
  const profiles = (await profilesOf(env.DB)(s.account.id)).map(outProfile);
  return json({ account: { email: s.account.email, google: s.account.google, adult_at: s.account.adult_at, picture: s.account.picture || null }, profiles, profile_max: PROFILE_MAX });
}

// Adds or renames profiles. A deleted profile comes back only with fresh: true (a new person in that place).
async function upsertProfiles(env, aid, list) {
  if (!list.length) return;
  const existing = await profilesOf(env.DB)(aid), now = Date.now();
  const live = new Set(existing.filter(p => !p.gone).map(p => p.pid));
  const byPid = Object.fromEntries(existing.map(p => [p.pid, p]));
  const stmts = [];
  for (const p of list) {
    const ex = byPid[p.pid];
    if (ex && ex.gone && !p.fresh) throw new HttpError(409, "profile_deleted", { pid: p.pid });
    if (!live.has(p.pid)) { live.add(p.pid); if (live.size > PROFILE_MAX) throw new HttpError(400, "profile_limit", { max: PROFILE_MAX }); }
    stmts.push(env.DB.prepare(`INSERT INTO profiles (account_id, pid, name, edition, updated) VALUES (?1, ?2, ?3, ?4, ?5)
      ON CONFLICT(account_id, pid) DO UPDATE SET name = ?3, edition = ?4, gone = 0, updated = ?5`).bind(aid, p.pid, p.name, p.edition, now));
  }
  await env.DB.batch(stmts);
}

export async function profilePut(req, env, url, s, [pid]) {
  const body = await readJson(req, 4096);
  if (!isObj(body)) throw bad("bad_json");
  const p = vProfile({ ...body, pid });
  await upsertProfiles(env, s.account.id, [p]);
  return json({ ok: true, profiles: (await profilesOf(env.DB)(s.account.id)).map(outProfile) });
}

// Removes a profile's journal from the server for good; the profile row stays as "gone" so other devices drop it too.
export async function profileDelete(req, env, url, s, [pid]) {
  if (pid === "p1") throw bad("cannot_delete_p1");
  const aid = s.account.id, now = Date.now();
  await env.DB.batch([
    env.DB.prepare("DELETE FROM entries WHERE account_id = ? AND pid = ?").bind(aid, pid),
    env.DB.prepare("UPDATE profiles SET gone = 1, name = NULL, edition = NULL, burn_at = 0, updated = ? WHERE account_id = ? AND pid = ?").bind(now, aid, pid),
  ]);
  return json({ ok: true });
}

// The cursor is "seq.rowid" of the last row sent; "0" starts from the beginning.
function parseCursor(v) {
  if (v === undefined || v === null || v === "" || v === "0" || v === 0) return [0, 0];
  if (typeof v !== "string" || !/^\d{1,15}\.\d{1,15}$/.test(v)) throw bad("bad_since");
  return v.split(".").map(Number);
}

/* POST /api/sync {since, profiles?, changes?}
   Pushes changes (last write wins per entry on u) and returns the changes after `since`, a page at a time. */
export async function sync(req, env, url, s) {
  const aid = s.account.id, now = Date.now();
  await hit(env.DB, "sync:" + aid, limits(env).syncAccount, 3600);
  const body = await readJson(req, MAX_BODY);
  if (!isObj(body)) throw bad("bad_json");
  for (const k of Object.keys(body)) if (!["since", "profiles", "changes"].includes(k)) throw bad("unknown_field", { field: k });
  const [cs, cr] = parseCursor(body.since);
  const profs = body.profiles === undefined ? [] : (Array.isArray(body.profiles) && body.profiles.length <= 9 ? body.profiles.map(vProfile) : (() => { throw bad("bad_profiles"); })());
  const changes = body.changes === undefined ? [] : (Array.isArray(body.changes) ? body.changes : (() => { throw bad("bad_changes"); })());
  if (changes.length > MAX_CHANGES) throw bad("too_many_changes", { max: MAX_CHANGES });
  const clean = changes.map(c => vChange(c, now));

  await upsertProfiles(env, aid, profs);
  const profiles = await profilesOf(env.DB)(aid);
  const live = Object.fromEntries(profiles.filter(p => !p.gone).map(p => [p.pid, p]));

  const rejected = [], accepted = [];
  for (const c of clean) {
    const p = live[c.pid];
    if (!p) rejected.push({ pid: c.pid, kind: c.kind, id: c.id, reason: "no_profile" });
    else if (c.kind === "challenge" && !c.del && c.t < p.burn_at) rejected.push({ pid: c.pid, kind: c.kind, id: c.id, reason: "burned" });
    else accepted.push(c);
  }

  if (accepted.length) {
    // per-profile caps (counted before the write; updates are counted as new, so the cap is approximate on the safe side)
    const counts = await env.DB.prepare("SELECT pid, kind, COUNT(*) AS n FROM entries WHERE account_id = ? AND del = 0 GROUP BY pid, kind").bind(aid).all();
    const have = {}; for (const r of counts.results) have[r.pid + ":" + r.kind] = r.n;
    for (const c of accepted) if (!c.del) {
      const k = c.pid + ":" + c.kind; have[k] = (have[k] || 0) + 1;
      if (have[k] > KINDS[c.kind].cap) throw new HttpError(413, "quota", { pid: c.pid, kind: c.kind, max: KINDS[c.kind].cap });
    }
    // the account's whole footprint, so one account cannot fill the shared database (updates counted as new, on the safe side)
    const L = limits(env), enc = new TextEncoder();
    const tot = await env.DB.prepare("SELECT COUNT(*) AS n, COALESCE(SUM(LENGTH(CAST(data AS BLOB))), 0) AS b FROM entries WHERE account_id = ?").bind(aid).first();
    const add = accepted.reduce((b, c) => b + (c.data ? enc.encode(JSON.stringify(c.data)).byteLength : 0), 0);
    if (tot.b + add > L.accountBytes || tot.n + accepted.length > L.accountRows)
      throw new HttpError(413, "account_full", { max_bytes: L.accountBytes, max_rows: L.accountRows });
    // one transaction: take the next seq, then write each change only if it is newer than what the server has
    const stmts = [env.DB.prepare("UPDATE accounts SET seq = seq + 1 WHERE id = ?").bind(aid)];
    for (const c of accepted) stmts.push(env.DB.prepare(
      `INSERT INTO entries (account_id, pid, kind, id, t, u, del, data, seq)
       VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, (SELECT seq FROM accounts WHERE id = ?1))
       ON CONFLICT(account_id, pid, kind, id) DO UPDATE SET t = excluded.t, u = excluded.u, del = excluded.del, data = excluded.data, seq = excluded.seq
       WHERE excluded.u > entries.u`).bind(aid, c.pid, c.kind, c.id, c.t, c.u, c.del ? 1 : 0, c.data ? JSON.stringify(c.data) : null));
    await env.DB.batch(stmts);
  }

  // pull: a stable snapshot up to the account's current seq, ordered by (seq, rowid)
  const top = (await env.DB.prepare("SELECT seq FROM accounts WHERE id = ?").bind(aid).first()).seq;
  const rows = (await env.DB.prepare(
    `SELECT rowid AS r, pid, kind, id, t, u, del, data, seq FROM entries
     WHERE account_id = ?1 AND seq <= ?2 AND (seq > ?3 OR (seq = ?3 AND rowid > ?4))
     ORDER BY seq, rowid LIMIT ${PAGE + 1}`).bind(aid, top, cs, cr).all()).results;
  const more = rows.length > PAGE; if (more) rows.pop();
  const last = rows[rows.length - 1];
  // complete: everything up to `top` has been sent, so the next pull starts after it
  const cursor = more ? `${last.seq}.${last.r}` : `${top}.999999999999999`;
  return json({
    cursor, more,
    profiles: (await profilesOf(env.DB)(aid)).map(outProfile),
    changes: rows.map(r => r.del ? { pid: r.pid, kind: r.kind, id: r.id, t: r.t, u: r.u, del: true }
      : { pid: r.pid, kind: r.kind, id: r.id, t: r.t, u: r.u, data: JSON.parse(r.data) }),
    rejected,
  });
}

// DELETE /api/entries/:pid/:kind/:id — the text is removed from the server at once; a bare marker tells other devices.
export async function entryDelete(req, env, url, s, [pid, kind, id]) {
  vPid(pid); vId(id); if (!KINDS[kind]) throw bad("bad_kind");
  const aid = s.account.id, now = Date.now();
  const p = await env.DB.prepare("SELECT gone FROM profiles WHERE account_id = ? AND pid = ?").bind(aid, pid).first();
  if (!p || p.gone) throw new HttpError(404, "no_profile");
  await env.DB.batch([
    env.DB.prepare("UPDATE accounts SET seq = seq + 1 WHERE id = ?").bind(aid),
    env.DB.prepare(`INSERT INTO entries (account_id, pid, kind, id, t, u, del, data, seq)
      VALUES (?1, ?2, ?3, ?4, ?5, ?5, 1, NULL, (SELECT seq FROM accounts WHERE id = ?1))
      ON CONFLICT(account_id, pid, kind, id) DO UPDATE SET u = MAX(entries.u + 1, ?5), del = 1, data = NULL, seq = excluded.seq`)
      .bind(aid, pid, kind, id, now),
  ]);
  return json({ ok: true });
}

/* POST /api/burn {pid, notes?} — the year-end burn: every challenge of the profile is removed from the server,
   and challenges written before this moment are refused afterwards. notes: true also burns the notebook
   (the notebook's fate at the close of the year is still an open design choice). */
export async function burn(req, env, url, s) {
  const body = await readJson(req, 1024);
  if (!isObj(body)) throw bad("bad_json");
  for (const k of Object.keys(body)) if (!["pid", "notes"].includes(k)) throw bad("unknown_field", { field: k });
  const pid = vPid(body.pid);
  if (body.notes !== undefined && typeof body.notes !== "boolean") throw bad("bad_notes");
  const aid = s.account.id, now = Date.now();
  const p = await env.DB.prepare("SELECT gone FROM profiles WHERE account_id = ? AND pid = ?").bind(aid, pid).first();
  if (!p || p.gone) throw new HttpError(404, "no_profile");
  const kinds = body.notes ? "('challenge','note')" : "('challenge')";
  const res = await env.DB.batch([
    env.DB.prepare("UPDATE accounts SET seq = seq + 1 WHERE id = ?").bind(aid),
    env.DB.prepare(`UPDATE entries SET del = 1, data = NULL, u = MAX(u + 1, ?3), seq = (SELECT seq FROM accounts WHERE id = ?1)
      WHERE account_id = ?1 AND pid = ?2 AND del = 0 AND kind IN ${kinds}`).bind(aid, pid, now),
    env.DB.prepare("UPDATE profiles SET burn_at = ?3, updated = ?3 WHERE account_id = ?1 AND pid = ?2").bind(aid, pid, now),
  ]);
  return json({ ok: true, burned: res[1].meta.changes || 0, burn_at: now });
}

// DELETE /api/account {confirm: "delete"} — everything of the family goes: profiles, journal, sessions, pending links.
export async function accountDelete(req, env, url, s) {
  const body = await readJson(req, 1024);
  if (!isObj(body) || body.confirm !== "delete") throw bad("confirm_required");
  const aid = s.account.id;
  await env.DB.batch([
    env.DB.prepare("DELETE FROM entries WHERE account_id = ?").bind(aid),
    env.DB.prepare("DELETE FROM profiles WHERE account_id = ?").bind(aid),
    env.DB.prepare("DELETE FROM sessions WHERE account_id = ?").bind(aid),
    env.DB.prepare("DELETE FROM login_tokens WHERE email = ?").bind(s.account.email),
    env.DB.prepare("DELETE FROM rate WHERE k = ? OR k = ?").bind("sync:" + aid, "ai:acct:" + aid),
    env.DB.prepare("DELETE FROM accounts WHERE id = ?").bind(aid),
  ]);
  return json({ ok: true }, 200, { "set-cookie": cookie(SESSION_COOKIE, "", 0) });
}
