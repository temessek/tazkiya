import { HttpError } from "./http.js";

// Boundary validation. Everything that reaches D1 has passed through here: known keys only, types, lengths, ids.

export const PROFILE_MAX = 4;                 // the app's limit (PMAX in app.js)
export const PID_RE = /^p[1-9]$/;
export const ID_RE = /^[a-z0-9-]{1,24}$/;     // the app's entry ids (TWID_RE)
export const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;
export const STAGES = ["zombie", "pig", "monkey", "human", "sabiq"];
const VKEY_RE = /^(zombie|pig|monkey|human|sabiq):[0-2]$/;
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]{1,64}@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;
const MIN_T = Date.UTC(2020, 0, 1);

export const bad = (code, extra) => new HttpError(400, code, extra);
export const isObj = o => o !== null && typeof o === "object" && !Array.isArray(o);

// Text: a well-formed string, control characters removed (new lines and tabs kept), trimmed, within [min, max] characters.
export function text(v, max, min = 0, field = "text") {
  if (typeof v !== "string") throw bad("bad_" + field);
  if (typeof v.isWellFormed === "function" && !v.isWellFormed()) throw bad("bad_" + field);
  const s = v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
  const n = [...s].length;
  if (n < min || n > max) throw bad("bad_" + field, { max, min });
  return s;
}

export function email(v) {
  if (typeof v !== "string" || v.length > 254) throw bad("bad_email");
  const e = v.trim().toLowerCase();
  if (!EMAIL_RE.test(e)) throw bad("bad_email");
  return e;
}

export const lang = v => (v === "en" ? "en" : "ar");
export const edition = v => (v === "adult" ? "adult" : "kids");

function onlyKeys(o, allowed, where) {
  if (!isObj(o)) throw bad("bad_" + where);
  for (const k of Object.keys(o)) if (!allowed.includes(k)) throw bad("unknown_field", { field: where + "." + k });
}

export function pid(v) { if (typeof v !== "string" || !PID_RE.test(v)) throw bad("bad_pid"); return v; }
export function id(v) { if (typeof v !== "string" || !ID_RE.test(v)) throw bad("bad_id"); return v; }

// Client timestamps: integers from 2020 on. A clock a little ahead is pulled back to the server's time; far ahead is refused.
export function ts(v, now, field = "t") {
  if (!Number.isInteger(v) || v < MIN_T) throw bad("bad_" + field);
  if (v > now + 86400000) throw bad("bad_" + field);
  return Math.min(v, now);
}

export function profile(o) {
  onlyKeys(o, ["pid", "name", "edition", "fresh"], "profile");
  return {
    pid: pid(o.pid),
    name: o.name === undefined ? "" : text(o.name, 20, 0, "name"),
    edition: o.edition === undefined ? "" : (o.edition === "kids" || o.edition === "adult" ? o.edition : (() => { throw bad("bad_edition"); })()),
    fresh: o.fresh === true,
  };
}

// The journal's kinds and their fields. Each validator returns the cleaned data object.
const optStage = v => { if (v === undefined) return undefined; if (!STAGES.includes(v)) throw bad("bad_f"); return v; };
const optId = v => (v === undefined ? undefined : id(v));
const optBool = (v, f) => { if (v === undefined) return undefined; if (typeof v !== "boolean") throw bad("bad_" + f); return v; };
const optTs = (v, now, f) => (v === undefined ? undefined : ts(v, now, f));
const clean = o => { Object.keys(o).forEach(k => o[k] === undefined && delete o[k]); return o; };

export const KINDS = {
  // free writing, the heart of the journal (TADWIN-SPEC v2): long text and its day
  note: { cap: 5000, keys: ["tx", "d"], fn: (d) => clean({ tx: text(d.tx, 8000, 1, "tx"), d: d.d === undefined ? undefined : (typeof d.d === "string" && DAY_RE.test(d.d) ? d.d : (() => { throw bad("bad_d"); })()) }) },
  // «نعم الله عليّ»: from the AI (accepted by the writer), by hand, a good deed, the evening, a family member's note, a challenge overcome
  blessing: { cap: 3000, keys: ["tx", "f", "src", "n"], fn: (d) => clean({ tx: text(d.tx, 200, 1, "tx"), f: optStage(d.f),
    src: d.src === undefined ? undefined : (["hand", "ai", "deed", "eve", "seen", "over"].includes(d.src) ? d.src : (() => { throw bad("bad_src"); })()), n: optId(d.n) }) },
  // «تحدّياتي / مجاهداتي»: may be tied to a finger, marked overcome
  challenge: { cap: 3000, keys: ["tx", "f", "src", "n", "done", "dt"], fn: (d, now) => clean({ tx: text(d.tx, 200, 1, "tx"), f: optStage(d.f),
    src: d.src === undefined ? undefined : (["hand", "ai"].includes(d.src) ? d.src : (() => { throw bad("bad_src"); })()), n: optId(d.n), done: optBool(d.done, "done"), dt: optTs(d.dt, now, "dt") }) },
  // the hidden deed: a line for the writer alone (old ones may have no text)
  khabia: { cap: 3000, keys: ["tx"], fn: (d) => clean({ tx: d.tx === undefined ? undefined : text(d.tx, 200, 0, "tx") }) },
  // "I saw good in you": a family member's note received by this profile
  seen: { cap: 1000, keys: ["from", "v", "tx", "got"], fn: (d, now) => {
    const o = clean({ from: pid(d.from), v: d.v === undefined ? undefined : (typeof d.v === "string" && VKEY_RE.test(d.v) ? d.v : (() => { throw bad("bad_v"); })()),
      tx: d.tx === undefined ? undefined : text(d.tx, 120, 0, "tx"), got: optTs(d.got, now, "got") });
    if (!o.v && !o.tx) throw bad("bad_seen"); return o; } },
};

// One change from a client: {pid, kind, id, t, u, del?, data?}. A deletion carries no data.
export function change(o, now) {
  onlyKeys(o, ["pid", "kind", "id", "t", "u", "del", "data"], "change");
  const k = KINDS[o.kind]; if (!k) throw bad("bad_kind");
  const c = { pid: pid(o.pid), kind: o.kind, id: id(o.id), t: ts(o.t, now, "t"), u: ts(o.u, now, "u"), del: o.del === true };
  if (o.del !== undefined && typeof o.del !== "boolean") throw bad("bad_del");
  if (c.u < c.t) c.u = c.t;
  if (c.del) { if (o.data !== undefined && o.data !== null) throw bad("data_on_delete"); c.data = null; }
  else { onlyKeys(o.data, k.keys, "data"); c.data = k.fn(o.data, now); }
  return c;
}
