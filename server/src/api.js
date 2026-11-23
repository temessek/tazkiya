import { HttpError, json, errorResponse, checkCsrf, hostAllowed } from "./http.js";
import { emailStart, emailVerifyPage, emailVerify, googleStart, googleCallback, logout, requireSession, authInfo } from "./auth.js";
import { me, profilePut, profileDelete, sync, entryDelete, burn, accountDelete } from "./sync.js";
import { extract, attestAdult } from "./extract.js";

const health = (req, env) => json({ ok: true, env: env.APP_ENV || "unknown", sign_in: authInfo(env), ai: !!env.AI });

// [method, path, handler, options]. auth: a session is required. csrf: false only where the route checks its own origin.
const ROUTES = [
  ["GET", /^\/api\/health$/, health],
  ["POST", /^\/api\/auth\/email\/start$/, emailStart],
  ["GET", /^\/api\/auth\/email\/verify$/, emailVerifyPage],
  ["POST", /^\/api\/auth\/email\/verify$/, emailVerify, { csrf: false }],
  ["GET", /^\/api\/auth\/google\/start$/, googleStart],
  ["GET", /^\/api\/auth\/google\/callback$/, googleCallback],
  ["POST", /^\/api\/auth\/logout$/, logout],
  ["GET", /^\/api\/me$/, me, { auth: true }],
  ["PUT", /^\/api\/profiles\/(p[1-9])$/, profilePut, { auth: true }],
  ["DELETE", /^\/api\/profiles\/(p[1-9])$/, profileDelete, { auth: true }],
  ["POST", /^\/api\/sync$/, sync, { auth: true }],
  ["DELETE", /^\/api\/entries\/(p[1-9])\/([a-z]{1,12})\/([a-z0-9-]{1,24})$/, entryDelete, { auth: true }],
  ["POST", /^\/api\/burn$/, burn, { auth: true }],
  ["DELETE", /^\/api\/account$/, accountDelete, { auth: true }],
  ["POST", /^\/api\/account\/adult$/, attestAdult, { auth: true }],
  ["POST", /^\/api\/extract$/, extract, { auth: true }],
];

export async function handle(req, env) {
  const url = new URL(req.url);
  try {
    if (!hostAllowed(url, env)) throw new HttpError(404, "not_found");
    let pathMatched = false;
    for (const [method, re, fn, opt = {}] of ROUTES) {
      const m = url.pathname.match(re); if (!m) continue;
      pathMatched = true;
      if (req.method !== method) continue;
      if (method !== "GET" && opt.csrf !== false) checkCsrf(req, url);
      if (!env.DB) throw new HttpError(503, "no_database");
      const s = opt.auth ? await requireSession(req, env) : null;
      const res = await fn(req, env, url, s, m.slice(1));
      if (s && s.setCookie && !res.headers.has("set-cookie")) res.headers.append("set-cookie", s.setCookie);
      return res;
    }
    throw pathMatched ? new HttpError(405, "method_not_allowed") : new HttpError(404, "not_found");
  } catch (e) {
    if (e instanceof HttpError) return errorResponse(e);
    // never log request bodies or journal text: the error's kind is enough
    console.error("api error", e && e.name, e && String(e.message).slice(0, 120));
    return json({ error: "server" }, 500);
  }
}
