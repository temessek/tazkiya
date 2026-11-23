// Small HTTP helpers shared by every route: JSON responses, errors, body reading, cookies, CSRF, hashing.

export const SEC_HEADERS = {
  "cache-control": "no-store",
  "x-content-type-options": "nosniff",
  "referrer-policy": "no-referrer",
  "x-robots-tag": "noindex, nofollow",
  "x-frame-options": "DENY",
  "cross-origin-resource-policy": "same-origin",
  // Pages applies _headers to static files only, never to Functions: the API sets its own HSTS and a CSP that runs nothing
  "strict-transport-security": "max-age=31536000",
  "content-security-policy": "default-src 'none'; frame-ancestors 'none'; base-uri 'none'; form-action 'none'",
};

export class HttpError extends Error {
  constructor(status, code, extra) { super(code); this.status = status; this.code = code; this.extra = extra || {}; }
}

export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", ...SEC_HEADERS, ...headers } });
}

export function errorResponse(e) {
  const headers = e.status === 429 && e.extra.retry ? { "retry-after": String(e.extra.retry) } : {};
  return json({ error: e.code, ...e.extra }, e.status, headers);
}

// Reads a body with a hard size limit, streamed: a body without Content-Length (chunked) is cut off at the limit
// instead of being held in memory whole.
export async function readBody(req, max) {
  const len = Number(req.headers.get("content-length") || 0);
  if (len > max) throw new HttpError(413, "too_large");
  if (!req.body) return new Uint8Array(0);
  const reader = req.body.getReader(), parts = []; let n = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    n += value.byteLength;
    if (n > max) { try { await reader.cancel(); } catch {} throw new HttpError(413, "too_large"); }
    parts.push(value);
  }
  const out = new Uint8Array(n); let o = 0; for (const p of parts) { out.set(p, o); o += p.byteLength; }
  return out;
}

// Reads a JSON body with a hard size limit. Content-Type must be JSON (also part of the CSRF defence).
export async function readJson(req, max = 64 * 1024) {
  const ct = (req.headers.get("content-type") || "").toLowerCase();
  if (!ct.startsWith("application/json")) throw new HttpError(415, "json_required");
  const buf = await readBody(req, max);
  try { return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(buf)); }
  catch { throw new HttpError(400, "bad_json"); }
}

export function cookies(req) {
  const out = {};
  for (const part of (req.headers.get("cookie") || "").split(";")) {
    const i = part.indexOf("="); if (i < 1) continue;
    out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  }
  return out;
}

export function cookie(name, value, maxAge) {
  return `${name}=${value}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
}

// CSRF for state-changing JSON requests: same origin only, and a custom header a cross-site form cannot send
// (a cross-site script cannot send it either without a CORS preflight, which this API never answers).
export function checkCsrf(req, url) {
  const origin = req.headers.get("origin");
  if (origin && origin !== url.origin) throw new HttpError(403, "bad_origin");
  const site = req.headers.get("sec-fetch-site");
  if (site && site !== "same-origin" && site !== "none") throw new HttpError(403, "bad_origin");
  if (req.headers.get("x-tazkiya") !== "1") throw new HttpError(403, "csrf");
}

export function b64url(bytes) {
  let s = ""; for (const b of new Uint8Array(bytes)) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function randomToken(n = 32) { return b64url(crypto.getRandomValues(new Uint8Array(n))); }

export async function sha256(text) {
  const d = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(d)].map(b => b.toString(16).padStart(2, "0")).join("");
}

export async function sha256b64url(text) {
  return b64url(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text)));
}

export function safeEqual(a, b) {
  if (typeof a !== "string" || typeof b !== "string" || a.length !== b.length) return false;
  let x = 0; for (let i = 0; i < a.length; i++) x |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return x === 0;
}

// Local development (wrangler pages dev): the only place where test-only switches may act.
export const isLocal = url => url.hostname === "localhost" || url.hostname === "127.0.0.1";

// Production answers only on its own host. The same deployment is also reachable at tazkiya.pages.dev and at
// <hash>.tazkiya.pages.dev (with the production database): there the API answers 404. ALLOWED_HOSTS may override.
export function hostAllowed(url, env) {
  if (env.APP_ENV !== "production") return true;
  const hosts = String(env.ALLOWED_HOSTS || "tazkiya.family").split(",").map(h => h.trim().toLowerCase()).filter(Boolean);
  return hosts.includes(url.hostname.toLowerCase());
}

// The caller's address, hashed so rate-limit rows never hold an IP. Tests on localhost may set x-test-ip.
export async function ipKey(req, url) {
  const ip = (isLocal(url) && req.headers.get("x-test-ip")) || req.headers.get("cf-connecting-ip") || "local";
  return (await sha256("ip:" + ip)).slice(0, 24);
}
