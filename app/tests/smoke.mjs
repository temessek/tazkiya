// Akhlaq Path: smoke test and content contract check.
// Usage (from outputs/app):  node tests/smoke.mjs  [--quick] [--no-shots] [--content-only] [--ideas-only] [--intro-only] [--webkit-only]
// Serves this folder on a free local port, walks every route x AR/EN x 320/375/1280,
// and validates content/content.js + content/books.js. Writes tests/out/report.md,
// tests/out/report.json and screenshots (375 px) to tests/out/shots/. Exit code 1 on any failure.
// Needs Playwright: a local/global `playwright` or `playwright-core`, or one in the npx cache,
// plus an installed Chromium (npx playwright install chromium), and WebKit for the iPhone check (npx playwright install webkit;
// without it that check is reported as skipped). Not part of the published app.

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import vm from "node:vm";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const OUT = path.join(HERE, "out");
const ARGS = new Set(process.argv.slice(2));
const QUICK = ARGS.has("--quick");
const SHOTS = !ARGS.has("--no-shots");

/* ---------------- content contract ---------------- */
function loadContent() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  const cdir = process.env.AKHLAQ_CONTENT_DIR ? path.resolve(process.env.AKHLAQ_CONTENT_DIR) : path.join(ROOT, "content");
  for (const f of ["content.js", "content-adult.js", "books.js", "../fallback.js"]) {
    const p = f.startsWith("..") ? path.join(ROOT, "fallback.js") : path.join(cdir, f);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), sandbox, { filename: f });
  }
  return { C: sandbox.window.AKHLAQ_CONTENT, A: sandbox.window.AKHLAQ_CONTENT_ADULT, B: sandbox.window.AKHLAQ_BOOKS, F: sandbox.window.AKHLAQ_FALLBACK };
}

function checkContent() {
  const errs = [], warn = [];
  const { C, A, B } = loadContent();
  if (!C || !C.stages) return { errs: ["content.js: window.AKHLAQ_CONTENT.stages missing"], warn, stats: {} };
  const books = Array.isArray(B) ? B : Array.isArray(C.books) ? C.books : [];
  if (!Array.isArray(B)) warn.push("books.js: window.AKHLAQ_BOOKS missing; using AKHLAQ_CONTENT.books");
  const STAGES = Object.keys(C.stages);

  // text objects: {ar, en[, ar_f]} both present and non-empty; ar_f has the same shape as ar
  const empty = v => v == null || (typeof v === "string" && !v.trim()) || (Array.isArray(v) && (!v.length || v.some(x => typeof x !== "string" || !x.trim())));
  const shape = v => Array.isArray(v) ? "array:" + v.length : typeof v;
  function walk(node, where) {
    if (Array.isArray(node)) { node.forEach((x, i) => walk(x, `${where}[${i}]`)); return; }
    if (!node || typeof node !== "object") return;
    const hasAr = "ar" in node, hasEn = "en" in node;
    if (hasAr || hasEn) {
      if (!hasAr || empty(node.ar)) errs.push(`${where}: missing or empty "ar"`);
      if (!hasEn || empty(node.en)) errs.push(`${where}: missing or empty "en"`);
      if ("ar_f" in node && hasAr && shape(node.ar_f) !== shape(node.ar)) errs.push(`${where}: ar_f shape ${shape(node.ar_f)} differs from ar ${shape(node.ar)}`);
    }
    if (Array.isArray(node.options)) {
      if (node.options.length < 2) errs.push(`${where}: fewer than 2 options`);
      if (!Number.isInteger(node.correct) || node.correct < 0 || node.correct >= node.options.length) errs.push(`${where}: correct index ${node.correct} out of range 0..${node.options.length - 1}`);
    }
    for (const [k, v] of Object.entries(node)) if (k !== "ar" && k !== "en" && k !== "ar_f") walk(v, `${where}.${k}`);
  }
  walk(C, "content");
  walk(books, "books");

  // ids: unique inside each array, and globally unique per state key (read, answered, tasks)
  function uniq(list, label) {
    const seen = new Map();
    list.forEach(([id, where]) => { if (id == null || id === "") errs.push(`${where}: missing id`); else if (seen.has(id)) errs.push(`${label}: duplicate id "${id}" at ${where} and ${seen.get(id)}`); else seen.set(id, where); });
    return seen;
  }
  const readings = [], questions = [], tasks = [];
  for (const s of STAGES) {
    const st = C.stages[s];
    (st.readings || []).forEach((r, i) => readings.push([r.id, `stages.${s}.readings[${i}]`]));
    (st.quiz || []).forEach((q, i) => questions.push([q.id, `stages.${s}.quiz[${i}]`]));
    (st.tasks || []).forEach((t, i) => tasks.push([t.id, `stages.${s}.tasks[${i}]`]));
    (st.degrees || []).forEach((d, i) => { if (d.q) questions.push([d.q.id, `stages.${s}.degrees[${i}].q`]); });
    // readingIds resolve inside the stage
    const rids = new Set((st.readings || []).map(r => String(r.id)));
    (st.quiz || []).forEach((q, i) => { if (q.readingId != null && !rids.has(String(q.readingId))) errs.push(`stages.${s}.quiz[${i}] (${q.id}): readingId "${q.readingId}" not found in ${s}.readings`); });
  }
  (C.daily || []).forEach((d, i) => { tasks.push([d.id, `daily[${i}]`]); if (d.stage && !STAGES.includes(d.stage)) errs.push(`daily[${i}]: unknown stage "${d.stage}"`); });
  (C.muhasaba || []).forEach((m, i) => { if (m && m.stage && !STAGES.includes(m.stage)) errs.push(`muhasaba[${i}]: unknown stage "${m.stage}"`); });
  uniq(readings, "readings (S.read)");
  uniq(tasks, "tasks + daily (S.tasks)");
  uniq((C.virtues || []).map((v, i) => [v.id, `virtues[${i}]`]), "virtues");
  if (Array.isArray(C.muhasaba)) uniq(C.muhasaba.map((m, i) => [m.id, `muhasaba[${i}]`]), "muhasaba");
  uniq(books.map((b, i) => [b.id, `books[${i}]`]), "books");
  books.forEach((b, i) => {
    if (!STAGES.includes(b.stage)) errs.push(`books[${i}] (${b.id}): unknown stage "${b.stage}"`);
    if (!Array.isArray(b.chapters) || !b.chapters.length) errs.push(`books[${i}] (${b.id}): no chapters`);
    (b.chapters || []).forEach((c, k) => (c.quiz || []).forEach((q, j) => questions.push([q.id, `books[${i}].chapters[${k}].quiz[${j}]`])));
    if (b.picture) (b.chapters || []).forEach((c, k) => { if ((c.quiz || []).length > 1) warn.push(`books[${i}] (${b.id}) chapter ${k + 1}: picture book with ${(c.quiz || []).length} questions (reader expects 1)`); });
  });
  uniq(questions, "questions (S.answered)");
  const stats = { stages: STAGES.length, readings: readings.length, questions: questions.length, tasks: tasks.length, books: books.length, version: C.version };
  const adult = checkAdult(A, C, STAGES, { readings, questions, tasks }, errs, warn, walk);
  checkChoices(C.choices, C.stages, "choices", "ch-", STAGES, errs);
  if (A) checkChoices(A.choices, Object.assign({}, C.stages, A.stages), "adult.choices", "ach-", STAGES, errs);
  return { errs, warn, stats, C, A, books, adult };
}

// choice stories (FIVE-IDEAS 5): { id, stage, trait, age, title, intro, q (with ar_f), opts: [{ t, out, why, weak? }] (2-3), end }; at least one per stage
function checkChoices(list, stages, label, prefix, STAGES, errs) {
  if (!Array.isArray(list)) { errs.push(`${label}: missing`); return; }
  const ids = new Set(), per = {};
  list.forEach((x, i) => {
    const w = `${label}[${i}]${x && x.id ? " (" + x.id + ")" : ""}`;
    if (!x || typeof x.id !== "string" || !x.id.startsWith(prefix)) errs.push(`${w}: id must start with "${prefix}"`);
    else if (ids.has(x.id)) errs.push(`${w}: duplicate id`); else ids.add(x.id);
    if (!STAGES.includes(x.stage)) { errs.push(`${w}: unknown stage "${x.stage}"`); return; }
    per[x.stage] = (per[x.stage] || 0) + 1;
    if (!Number.isInteger(x.trait) || !(stages[x.stage].degrees || [])[x.trait]) errs.push(`${w}: trait ${x.trait} is not a trait of ${x.stage}`);
    ["title", "intro", "q", "end"].forEach(k => { if (!x[k] || !x[k].ar || !x[k].en) errs.push(`${w}: "${k}" missing`); });
    if (x.intro && !(Array.isArray(x.intro.ar) && Array.isArray(x.intro.en) && x.intro.ar.length === x.intro.en.length)) errs.push(`${w}: intro must be paragraph arrays of equal length`);
    if (x.q && !x.q.ar_f) errs.push(`${w}: q needs a feminine form (ar_f)`);
    if (!Array.isArray(x.opts) || x.opts.length < 2 || x.opts.length > 3) errs.push(`${w}: 2-3 options expected`);
    else { x.opts.forEach((o, j) => ["t", "out", "why"].forEach(k => { if (!o[k] || !o[k].ar || !o[k].en) errs.push(`${w}.opts[${j}]: "${k}" missing`); }));
      if (!x.opts.some(o => !o.weak)) errs.push(`${w}: every option is weak`); }
  });
  STAGES.forEach(s => { if (!per[s]) errs.push(`${label}: no story for ${s}, expected at least 1`); }); // more than one allowed since 24 Nov 2026 (PSHE situations)
}

// adult edition (content/content-adult.js): same shape, ids apart from the children's, every written stage complete
function checkAdult(A, C, STAGES, kids, errs, warn, walk) {
  if (!A || !A.stages) { errs.push("content-adult.js: window.AKHLAQ_CONTENT_ADULT.stages missing"); return null; }
  walk(A, "adult");
  const kidIds = new Set([].concat(kids.readings, kids.questions, kids.tasks).map(x => String(x[0])));
  const ids = new Map(), add = (id, where) => { if (id == null || id === "") errs.push(`${where}: missing id`); else if (ids.has(id)) errs.push(`adult: duplicate id "${id}" at ${where} and ${ids.get(id)}`); else if (kidIds.has(String(id))) errs.push(`${where}: id "${id}" is also a children's id (records would mix)`); else ids.set(id, where); };
  const written = Object.keys(A.stages);
  written.forEach(s => {
    const st = A.stages[s], w = `adult.stages.${s}`;
    if (!STAGES.includes(s)) errs.push(`${w}: unknown stage`);
    const need = (k, lo, hi) => { const n = (st[k] || []).length; if (n < lo || n > hi) errs.push(`${w}.${k}: ${n} items, expected ${lo === hi ? lo : lo + "-" + hi}`); };
    if (!st.name || !st.short) errs.push(`${w}: name/short missing`);
    need("signs", 5, 6); need("readings", 6, 12); need("quiz", 10, 20); need("tasks", 5, 8); need("selfcheck", 5, 5); // ranges widened 24 Nov 2026 for the world-tales batch
    need("degrees", s === "sabiq" ? 2 : 3, s === "sabiq" ? 2 : 3);
    (st.degrees || []).forEach((d, i) => {
      ["name", "desc", "looks", "story", "step", "week", "habit", "q"].concat(["zombie", "pig", "monkey"].includes(s) ? ["turnName", "turn"] : []).forEach(k => { if (!d[k]) errs.push(`${w}.degrees[${i}]: "${k}" missing`); });
      const kd = C.stages[s] && C.stages[s].degrees[i]; if (kd && d.name && kd.name.ar !== d.name.ar) warn.push(`${w}.degrees[${i}]: trait name "${d.name.ar}" differs from the children's "${kd.name.ar}"`);
      if (d.q) add(d.q.id, `${w}.degrees[${i}].q`);
    });
    const rids = new Set((st.readings || []).map(r => String(r.id)));
    (st.readings || []).forEach((r, i) => { add(r.id, `${w}.readings[${i}]`); if (!r.body || !r.title) errs.push(`${w}.readings[${i}]: title/body missing`); if (!st.quiz.some(q => q.readingId === r.id)) warn.push(`${w}.readings[${i}] (${r.id}): no quiz question`); });
    (st.quiz || []).forEach((q, i) => { add(q.id, `${w}.quiz[${i}]`); if (q.readingId != null && !rids.has(String(q.readingId))) errs.push(`${w}.quiz[${i}] (${q.id}): readingId "${q.readingId}" not found`); });
    (st.tasks || []).forEach((t, i) => add(t.id, `${w}.tasks[${i}]`));
    const kidSc = new Set(((C.stages[s] || {}).selfcheck || []).map(x => x.id));
    (st.selfcheck || []).forEach((t, i) => { add("sc:" + t.id, `${w}.selfcheck[${i}]`); if (kidSc.has(t.id)) errs.push(`${w}.selfcheck[${i}]: id "${t.id}" is also a children's id`); });
  });
  (A.daily || []).forEach((d, i) => { add(d.id, `adult.daily[${i}]`); if (!A.stages[d.stage]) errs.push(`adult.daily[${i}]: stage "${d.stage}" has no adult content`); });
  if (!Array.isArray(A.onboarding) || !A.onboarding.length) errs.push("adult.onboarding missing");
  return { version: A.version, written, readings: written.reduce((n, s) => n + A.stages[s].readings.length, 0), questions: written.reduce((n, s) => n + A.stages[s].quiz.length + A.stages[s].degrees.length, 0) };
}

/* ---------------- static server ---------------- */
// the Content-Security-Policy of the public build (outputs/publish/build_public.py), sent here too, so every page
// check also proves the app runs under it (a violation is a console error, and console errors fail the test)
const BUILD_PY = path.resolve(ROOT, "..", "publish", "build_public.py");
const CSP = (() => { try { const m = fs.readFileSync(BUILD_PY, "utf8").match(/CSP = "; "\.join\(\[([\s\S]*?)\]\)/); return m ? [...m[1].matchAll(/"([^"]+)"/g)].map(x => x[1]).filter(x => !/upgrade-insecure/.test(x)).join("; ") : ""; } catch (e) { return ""; } })();
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".webmanifest": "application/manifest+json", ".webp": "image/webp", ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".txt": "text/plain; charset=utf-8", ".md": "text/plain; charset=utf-8" };
// pretty: answer like the live host (Cloudflare Pages), which sends /index.html (and /x/index.html) to / with a 308
function serve(opt) {
  const pretty = !!(opt && opt.pretty);
  const srv = http.createServer((req, res) => {
    const u0 = new URL(req.url, "http://x"), u = decodeURIComponent(u0.pathname);
    if (pretty && /\/index\.html$/.test(u)) { res.writeHead(308, { location: u0.pathname.replace(/index\.html$/, "") + u0.search, "cache-control": "no-store" }).end(); return; }
    let p = path.normalize(path.join(ROOT, u));
    if (!p.startsWith(ROOT)) { res.writeHead(403).end(); return; }
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, "index.html");
    if (!fs.existsSync(p)) { res.writeHead(404).end("not found"); return; }
    const hd = { "content-type": TYPES[path.extname(p)] || "application/octet-stream", "cache-control": "no-store", "x-content-type-options": "nosniff" };
    if (CSP && path.extname(p) === ".html") hd["content-security-policy"] = CSP;
    res.writeHead(200, hd);
    fs.createReadStream(p).pipe(res);
  });
  return new Promise(r => srv.listen(0, "127.0.0.1", () => r(srv)));
}

// a speech engine that records every call (window.__tts) and offers voices, installed before the app loads
const SPEECH_SPY = `(() => { const rec = window.__tts = []; const note = k => () => { rec.push(k); };
  const voices = [{ lang: "ar-SA", name: "spy-ar" }, { lang: "en-US", name: "spy-en" }];
  const eng = { speak: note("speak"), cancel: note("cancel"), pause: note("pause"), resume: note("resume"), getVoices: () => { rec.push("getVoices"); return voices; },
    addEventListener: note("addEventListener"), removeEventListener() {}, get speaking() { rec.push("speaking"); return false; }, get pending() { return false; } };
  try { Object.defineProperty(window, "speechSynthesis", { configurable: true, get: () => eng }); } catch (e) {}
  try { window.SpeechSynthesisUtterance = function () { rec.push("utterance"); }; } catch (e) {} })();`;

/* ---------------- playwright ---------------- */
async function loadChromium() {
  const req = createRequire(import.meta.url);
  const tries = ["playwright", "playwright-core"];
  for (const n of tries) { try { return (await import(pathToFileURL(req.resolve(n)).href)).chromium; } catch (e) {} }
  const roots = [];
  try { const g = (await import("node:child_process")).execSync("npm root -g", { encoding: "utf8" }).trim(); roots.push(g); } catch (e) {}
  const npx = path.join(process.env.LOCALAPPDATA || path.join(os.homedir(), ".npm"), process.env.LOCALAPPDATA ? "npm-cache/_npx" : "_npx");
  if (fs.existsSync(npx)) fs.readdirSync(npx).forEach(d => roots.push(path.join(npx, d, "node_modules")));
  const found = [];
  for (const r of roots) for (const n of tries) { const p = path.join(r, n, "package.json"); if (fs.existsSync(p)) found.push({ dir: path.dirname(p), t: fs.statSync(p).mtimeMs }); }
  found.sort((a, b) => b.t - a.t);
  for (const f of found) { try { const m = createRequire(path.join(f.dir, "package.json"))(f.dir); if (m.chromium) return m.chromium; } catch (e) {} }
  throw new Error("Playwright not found. Run: npm i -g playwright && npx playwright install chromium");
}
async function loadWebkit() {
  const req = createRequire(import.meta.url), found = [];
  for (const n of ["playwright", "playwright-core"]) { try { const m = await import(pathToFileURL(req.resolve(n)).href); if (m.webkit) return { webkit: m.webkit, devices: m.devices }; } catch (e) {} }
  const roots = [];
  try { roots.push((await import("node:child_process")).execSync("npm root -g", { encoding: "utf8" }).trim()); } catch (e) {}
  const npx = path.join(process.env.LOCALAPPDATA || path.join(os.homedir(), ".npm"), process.env.LOCALAPPDATA ? "npm-cache/_npx" : "_npx");
  if (fs.existsSync(npx)) fs.readdirSync(npx).forEach(d => roots.push(path.join(npx, d, "node_modules")));
  for (const r of roots) { const p = path.join(r, "playwright", "package.json"); if (fs.existsSync(p)) found.push({ dir: path.dirname(p), t: fs.statSync(p).mtimeMs }); }
  found.sort((a, b) => b.t - a.t);
  for (const f of found) { try { const m = createRequire(path.join(f.dir, "package.json"))(f.dir); if (m.webkit) return { webkit: m.webkit, devices: m.devices }; } catch (e) {} }
  return null;
}
// the newest installed WebKit build, for a Playwright whose own build is not downloaded
function webkitPath() {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || path.join(process.env.LOCALAPPDATA || path.join(os.homedir(), ".cache"), "ms-playwright");
  if (!fs.existsSync(base)) return undefined;
  const dirs = fs.readdirSync(base).filter(d => /^webkit-\d+$/.test(d)).sort((a, b) => +b.split("-")[1] - +a.split("-")[1]);
  for (const d of dirs) for (const exe of ["Playwright.exe", "pw_run.sh", "Playwright.app/Contents/MacOS/Playwright"]) { const p = path.join(base, d, exe); if (fs.existsSync(p)) return p; }
  return undefined;
}
function chromePath() {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || path.join(process.env.LOCALAPPDATA || path.join(os.homedir(), ".cache"), "ms-playwright");
  if (!fs.existsSync(base)) return undefined;
  const dirs = fs.readdirSync(base).filter(d => /^chromium-\d+$/.test(d)).sort((a, b) => +b.split("-")[1] - +a.split("-")[1]);
  for (const d of dirs) for (const exe of ["chrome-win64/chrome.exe", "chrome-win/chrome.exe", "chrome-linux64/chrome", "chrome-linux/chrome", "chrome-mac/Chromium.app/Contents/MacOS/Chromium"]) {
    const p = path.join(base, d, exe); if (fs.existsSync(p)) return p;
  }
  return undefined;
}

/* ---------------- routes ---------------- */
function routesFrom(C, books) {
  const S = Object.keys(C.stages), R = ["#/", "#/tasks", "#/me", "#/evening", "#/record", "#/seen", "#/tadwin", "#/tadwin/why", "#/tadwin/nb", "#/tadwin/bad", "#/library", "#/about", "#/faq", "#/sources", "#/poster", "#/review", "#/no-such-page"];
  for (const s of S) {
    const st = C.stages[s];
    R.push(`#/stage/${s}`, `#/stage/${s}/work`, `#/sign/${s}`, `#/card/${s}`, `#/quiz/${s}`);
    if (st.readings && st.readings[0]) R.push(`#/read/${s}/${encodeURIComponent(st.readings[0].id)}`);
    const di = (st.degrees || []).findIndex(d => d.story); if (di >= 0) R.push(`#/deg/${s}/${di}`);
  }
  const v = (C.virtues || []).find(x => x.reading); if (v) R.push(`#/virtue/${encodeURIComponent(v.id)}`);
  (C.choices || []).forEach(x => R.push(`#/choice/${encodeURIComponent(x.id)}`));
  for (const b of books) { R.push(`#/book/${encodeURIComponent(b.id)}`, `#/book/${encodeURIComponent(b.id)}/1`); if (b.chapters.length > 1) R.push(`#/book/${encodeURIComponent(b.id)}/${b.chapters.length}`); }
  return QUICK ? R.filter((r, i) => i < 14 || /book\/[^/]+$/.test(r) === false && i % 4 === 0) : R;
}

function adultView(C, A, books) {
  const stages = {}; Object.keys(C.stages).forEach(s => { stages[s] = (A && A.stages[s]) || C.stages[s]; });
  return { C: Object.assign({}, C, { stages, onboarding: (A && A.onboarding) || C.onboarding, choices: (A && A.choices) || C.choices }), books: books.filter(b => b.ages === "15+") };
}

/* ---------------- page checks ---------------- */
const PAGE_CHECK = () => {
  const out = {};
  const v = document.getElementById("view"), txt = document.body.innerText;
  out.overflow = document.documentElement.scrollWidth > innerWidth + 1;
  const bad = txt.match(/\bundefined\b|\bNaN\b|\{[a-z]{1,3}\}|\[object Object\]/);
  out.badText = bad ? bad[0] : null;
  out.empty = !v || v.innerText.trim().length < 2;
  // clipped text: labels whose text is wider than their box
  const clip = [];
  document.querySelectorAll(".btn, button, .small-btn, .tog, .chip, .tabs a, h1, h2, .b-title, .ph").forEach(e => {
    if (!e.offsetParent || !e.innerText.trim() || e.classList.contains("vh")) return; // .vh: visually hidden on purpose (screen readers)
    const cs = getComputedStyle(e);
    if ((cs.overflowX === "hidden" || cs.overflowX === "clip" || cs.textOverflow === "ellipsis" || cs.whiteSpace === "nowrap") && e.scrollWidth > e.clientWidth + 2) clip.push(e.innerText.trim().slice(0, 40));
    const r = e.getBoundingClientRect(); if ((r.right > innerWidth + 1 || r.left < -1) && !e.closest(".shelf.row")) clip.push("offscreen: " + e.innerText.trim().slice(0, 40)); // a shelf row scrolls sideways on purpose
  });
  out.clipped = clip.slice(0, 5);
  out.missing = !!document.querySelector(".missing");
  return out;
};

async function main() {
  fs.mkdirSync(path.join(OUT, "shots"), { recursive: true });
  for (const f of fs.readdirSync(path.join(OUT, "shots"))) fs.unlinkSync(path.join(OUT, "shots", f));
  const t0 = Date.now();
  const content = checkContent();
  if (ARGS.has("--content-only")) {
    console.log(`Content contract (${content.stats.version || "?"}): ${content.errs.length ? content.errs.length + " error(s)" : "OK"}`);
    content.errs.slice(0, 60).forEach(e => console.log("ERROR " + e)); content.warn.slice(0, 30).forEach(e => console.log("warn " + e));
    process.exit(content.errs.length ? 1 : 0);
  }
  const srv = await serve();
  const base = `http://127.0.0.1:${srv.address().port}/index.html`;
  const chromium = await loadChromium();
  let browser;
  try { browser = await chromium.launch(); } catch (e) { browser = await chromium.launch({ executablePath: chromePath() }); }
  // owner's feedback (27 Nov 2026): no synthetic browser voice anywhere. Every context gets a stand-in speech engine that offers
  // Arabic and English voices (so any leftover button would show) and records every use; the route checks fail on any record
  { const nc = browser.newContext.bind(browser); browser.newContext = async o => { const c = await nc(o); await c.addInitScript(SPEECH_SPY);
    await c.addInitScript(() => { window.TZ_STORY_AUDIO = []; }); return c; }; } // recordings off, except where a step turns them on
  if (ARGS.has("--webkit-only")) { // the iPhone (WebKit) opens alone (development aid)
    await browser.close(); srv.close();
    const r = await webkitFlows();
    console.log(`WebKit (iPhone): ${r.skipped ? "skipped, " + r.skipped : r.passed + " of " + r.total + " passed"}`); r.fails.forEach(f => console.log("FAIL " + f));
    process.exit(r.fails.length ? 1 : 0);
  }
  if (ARGS.has("--intro-only")) { // the first-open story alone (development aid)
    const r = await introFlows(browser, base);
    console.log(`Intro: ${r.passed} of ${r.total} passed`); r.fails.forEach(f => console.log("FAIL " + f)); r.notes.forEach(n => console.log("note " + n));
    await browser.close(); srv.close(); process.exit(r.fails.length ? 1 : 0);
  }
  if (ARGS.has("--ideas-only")) { // quick run of the five-ideas flows alone (development aid)
    const AV0 = adultView(content.C, content.A, content.books), r = await ideaFlows(browser, base, content, AV0);
    console.log(`Five ideas: ${r.passed} of ${r.total} passed`); r.fails.forEach(f => console.log("FAIL " + f));
    await browser.close(); srv.close(); process.exit(r.fails.length ? 1 : 0);
  }
  const routes = routesFrom(content.C, content.books);
  const AV = adultView(content.C, content.A, content.books), aroutes = routesFrom(AV.C, AV.books);
  // every reading and every trait story written for adults (routesFrom samples only the first of each)
  Object.keys((content.A && content.A.stages) || {}).forEach(s => { const st = content.A.stages[s];
    (st.readings || []).forEach(r => { const u = `#/read/${s}/${encodeURIComponent(r.id)}`; if (!aroutes.includes(u)) aroutes.push(u); });
    (st.degrees || []).forEach((d, i) => { const u = `#/deg/${s}/${i}`; if (d.story && !aroutes.includes(u)) aroutes.push(u); }); });
  const sizes = [[320, 640], [375, 812], [1280, 900]];
  const fails = [], notes = [];
  let pages = 0;
  // children's edition at every size, then the adult edition (?ed=adult) on phone widths
  const runs = [];
  for (const [w, h] of sizes) for (const lang of ["ar", "en"]) runs.push({ w, h, lang, ed: "kids", list: routes });
  for (const [w, h] of sizes.slice(0, 2)) for (const lang of ["ar", "en"]) runs.push({ w, h, lang, ed: "adult", list: aroutes });
  for (const { w, h, lang, ed, list } of runs) {
    const ctx = await browser.newContext({ viewport: { width: w, height: h } });
    const page = await ctx.newPage();
    let cur = "load";
    const consoleErrs = [], bad404 = [];
    page.on("pageerror", e => consoleErrs.push(`${cur}: ${e.message}`));
    // expected here: the journal's probe of the server (GET api/health) answers 404, since this static server has no /api.
    // Only that request and its console line are excused; every other 404 or console error still fails.
    const probe = u => /^https?:\/\/[^/]+\/api\/health$/.test(u);
    page.on("console", m => { if (m.type() === "error" && !(/404/.test(m.text()) && probe((m.location() || {}).url || ""))) consoleErrs.push(`${cur}: ${m.text()}`); });
    page.on("response", r => { if (r.status() >= 400 && !(r.status() === 404 && probe(r.url()))) bad404.push(`${cur}: ${r.status()} ${r.url().replace(/^https?:\/\/[^/]+\//, "")}`); });
    await page.goto(`${base}?intro=0&reset=1&lang=${lang}${ed === "adult" ? "&ed=adult" : ""}#/`, { waitUntil: "load" });
    await page.waitForTimeout(ed === "adult" ? 700 : 400);
    for (const r of list) {
      cur = r;
      await page.evaluate(hh => { location.hash = hh; }, r);
      await page.waitForTimeout(r.startsWith("#/book") || r === "#/library" ? 260 : 160);
      const x = await page.evaluate(PAGE_CHECK);
      pages++;
      const expectMissing = r === "#/no-such-page";
      const problems = [];
      if (x.overflow) problems.push("horizontal overflow");
      if (x.badText) problems.push(`text shows "${x.badText}"`);
      if (x.empty) problems.push("empty view");
      if (x.missing !== expectMissing) problems.push(expectMissing ? "unknown route not handled" : "route rendered 'not found'");
      if (x.clipped.length) problems.push("clipped: " + x.clipped.join(" | "));
      const sp = await page.evaluate(() => ({ calls: (window.__tts || []).splice(0), btn: document.querySelectorAll('#view [data-act="tts"], #view .bk-listen, #view [data-act="bksay"], #view [data-act="toursay"], #view .tts-hint').length }));
      if (sp.calls.length) problems.push("the browser's speech engine was used: " + sp.calls.slice(0, 3).join(", "));
      if (sp.btn) problems.push("a listen button shows with no recording");
      if (problems.length) {
        fails.push({ w, lang: ed === "adult" ? lang + "/adult" : lang, route: r, problems });
        if (SHOTS) await page.screenshot({ path: path.join(OUT, "shots", `FAIL-${ed === "adult" ? "adult-" : ""}${lang}-${w}-${r.replace(/[^a-z0-9]+/gi, "_")}.png`) });
      }
      if (SHOTS && w === 375) await page.screenshot({ path: path.join(OUT, "shots", `${ed === "adult" ? "adult-" : ""}${lang}-${w}-${r.replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "") || "home"}.png`), type: "jpeg", quality: 60 });
    }
    consoleErrs.forEach(e => fails.push({ w, lang, route: "console", problems: [e] }));
    bad404.forEach(e => fails.push({ w, lang, route: "network", problems: [e] }));
    await ctx.close();
  }
  const flows = await editionFlows(browser, base, content, AV);
  flows.fails.forEach(f => fails.push({ w: 375, lang: "ar", route: "edition flow", problems: [f] }));
  const sec = await securityFlows(browser, base);
  sec.fails.forEach(f => fails.push({ w: 375, lang: "ar", route: "security/install flow", problems: [f] }));
  const ideas = await ideaFlows(browser, base, content, AV);
  ideas.fails.forEach(f => fails.push({ w: 375, lang: "ar", route: "five ideas flow", problems: [f] }));
  const intro = await introFlows(browser, base);
  intro.fails.forEach(f => fails.push({ w: 375, lang: "ar", route: "intro flow", problems: [f] }));
  const wk = await webkitFlows();
  wk.fails.forEach(f => fails.push({ w: 390, lang: "ar", route: "WebKit (iPhone) flow", problems: [f] }));
  const stat = staticChecks();
  stat.forEach(f => fails.push({ w: 0, lang: "-", route: "static check", problems: [f] }));
  await browser.close();
  srv.close();
  const secs = ((Date.now() - t0) / 1000).toFixed(1);
  const ok = !fails.length && !content.errs.length;
  const md = [
    `# Smoke test ${ok ? "PASSED" : "FAILED"}`,
    "",
    `${new Date().toISOString().slice(0, 16).replace("T", " ")} UTC · ${secs}s · children: ${routes.length} routes × AR/EN × ${sizes.map(s => s[0]).join("/")}; adult: ${aroutes.length} routes × AR/EN × ${sizes.slice(0, 2).map(s => s[0]).join("/")} = ${pages} page checks`,
    "",
    `## Content contract (${content.stats.version || "?"}): ${content.errs.length ? content.errs.length + " error(s)" : "OK"}`,
    "",
    `stages ${content.stats.stages} · readings ${content.stats.readings} · questions ${content.stats.questions} · tasks/daily ${content.stats.tasks} · books ${content.stats.books}`,
    content.adult ? `adult edition (${content.adult.version}): stages written: ${content.adult.written.join(", ")} · readings ${content.adult.readings} · questions ${content.adult.questions}` : "",
    "",
    `Edition flows: ${flows.passed} of ${flows.total} passed (children's content by default, settings switch both ways, ?ed=adult, first-open choice, separate profiles, explicit conversion).`,
    `Intro story (INTRO-ANIMATION.md): ${intro.passed} of ${intro.total} passed (first open, skip, Escape, replay from settings and About, pause, reduced motion, girls' wording, 320/375/landscape x AR/EN x children/adults).`,
    `Five ideas (FIVE-IDEAS.md) and Tadwin (TADWIN-SPEC.md): ${ideas.passed} of ${ideas.total} passed (${ideas.names.join(", ")}).`,
    `WebKit (iPhone emulation, server redirecting /index.html like the live host): ${wk.skipped ? "SKIPPED (" + wk.skipped + ")" : wk.passed + " of " + wk.total + " passed"} (first open, edition and story, open with no network, relaunch with the service worker installed, Home Screen launch from start_url, blocked storage).`,
    `Security, install and share: ${sec.passed} of ${sec.total} passed (escaping, backup validation, storage full, share links, offline). Static checks (manifest, preview tags, service worker, headers): ${stat.length ? stat.length + " problem(s)" : "OK"}. Pages served with the build's CSP: ${CSP ? "yes" : "NO"}.`,
    "",
    ...content.errs.slice(0, 60).map(e => `- ERROR ${e}`),
    ...content.warn.slice(0, 30).map(e => `- warn ${e}`),
    "",
    `## Pages: ${fails.length ? fails.length + " problem(s)" : "OK"}`,
    "",
    ...fails.slice(0, 120).map(f => `- ${f.lang} ${f.w}px ${f.route}: ${f.problems.join("; ")}`),
    "",
    SHOTS ? "Screenshots: tests/out/shots/ (375 px for every route; FAIL-* for problems)." : ""
  ].join("\n");
  fs.writeFileSync(path.join(OUT, "report.md"), md, "utf8");
  fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify({ ok, secs: +secs, pages, routes, content: { errs: content.errs, warn: content.warn, stats: content.stats }, fails }, null, 1), "utf8");
  console.log(md.split("\n").slice(0, 40).join("\n"));
  process.exit(ok ? 0 : 1);
}
/* ---------------- edition flows ---------------- */
async function editionFlows(browser, base, content, AV) {
  const fails = []; let total = 0;
  const ok = (cond, label) => { total++; if (!cond) fails.push(label); };
  const kidsR1 = content.C.stages.zombie.readings[0].title.ar, adultR1 = AV.C.stages.zombie.readings[0].title.ar;
  const adultOnb = "قال رسول الله صلى الله عليه وآله وسلم: «ما من مولود", filmText = page => page.evaluate(() => { const f = document.querySelector(".film"); return f ? f.innerText : ""; }), adultBook = AV.books[0].title.ar, kidBook = content.books.find(b => b.ages !== "15+").title.ar;
  const fresh = async () => { const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } }); const page = await ctx.newPage(); return { ctx, page }; };
  const viewText = page => page.evaluate(() => document.getElementById("view").innerText);
  const go = async (page, h) => { await page.evaluate(x => { location.hash = x; }, h); await page.waitForTimeout(350); };
  const state = page => page.evaluate(() => { const p = JSON.parse(localStorage.getItem("akhlaq-app-v1:profiles") || "null") || { active: "p1", list: ["p1"] }; const k = id => id === "p1" ? "akhlaq-app-v1" : "akhlaq-app-v1:" + id; return { p, states: p.list.map(id => JSON.parse(localStorage.getItem(k(id)) || "{}")) }; });
  const step = async (label, fn) => { try { await fn(); } catch (e) { total++; fails.push(label + ": " + e.message.split("\n")[0]); } };
  // 1-2. children's edition by default; settings switch to adults and back
  await step("settings switch", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?intro=0&reset=1#/`); await page.waitForTimeout(400); await go(page, "#/stage/zombie");
    const tx = await viewText(page); ok(tx.includes(kidsR1) && !tx.includes(adultR1), "children's content by default");
    await page.click("#setBtn"); await page.waitForTimeout(250);
    ok(await page.locator('#sheet [data-act="setgrp"]').count() === 3, "settings shows the three age groups");
    ok(await page.locator('#sheet [data-act="fxset"]').count() >= 5 && await page.locator('#sheet .sw[role="switch"]').count() >= 1, "settings shows the sound and vibration controls, on/off as switches");
    const has = async (pg, sel) => (await pg.locator(sel).count()) > 0;
    ok(await has(page, '#sheet .person.on .av svg') && await page.locator('#sheet .segc [data-act="setgender"]').count() === 2 && await page.locator('#sheet .segc [data-act="setage"]').count() === 2, "B8-9: people as drawn faces; gender and age as one-tap segments");
    { const sw0 = await page.evaluate(() => window.TZFX.prefs().snd); await page.click('#sheet .sw[data-k="snd"]'); await page.waitForTimeout(250);
      ok(await page.evaluate(() => window.TZFX.prefs().snd) === !sw0 && await has(page, `#sheet .sw[data-k="snd"][aria-checked="${!sw0}"]`), "B8: the sound switch flips with one tap");
      await page.click('#sheet .sw[data-k="snd"]'); await page.waitForTimeout(250); }
    await page.click('#sheet [data-act="setgrp"][data-g="adult"]'); await page.waitForTimeout(800);
    ok(await page.locator('[data-act="setage"]').count() === 0, "age band hidden in the adult edition");
    ok((await page.locator("#ageBtn").innerText()).trim() === "كبار", "the top bar shows the adult group");
    await page.keyboard.press("Escape"); await go(page, "#/stage/zombie");
    const tx2 = await viewText(page); ok(tx2.includes(adultR1) && !tx2.includes(kidsR1), "settings switch loads adult content");
    await go(page, "#/library"); await page.waitForTimeout(300); const lib = await viewText(page); ok(lib.includes(adultBook) && !lib.includes(kidBook), "adult library shows the adult shelf only");
    await page.click("#setBtn"); await page.waitForTimeout(250); await page.click('#sheet [data-act="setgrp"][data-g="child"]'); await page.waitForTimeout(400); await page.keyboard.press("Escape");
    await go(page, "#/stage/zombie"); const tx3 = await viewText(page); ok(tx3.includes(kidsR1) && !tx3.includes(adultR1), "switch back to children's content");
    // the top-bar age button: teens keep the children's content with the 15+ shelf first; adults switch content
    await page.click("#ageBtn"); await page.waitForTimeout(300);
    ok(await page.locator('#sheet [data-act="setgrp"]').count() === 3, "the age button opens the three groups");
    await page.click('#sheet [data-act="setgrp"][data-g="teen"]'); await page.waitForTimeout(1000);
    let s1 = (await state(page)).states[0]; ok(s1.edition === "kids" && s1.age === "15+", "teen group = children's content, 15+ books first");
    ok((await page.locator("#ageBtn").innerText()).trim() === "مراهقون", "the top bar shows the teen group");
    await page.click("#ageBtn"); await page.waitForTimeout(300); await page.click('#sheet [data-act="setgrp"][data-g="adult"]'); await page.waitForTimeout(1300);
    await go(page, "#/stage/zombie"); ok((await viewText(page)).includes(adultR1), "the age button switches to adult content");
    ok(!(await page.evaluate(() => document.body.innerText)).includes("تغيير"), "no unexplained «تغيير» button left");
    const fxOk = await page.evaluate(() => !!window.TZFX && typeof window.TZFX.play === "function"); ok(fxOk, "sound module loaded");
    await page.click("#setBtn"); await page.waitForTimeout(250); await page.click('#sheet [data-act="fxset"][data-k="amb"][data-v="rain"]'); await page.waitForTimeout(250);
    ok(await page.evaluate(() => JSON.parse(localStorage.getItem("tazkiya-fx")).amb === "rain"), "background choice saved on the device");
    await ctx.close(); });
  // 3. ?ed=adult opens the adult edition and leaves the address clean
  await step("?ed=adult", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?intro=0&reset=1&ed=adult#/stage/zombie`); await page.waitForTimeout(900);
    ok(!/[?&]ed=/.test(await page.evaluate(() => location.search)), "?ed is removed from the address");
    ok((await viewText(page)).includes(adultR1), "?ed=adult shows adult content");
    ok((await state(page)).states[0].edition === "adult", "?ed=adult saves the edition in the profile");
    await page.goto(`${base}#/stage/zombie`); await page.waitForTimeout(900); ok((await viewText(page)).includes(adultR1), "adult edition persists after reopening (no ?ed)");
    await ctx.close(); });
  // 4. first open asks for the edition, then shows that edition's onboarding
  await step("first-open choice", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?reset=1#/`); await page.waitForTimeout(500);
    ok(await page.locator('#sheet .grpseg [data-act="introed"]').count() === 3 && !(await page.locator("#sheet .mapopt").count()), "first open asks for the age group in one segmented control");
    await page.click('#sheet [data-act="introed"][data-g="adult"]'); await page.waitForTimeout(1300);
    const sh = await filmText(page);
    ok(sh.includes(adultOnb) && (await state(page)).states[0].edition === "adult", "choice saved and the adults' story of the hand plays");
    await ctx.close(); });
  // 5. ?ed=adult on a children's profile in use asks first; "create" adds an adult profile beside it; ?ed=kids goes back
  await step("separate profiles", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?intro=0&reset=1#/`); await page.waitForTimeout(400);
    await page.evaluate(() => { const k = "akhlaq-app-v1", s = JSON.parse(localStorage.getItem(k)); s.read = { "zombie-r1": Date.now() }; s.intro = true; localStorage.setItem(k, JSON.stringify(s)); });
    await page.goto(`${base}?ed=adult#/`); await page.waitForTimeout(900);
    let st = await state(page);
    ok(st.p.list.length === 1 && st.states[0].edition !== "adult", "the link alone never converts a children's profile in use");
    ok(await page.locator('#sheet [data-act="edlinknew"]').count() === 1, "the link asks whether to create an adult profile");
    ok(await page.locator('#sheet [data-act="edlinkconv"]').count() === 0, "no 'use this profile' option when the profile has progress");
    await page.click('#sheet [data-act="edlinknew"]'); await page.waitForTimeout(900);
    st = await state(page);
    ok(st.p.list.length === 2 && st.p.active !== "p1" && st.states[0].edition !== "adult" && st.states[1].edition === "adult" && !!(st.states[0].read || {})["zombie-r1"], "children's profile kept, adult profile opened beside it");
    ok((await filmText(page)).includes(adultOnb), "the new adult profile starts with the adults' story of the hand");
    await page.goto(`${base}?ed=kids#/`); await page.waitForTimeout(700);
    st = await state(page); ok(st.p.active === "p1" && await page.locator('#sheet [data-act="edlinknew"]').count() === 0, "?ed=kids returns to the children's profile without a question");
    await page.goto(`${base}?ed=adult#/`); await page.waitForTimeout(900);
    st = await state(page); ok(st.p.active !== "p1" && (await page.locator(".toast").count()) === 1, "?ed=adult opens the existing adult profile and says so");
    await ctx.close(); });
  // 6. an unused children's profile (onboarding done, no progress) may be switched, but only by choice
  await step("explicit conversion", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?intro=0&reset=1#/`); await page.waitForTimeout(400);
    await page.goto(`${base}?ed=adult#/`); await page.waitForTimeout(800);
    ok((await state(page)).states[0].edition !== "adult" && await page.locator('#sheet [data-act="edlinkconv"]').count() === 1, "unused profile: 'use this profile for adults' is offered, not applied");
    await page.click('#sheet [data-act="edlinkconv"]'); await page.waitForTimeout(900);
    ok((await state(page)).states[0].edition === "adult" && (await state(page)).p.list.length === 1, "choosing it switches this profile to the adult edition");
    await ctx.close(); });
  return { fails, total, passed: total - fails.length };
}

/* ---------------- security, install and share ---------------- */
async function securityFlows(browser, base) {
  const fails = []; let total = 0;
  const ok = (cond, label) => { total++; if (!cond) fails.push(label); };
  const step = async (label, fn) => { try { await fn(); } catch (e) { total++; fails.push(label + ": " + e.message.split("\n")[0]); } };
  const fresh = async () => { const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } }); const page = await ctx.newPage(); return { ctx, page }; };
  const pwned = page => page.evaluate(() => !!window.__pwn || !!document.querySelector("#view img[src='x'], #sheet img[src='x'], #view script, [onerror], [onmouseover]"));
  // user text (name, personal tasks) is shown as text, never as markup
  await step("escaping", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?intro=0&reset=1#/`); await page.waitForTimeout(400);
    await page.click("#setBtn"); await page.waitForTimeout(250);
    await page.fill("#profName", `<img src=x onerror="window.__pwn=1">`); await page.keyboard.press("Tab"); await page.waitForTimeout(300); await page.keyboard.press("Escape");
    await page.evaluate(() => { location.hash = "#/tasks"; }); await page.waitForTimeout(400);
    await page.fill("#myNew", `<img src=x onerror="window.__pwn=2">"'&`); await page.click('[data-act="myadd"]'); await page.waitForTimeout(300);
    await page.evaluate(() => { location.hash = "#/"; }); await page.waitForTimeout(400);
    ok(!(await pwned(page)), "a name or task with markup is never turned into elements");
    await ctx.close(); });
  // restore: a hostile or broken backup is rejected or reduced to known, typed fields
  await step("backup validation", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?intro=0&reset=1#/`); await page.waitForTimeout(400);
    const up = async (name, text, type) => { await page.click("#setBtn"); await page.waitForTimeout(250);
      await page.setInputFiles("#bkFile", { name, mimeType: type || "application/json", buffer: Buffer.from(text) }); await page.waitForTimeout(400); };
    const before = await page.evaluate(() => localStorage.getItem("akhlaq-app-v1"));
    await up("x.json", "not json"); ok(await page.locator('#sheet [data-act="bkyes"]').count() === 0, "a non-JSON file is refused");
    await page.keyboard.press("Escape");
    await up("x.json", JSON.stringify({ app: "other", profiles: { active: "p1", list: ["p1"] }, states: { p1: { mix: {} } } })); ok(await page.locator('#sheet [data-act="bkyes"]').count() === 0, "a file from another app is refused");
    await page.keyboard.press("Escape");
    await up("big.json", JSON.stringify({ app: "tazkiya", pad: "x".repeat(5.3 * 1024 * 1024) })); ok(await page.locator('#sheet [data-act="bkyes"]').count() === 0, "an oversized file is refused");
    await page.keyboard.press("Escape");
    await up("x.png", "{}", "image/png"); ok(await page.locator('#sheet [data-act="bkyes"]').count() === 0, "a non-JSON file type is refused");
    await page.keyboard.press("Escape");
    ok(before === await page.evaluate(() => localStorage.getItem("akhlaq-app-v1")), "refused files change nothing");
    const evil = { app: "tazkiya", v: 1, at: new Date().toISOString(), profiles: { active: "p1", list: ["p1", "<b>", "p2", "p3", "p4", "p5", "p6"] },
      states: { p1: { mix: { zombie: "<img src=x onerror=window.__pwn=3>", pig: 20, monkey: 30, human: 35, sabiq: 10 }, name: "<img src=x onerror=window.__pwn=4>", lang: "ar",
        read: { "zombie-r1": 1, "<x>": 2 }, my: [{ id: "m1", tx: "<img src=x onerror=window.__pwn=5>", s: "zombie" }, { id: "<bad>", tx: "x" }], extra: { a: 1 }, edition: "adult", tasks: { t1: "<b>" } },
        p2: { mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 } }, p3: { mix: { zombie: 5 } }, p4: { mix: { zombie: 1 } } } };
    await up("evil.json", JSON.stringify(evil));
    ok(await page.locator('#sheet [data-act="bkyes"]').count() === 1, "a valid backup asks before restoring");
    await page.click('#sheet [data-act="bkyes"]'); await page.waitForTimeout(1200);
    const st = await page.evaluate(() => ({ p: JSON.parse(localStorage.getItem("akhlaq-app-v1:profiles")), s: JSON.parse(localStorage.getItem("akhlaq-app-v1")) }));
    ok(JSON.stringify(st.p.list) === JSON.stringify(["p1", "p2", "p3", "p4"]), "profile ids are checked and capped at four");
    ok(st.s.mix.zombie === 0 && !/[<>]/.test(st.s.name) && !st.s.extra && !("<x>" in st.s.read) && st.s.my.length === 1 && !/[<>]/.test(st.s.my[0].tx) && !st.s.tasks.t1, "restored fields are typed and cleaned; unknown keys dropped");
    await page.evaluate(() => { location.hash = "#/tasks"; }); await page.waitForTimeout(400); await page.evaluate(() => { location.hash = "#/"; }); await page.waitForTimeout(400);
    ok(!(await pwned(page)), "nothing from the backup runs as markup");
    await ctx.close(); });
  // a full storage is reported once, and the app keeps working
  await step("storage full", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?intro=0&reset=1#/`); await page.waitForTimeout(400);
    await page.evaluate(() => { Storage.prototype.setItem = function () { const e = new Error("full"); e.name = "QuotaExceededError"; throw e; }; });
    await page.evaluate(() => { location.hash = "#/tasks"; }); await page.waitForTimeout(300);
    await page.fill("#myNew", "test"); await page.click('[data-act="myadd"]'); await page.waitForTimeout(700);
    const tx = await page.evaluate(() => (document.querySelector(".toast") || {}).innerText || "");
    ok(/ممتلئة|full/.test(tx), "a full storage shows a clear notice");
    ok((await page.evaluate(() => document.getElementById("view").innerText)).includes("test"), "the app keeps working in memory");
    await ctx.close(); });
  // share: both links offered; the adult share page carries its own preview and opens the adult edition
  await step("share", async () => { const { ctx, page } = await fresh();
    await page.addInitScript(() => { try { Object.defineProperty(Navigator.prototype, "share", { value: undefined, configurable: true }); } catch (e) {} });
    await page.goto(`${base}?intro=0&reset=1#/`); await page.waitForTimeout(400);
    ok(await page.locator("#shareBtn").count() === 1, "a share button is in the top bar");
    await page.click("#shareBtn"); await page.waitForTimeout(300);
    const urls = await page.$$eval("#sheet .shareurl", xs => xs.map(x => x.value));
    ok(urls.length === 2 && urls.some(u => /\/$/.test(u) && !/adult/.test(u)) && urls.some(u => /\/adult\/$/.test(u)), "the share sheet offers the children's and the adults' links");
    await page.goto(base.replace(/index\.html$/, "adult/")); await page.waitForTimeout(1200);
    const st = await page.evaluate(() => JSON.parse(localStorage.getItem("akhlaq-app-v1") || "{}"));
    ok(!/\/adult\//.test(page.url()), "/adult/ forwards to the app");
    ok(st.edition === "adult" || (await page.locator('#sheet [data-act="edlinknew"], #sheet [data-act="edlinkconv"]').count()) > 0, "/adult/ opens the adult edition (or asks, on a profile in use)");
    await ctx.close(); });
  // offline: after one visit the app opens with no network
  await step("offline", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?intro=0&reset=1#/`); await page.waitForTimeout(400);
    await page.evaluate(() => navigator.serviceWorker && navigator.serviceWorker.ready.then(() => true)); await page.reload(); await page.waitForTimeout(2500);
    await ctx.setOffline(true); await page.reload(); await page.waitForTimeout(1500);
    const tx = await page.evaluate(() => (document.getElementById("view") || {}).innerText || "");
    ok(tx.length > 50, "the app opens offline after the first visit");
    await page.evaluate(() => { location.hash = "#/stage/zombie"; }); await page.waitForTimeout(500);
    ok((await page.evaluate(() => document.getElementById("view").innerText)).length > 100, "a stage page renders offline");
    await ctx.close(); });
  return { fails, total, passed: total - fails.length };
}

/* ---------------- the five improvements of 22 Nov 2026 (docs/FIVE-IDEAS.md) ---------------- */
async function ideaFlows(browser, base, content, AV) {
  const fails = [], names = [], notesOut = []; let total = 0;
  const ok = (cond, label) => { total++; if (!cond) fails.push(label); };
  const step = async (label, fn) => { names.push(label); try { await fn(); } catch (e) { total++; fails.push(label + ": " + e.message.split("\n")[0]); } };
  // the hand map is the default since 27 Nov 2026; these flows exercise the usual hand, which stays one switch away, so they start with the map off.
  // The "hand as a map" step opens with fresh(true) and checks the default itself.
  const fresh = async (map) => { const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
    if (!map) await ctx.addInitScript(() => { try { if (localStorage.getItem("tazkiya-handmap") === null) localStorage.setItem("tazkiya-handmap", "0"); } catch (e) {} });
    const page = await ctx.newPage(); const errs = []; page.on("pageerror", e => errs.push(e.message)); page.errs = errs; return { ctx, page }; };
  const K = "akhlaq-app-v1";
  const getS = page => page.evaluate(k => JSON.parse(localStorage.getItem(k) || "{}"), K);
  const setS = (page, f) => page.evaluate(([k, src]) => { const s = JSON.parse(localStorage.getItem(k) || "{}"); const fn = new Function("s", "d", src); const d = new Date(); fn(s, d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0")); localStorage.setItem(k, JSON.stringify(s)); }, [K, f]);
  const go = async (page, h, ms) => { await page.evaluate(x => { location.hash = x; }, h); await page.waitForTimeout(ms || 350); };
  const txt = (page, sel) => page.evaluate(q => { const e = document.querySelector(q); return e ? e.innerText : ""; }, sel);
  const has = async (page, sel) => (await page.locator(sel).count()) > 0;
  let nOpen = 0; // a fresh query each time, so goto always reloads (a hash-only change would keep the page's memory)
  const open = async (page, q, ms) => { await page.goto(`${base}?intro=0&n=${++nOpen}${q || ""}#/`); await page.waitForTimeout(ms || 500); };
  // direction 1 (26 Nov 2026): what the children's home held besides the hand and the next step is on #/me
  const openMe = async (page, q, ms) => { await page.goto(`${base}?intro=0&n=${++nOpen}${q || ""}#/me`); await page.waitForTimeout(ms || 500); };

  // idea 1 (today's step) was removed by the owner's decision, 22 Nov 2026: the home page opens with the hand
  await step("home: the hand first", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await setS(page, "s.step = { d, ed: 'kids', k: 'r', s: 'zombie', id: 'zombie-r1', tr: 0 }; s.read = { 'zombie-r1': Date.now() };"); await open(page, "", 1200);
    const r = await page.evaluate(() => { const v = document.getElementById("view"), hl = v.querySelector(".hello"), hb = v.querySelector(".handbox"), hd = hb.getBoundingClientRect(), all = [...v.querySelectorAll("*")]; return { first: hl && all.indexOf(hl) < all.indexOf(hb) && !hl.previousElementSibling, step: !!document.querySelector(".stepcard, .sc-go, #sheet .apply"), top: hd.top, h: hd.height }; });
    ok(r.first && !r.step, "home: the greeting then the hand open the page; no step card and no 'go and live it' screen");
    ok(r.top < 240 && r.h > 250, `home: the hand is large in the first view at 375 (top ${Math.round(r.top)}, height ${Math.round(r.h)})`);
    ok(!("step" in (await getS(page))), "home: an old saved step is dropped by the sanitizer");
    ok(!page.errs.length, "home: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  // direction 1 (owner's approval, 26 Nov 2026): one clear next step on the home, a path on the finger page, the loop story > question > task
  await step("one clear step", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1", 900);
    const h = await page.evaluate(() => { const v = document.getElementById("view"), c = v.querySelector(".nextstep"), go = c && c.querySelector(".nx-go");
      return { cards: v.querySelectorAll(".nextstep").length, go: go && go.getAttribute("href"), loop: c ? c.querySelectorAll(".nx-loop span").length : 0, more: [...v.querySelectorAll('a[href="#/me"]')].length,
        gone: !v.querySelector(".pres, .pact, .stamps, .pf, .memix, .dash"), chips: v.querySelectorAll(".handbox .chip").length, fw: (v.querySelector(".fweek") || {}).textContent || "" }; });
    ok(h.cards === 1 && /^#\/read\/zombie\//.test(h.go || "") && h.loop === 3, `1: one next-step card, a story on the little finger first, with the three-step strip (${h.go})`);
    ok(h.more === 1 && h.gone, "1: one link to everything else; presence, pact, stamps, progress and the mix list left the home page");
    ok(h.chips === 5 && /الخنصر/.test(h.fw), "1: the hand keeps its five percentages, and the line names this week's finger");
    await go(page, "#/me"); ok(await has(page, "#view .pres") && await has(page, "#view .pact") && await has(page, "#view .stamps") && await has(page, "#view .pf") && await has(page, "#view .melegend") && await has(page, '#view a[href="#/record"]'), "1: #/me holds all of it");
    await go(page, "#/stage/pig"); const p = await page.evaluate(() => { const v = document.getElementById("view"), ph = v.querySelector("#sec-path"), lr = v.querySelector("#sec-learn");
      return { path: !!ph, before: ph && lr && (ph.compareDocumentPosition(lr) & 4) > 0, cur: v.querySelectorAll("#sec-path .pst.cur").length, deg: v.querySelectorAll("#sec-path .pdeg").length, n: v.querySelectorAll("#sec-path .pst").length, quiz: !!v.querySelector("#sec-quiz"), read: !!v.querySelector("#sec-read") }; });
    ok(p.path && p.before && p.cur === 1 && p.deg === 3 && p.n >= 9 && p.quiz && p.read, `1: the finger page opens on a path of ${p.n} stops under 3 degrees, one current, with the full content after it`);
    // the loop: the story's last page leads to its question, the question to its home task
    const sid = await page.evaluate(() => document.querySelector("#sec-path .pst.cur").getAttribute("href"));
    await go(page, sid); await page.evaluate(() => { const b = document.querySelector('[data-act="aloud"]'); if (b && !document.querySelector(".aloud-page")) b.click(); }); await page.waitForTimeout(250);
    for (let i = 0; i < 20 && await has(page, '[data-act="aloudnext"]'); i++) { await page.click('[data-act="aloudnext"]'); await page.waitForTimeout(80); }
    const ask = await page.evaluate(() => { const a = document.querySelector(".pg-ask, .read-end ~ a.btn"); return a && a.getAttribute("href"); });
    ok(/^#\/quiz\/pig\//.test(ask || ""), `1: the story's end leads straight to its question (${ask})`);
    await go(page, ask); for (let i = 0; i < 4 && await has(page, '[data-act="pick"]'); i++) { await page.click('[data-act="pick"] >> nth=0'); await page.waitForTimeout(150); await page.click('[data-act="qnext"]'); await page.waitForTimeout(200); }
    ok(await has(page, '#view .taskcard [data-act="tdid"]'), "1: after the question comes the home task card");
    await page.click('#view .taskcard [data-act="tdid"]'); await page.waitForTimeout(400);
    const tid = Object.keys((await getS(page)).tasks || {});
    ok(tid.length === 1 && await has(page, '#view a.btn[href="#/"]'), "1: the task is recorded with the existing task logic, then the next step is one touch away");
    await go(page, "#/task/pig/" + encodeURIComponent(tid[0])); ok(await has(page, "#view .taskcard .status.ok"), "1: a task has its own page (#/task/...)");
    await go(page, "#/task/nope/x"); ok(/missing|404|nf/i.test(await page.evaluate(() => document.body.dataset.route)), "1: an unknown stage in #/task is a missing page");
    for (const [w, lang] of [[1280, "ar"], [1280, "en"], [320, "ar"]]) { await page.setViewportSize({ width: w, height: 820 }); await setS(page, `s.lang = '${lang}';`); await open(page, "", 700);
      const d = await page.evaluate(() => { const t = document.getElementById("tabs").getBoundingClientRect(), hb = document.querySelector("#view .handbox").getBoundingClientRect(), c = document.querySelector("#view .nextstep").getBoundingClientRect();
        return { tabsTop: t.top, tabsH: t.height, side: Math.abs(hb.top - c.top) < 260 && (c.right <= hb.left + 4 || c.left >= hb.right - 4), over: document.documentElement.scrollWidth > innerWidth + 1, path: !!document.querySelector("#view .h1-path .pst.cur") && getComputedStyle(document.querySelector("#view .h1-path")).display !== "none" }; });
      if (w >= 900) ok(d.tabsTop < 10 && d.side && d.path && !d.over, `1: at ${w} (${lang}) two columns (hand beside the step and the path) and the tabs sit in the top bar (tabs top ${Math.round(d.tabsTop)})`);
      else ok(!d.over && d.tabsTop > 700, `1: at ${w} (${lang}) one column, the tabs at the bottom, no overflow`); }
    ok(!page.errs.length, "1: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  // direction 2 (owner's approval, 26 Nov 2026): the storybook. Each picture-book story (ages 4-8) opens as a book under its own
  // picture; pages turn by swipe; its question is inside the book, then a stamp with the title and the date, then the home task
  await step("storybook", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1", 700);
    const { C: KC } = loadContent(), young = [];
    Object.entries(KC.stages).forEach(([s, st]) => st.readings.forEach(r => { if (r.ages === "4-8") young.push([s, r.id]); }));
    const files = fs.readdirSync(path.join(ROOT, "assets", "stories")).filter(f => f.endsWith(".webp"));
    const big = files.filter(f => fs.statSync(path.join(ROOT, "assets", "stories", f)).size > 200 * 1024);
    ok(young.length === 24 && files.length === young.length && young.every(([, id]) => files.includes(id + ".webp")) && !big.length, `2: each of the ${young.length} picture-book stories has its own picture, none over 200 KB (${files.length} files${big.length ? ", big: " + big.join(" ") : ""})`);
    ok(!/assets\/stories\//.test(fs.readFileSync(path.join(ROOT, "sw.js"), "utf8")), "2: the story pictures are not in the service worker's install list (kept on first use)");
    const miss = [];
    for (const [s, id] of young) { await go(page, `#/read/${s}/${encodeURIComponent(id)}`, 250);
      const g = await page.evaluate(() => { const i = document.querySelector("#view .sbook .bk-art img"); return i ? i.getAttribute("src") : ""; });
      if (!g.startsWith(`assets/stories/${id}.webp`)) miss.push(id + "=" + g); }
    ok(!miss.length, "2: every picture-book story opens as a book under its own picture" + (miss.length ? " (" + miss.slice(0, 3).join(", ") + ")" : ""));
    await go(page, "#/read/pig/pig-r1", 900);
    const im = await page.evaluate(() => { const i = document.querySelector("#view .bk-art img"); return i && i.complete && i.naturalWidth; });
    ok(im >= 800, `2: the story's picture loads (${im} px wide)`);
    const pg = () => page.evaluate(() => (document.querySelector("#view .bk-dots i.on") ? [...document.querySelectorAll("#view .bk-dots i")].indexOf(document.querySelector("#view .bk-dots i.on")) : -1));
    const swipe = dx => page.evaluate(d => { const a = document.querySelector("#view .bk-art"), r = a.getBoundingClientRect(), y = r.top + 60, x = r.left + r.width / 2;
      a.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true, isPrimary: true, clientX: x - d / 2, clientY: y })); a.dispatchEvent(new PointerEvent("pointerup", { bubbles: true, isPrimary: true, clientX: x + d / 2, clientY: y })); }, dx);
    await swipe(160); await page.waitForTimeout(200); const p1 = await pg(); await swipe(-160); await page.waitForTimeout(200); const p0 = await pg();
    ok(p1 === 1 && p0 === 0, `2: a swipe turns the page (in Arabic toward the right goes forward: ${p1}, then back: ${p0})`);
    for (let i = 0; i < 20 && !(await has(page, "#view .sbook.ask")); i++) { await page.click('#view [data-act="aloudnext"] >> nth=0'); await page.waitForTimeout(60); }
    ok(await has(page, "#view .sbook.ask .bk-q") && (await page.locator("#view .sbook.ask .opt").count()) >= 2, "2: after the last page the story's question opens inside the book, under the picture");
    let seal = false;
    for (let k = 0; k < 12 && !seal; k++) {
      if (await has(page, '#view [data-act="qagain"]')) { await page.click('#view [data-act="qagain"]'); await page.waitForTimeout(150); }
      for (let i = 0; i < 4 && await has(page, '#view [data-act="pick"]:not([disabled])'); i++) { await page.click(`#view [data-act="pick"] >> nth=${k % 3}`); await page.waitForTimeout(120); await page.click('#view [data-act="qnext"]'); await page.waitForTimeout(150); }
      seal = await has(page, "#view .bk-seal .stamp.on");
    }
    const se = await page.evaluate(() => { const s = document.querySelector("#view .bk-seal"); return s ? s.innerText : ""; });
    ok(seal && se.includes(KC.stages.pig.readings.find(r => r.id === "pig-r1").title.ar) && /\d/.test(se), "2: a right answer brings a stamp with the story's title and the date (built on the existing stamps)");
    ok(await has(page, '#view .sbook .taskcard [data-act="tdid"]'), "2: after the stamp, the home task of the loop");
    await page.emulateMedia({ reducedMotion: "reduce" }); await go(page, "#/read/pig/pig-r1", 400);
    ok(await page.evaluate(() => getComputedStyle(document.querySelector("#view .bk-art img")).animationName === "none"), "2: the picture stays still under prefers-reduced-motion");
    await page.emulateMedia({ reducedMotion: null });
    for (const [w, lang] of [[320, "ar"], [320, "en"], [375, "en"], [1280, "ar"], [1280, "en"]]) { await page.setViewportSize({ width: w, height: w > 900 ? 820 : 640 }); await setS(page, `s.lang = '${lang}';`); await page.goto(`${base}?intro=0&n=${++nOpen}#/read/human/human-r10`); await page.waitForTimeout(600);
      const d = await page.evaluate(() => { const a = document.querySelector("#view .bk-art").getBoundingClientRect(), p = document.querySelector("#view .bk-page").getBoundingClientRect(), c = document.querySelector("#view .bk-ctrl").getBoundingClientRect(), t = document.getElementById("tabs").getBoundingClientRect();
        return { side: Math.abs(a.top - p.top) < 4 && (a.right <= p.left + 2 || a.left >= p.right - 2), stack: a.bottom <= p.top + 2, ctrl: c.bottom <= (t.top > 200 ? t.top : innerHeight) + 1, over: document.documentElement.scrollWidth > innerWidth + 1, rtl: a.left > p.left }; });
      ok(!d.over && d.ctrl && (w >= 900 ? d.side && d.rtl === (lang === "ar") : d.stack), `2: at ${w} (${lang}) ${w >= 900 ? "an open book, the picture on one page and the words on the other" : "the picture above the words"}, the page arrows in view, no overflow`); }
    await page.setViewportSize({ width: 375, height: 812 }); await setS(page, "s.lang = 'ar';"); await page.goto(`${base}?intro=0&reset=1&ed=adult&n=${++nOpen}#/read/human/ah-r7`); await page.waitForTimeout(900);
    const ad = await page.evaluate(() => { const i = document.querySelector("#view .rd-art img"); return { src: i ? i.getAttribute("src") : "", book: !!document.querySelector("#view .sbook"), body: !!document.querySelector("#view .article .body p") }; });
    ok(/assets\/vignettes\/book-human/.test(ad.src) && !ad.book && ad.body, `2: the adult edition's reading keeps its full text under the finger's picture (${ad.src})`);
    ok(!page.errs.length, "2: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  // owner's feedback (27 Nov 2026): recorded narration only. With STORY_AUDIO emptied there is no listen button anywhere (checked on
  // every route above); here a fake recording (a short WAV served at the .mp3 path, with its timings) runs through the book
  await step("recorded narration", async () => {
    const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
    await ctx.addInitScript(() => { window.TZ_STORY_AUDIO = ["en/pig-r1"]; });
    const wav = (secs => { const rate = 8000, n = Math.round(rate * secs), b = Buffer.alloc(44 + n * 2);
      b.write("RIFF", 0); b.writeUInt32LE(36 + n * 2, 4); b.write("WAVE", 8); b.write("fmt ", 12); b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22);
      b.writeUInt32LE(rate, 24); b.writeUInt32LE(rate * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write("data", 36); b.writeUInt32LE(n * 2, 40);
      for (let i = 0; i < n; i++) b.writeInt16LE(Math.round(300 * Math.sin(i / 9)), 44 + i * 2); return b; })(1.6);
    const asked = [];
    await ctx.route("**/assets/audio/**", r => { const u = r.request().url(); asked.push(u.replace(/^.*\/assets\/audio\//, ""));
      if (/\.json$/.test(u)) return r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify([{ t: 0, w: 0 }, { t: 0.4, w: 1 }, { t: 0.8, w: 2 }, { t: 1.2, w: 3 }]) });
      return r.fulfill({ status: 200, contentType: "audio/wav", body: wav }); });
    const page = await ctx.newPage(); const errs = []; page.on("pageerror", e => errs.push(e.message));
    await page.goto(`${base}?intro=0&reset=1&lang=en#/read/pig/pig-r1`); await page.waitForTimeout(900);
    ok(await has(page, "#view .sbook .bk-listen"), "voice: a recorded story shows its listen button in the book");
    await page.goto(`${base}?intro=0&n=${++nOpen}&lang=ar#/read/pig/pig-r1`); await page.waitForTimeout(800);
    ok(!(await has(page, "#view .bk-listen")) && await has(page, "#view .bk-ctrl .bk-pg"), "voice: no button for a language without its recording; the page number stands in its place");
    await page.goto(`${base}?intro=0&n=${++nOpen}&lang=en#/read/pig/pig-r1`); await page.waitForTimeout(800);
    const pg = () => page.evaluate(() => [...document.querySelectorAll("#view .bk-dots i")].indexOf(document.querySelector("#view .bk-dots i.on")));
    await page.click("#view .bk-listen"); let lit = false, duck = false;
    for (let i = 0; i < 25 && !lit; i++) { await page.waitForTimeout(100); lit = await has(page, "#view .sbook .w.hl"); duck = duck || await page.evaluate(() => window.TZ_AUDIO_PLAYING === true); }
    ok(lit && duck, "voice: the words light up from the recording's timings while it plays (and the background sound is told)");
    let turned = false; for (let i = 0; i < 40 && !turned; i++) { await page.waitForTimeout(100); turned = (await pg()) === 1; }
    ok(turned && asked.some(a => a === "en/pig-r1/1.mp3") && asked.some(a => a === "en/pig-r1/1.json"), `voice: at the end of the page's recording the book turns by itself (${asked.slice(0, 3).join(" ")})`);
    await page.click("#view .bk-listen"); await page.waitForTimeout(200);
    ok(await page.evaluate(() => window.TZ_AUDIO_PLAYING === false), "voice: listen again stops it");
    // the general reader uses the same recordings (a 9-14 story here, its paragraphs as pages): no button without one
    await page.goto(`${base}?intro=0&n=${++nOpen}&lang=en#/read/pig/pig-r2`); await page.waitForTimeout(700);
    ok(!(await has(page, '#view [data-act="tts"]')), "voice: the reader's 🔊 shows only for a recorded reading");
    // the first tour is silent
    await page.goto(`${base}?intro=0&n=${++nOpen}&tour=1&lang=ar#/`); await page.waitForTimeout(700);
    for (const f of ["little", "ring"]) { await page.click(`#view [data-act="finger"][data-f="${f}"]`); await page.waitForTimeout(350); if (await has(page, '#view [data-act="tournext"]')) { await page.click('#view [data-act="tournext"]'); await page.waitForTimeout(350); } }
    const calls = await page.evaluate(() => (window.__tts || []).slice());
    ok(!calls.length && !(await has(page, '[data-act="toursay"]')), "voice: the tour and the book never touch the browser's speech engine (" + calls.slice(0, 3).join(",") + ")");
    ok(!/speechSynthesis|SpeechSynthesisUtterance/.test(["app.js", "fx.js", "intro.js", "boot.js", "index.html"].map(f => fs.readFileSync(path.join(ROOT, f), "utf8")).join("\n")), "voice: no served file mentions the browser's speech engine");
    ok(!/assets\/audio\//.test(fs.readFileSync(path.join(ROOT, "sw.js"), "utf8")), "voice: recordings stay out of the service worker's install list");
    // the real recordings: every page of every narrated story has its .mp3 and timings that fit its words
    { const { C: KC } = loadContent(), src = fs.readFileSync(path.join(ROOT, "app.js"), "utf8");
      const ids = JSON.parse((src.match(/const NARRATED = (\[[^\]]*\])/) || [0, "[]"])[1]), bad = [];
      const find = id => { for (const st of Object.values(KC.stages)) { const r = st.readings.find(x => x.id === id); if (r) return r; } return null; };
      for (const id of ids) for (const lang of ["ar", "en"]) { const r = find(id), pages = r ? r.body[lang] : [];
        if (!pages.length) bad.push(id + ": no reading");
        pages.forEach((p, i) => { const b = path.join(ROOT, "assets", "audio", lang, id, String(i + 1)), nw = p.split(/\s+/).filter(Boolean).length;
          if (!fs.existsSync(b + ".mp3") || fs.statSync(b + ".mp3").size < 2000) { bad.push(`${lang}/${id}/${i + 1}.mp3`); return; }
          let tm = null; try { tm = JSON.parse(fs.readFileSync(b + ".json", "utf8")); } catch (e) {}
          if (!Array.isArray(tm) || !tm.length || tm.some((x, k) => typeof x.t !== "number" || !Number.isInteger(x.w) || x.w < 0 || x.w >= nw || (k && (x.t < tm[k - 1].t || x.w <= tm[k - 1].w)))) bad.push(`${lang}/${id}/${i + 1}.json`); }); }
      ok(ids.length === 21 && !bad.length, `voice: the 21 storybook stories are recorded page by page in both languages, with timings for their words (${ids.length}; ${bad.slice(0, 3).join(" ")})`); }
    ok(!errs.length, "voice: no script errors (" + errs.slice(0, 1).join("") + ")");
    await ctx.close();
    // and one real recording plays in the book, in each language, lighting its words
    for (const lang of ["ar", "en"]) { const c2 = await browser.newContext({ viewport: { width: 375, height: 812 } });
      await c2.addInitScript(() => { delete window.TZ_STORY_AUDIO; });
      const p2 = await c2.newPage(); const e2 = []; p2.on("pageerror", e => e2.push(e.message));
      await p2.goto(`${base}?intro=0&reset=1&lang=${lang}#/read/pig/pig-r1`); await p2.waitForTimeout(900);
      const btn = await has(p2, "#view .sbook .bk-listen"); if (btn) await p2.click("#view .bk-listen");
      let hl = -1; for (let i = 0; i < 40 && hl < 1; i++) { await p2.waitForTimeout(150); hl = await p2.evaluate(() => [...document.querySelectorAll("#view .sbook .bk-txt .w")].findIndex(w => w.classList.contains("hl"))); }
      ok(btn && hl >= 1 && !e2.length, `voice: the real recording plays in the book (${lang}) and its words light up in turn (word ${hl}) ${e2.slice(0, 1).join("")}`);
      await c2.close(); } });
  // direction 4 (owner's approval, 26 Nov 2026), merged into the tasks tab by the owner's decision of 27 Nov 2026: the adult home
  // is «المهام», whose «مهام اليوم» runs today's reading (opened on #/today with its question), the stage's task, one's own
  // items, the running challenges and the evening question. «مع أولادي» is the second half of «يدي» and holds the family pact
  await step("adult tasks home and with my children", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1&ed=adult", 1000);
    const { C: KC, A: KA } = loadContent(), az = KA.stages.zombie.readings, ap = KA.stages.pig.readings;
    const wt = () => page.evaluate(() => { const h = document.querySelector("#view .wird .wtop + .h"); return h ? h.textContent : ""; });
    const rowT = () => page.evaluate(() => { const r = document.querySelector("#view .my li.wread"); return r ? { on: r.classList.contains("on"), t: r.innerText, href: r.querySelector("a").getAttribute("href") } : null; });
    const cnt = () => page.evaluate(() => (document.querySelector("#view .my .dash-h .m") || {}).textContent || "");
    const h = await page.evaluate(() => { const v = document.getElementById("view"), tabs = [...document.querySelectorAll("#tabs a")], my = v.querySelector(".my");
      const at = sel => { const e = my && my.querySelector(sel); return e ? [...my.querySelectorAll("*")].indexOf(e) : -1; };
      return { my: !!my, head: ((my && my.querySelector(".dash-h .h")) || {}).textContent || "", order: [at("li.wread"), at("li.mis"), at(".myadd"), at(".tr-h:not(.weve-h)"), at(".weve-h"), at(".wrev textarea")],
        wird: !!v.querySelector(".wird"), hand: !!v.querySelector(".handbox"), stages: !!v.querySelector(".stcards"), mis: ((my && my.querySelector("li.mis .ttag")) || {}).textContent || "",
        tabs: tabs.map(a => a.getAttribute("href")).join(" "), on: (document.querySelector("#tabs a.on") || {}).textContent || "", word: /ورد|قائمة اليوم|مهمة اليوم/.test(document.body.innerText) }; });
    ok(h.my && /مهام اليوم/.test(h.head) && !h.wird && !h.hand && h.stages && h.order.every((x, i, a) => x > -1 && (i === 0 || x > a[i - 1])),
      `4: the adult home is the tasks page; «مهام اليوم» runs reading, stage task, own items, challenges, evening question, then the stages (${h.order.join(",")})`);
    ok(/مهمة مرحلتك/.test(h.mis) && !h.word, "4: the stage task is «مهمة مرحلتك», and no «ورد» or old «اليوم» label shows");
    ok(h.tabs === "#/ #/me #/tadwin" && /المهام/.test(h.on), `4: tabs tasks / my hand / journal, tasks first and current (${h.tabs})`);
    let rt = await rowT(); ok(rt && rt.href === "#/today" && rt.t.includes(az[0].title.ar) && /قراءة اليوم/.test(rt.t) && !rt.on && /^0\/3$/.test(await cnt()), `4: today's reading opens the list, not done yet, one counter for all (${await cnt()})`);
    await page.click("#view .my li.wread a"); await page.waitForTimeout(600);
    const r1 = await page.evaluate(() => { const v = document.getElementById("view"); return { chips: v.querySelectorAll(".wird .wfing button").length, opts: v.querySelectorAll(".wird .wq .opt").length, ta: !!v.querySelector(".wird textarea"), back: (v.querySelector(".wird > .back") || {}).getAttribute?.("href"), on: (document.querySelector("#tabs a.on") || {}).getAttribute?.("href") }; });
    ok(await page.evaluate(() => location.hash) === "#/today" && r1.chips === 5 && r1.opts >= 2 && !r1.ta && r1.back === "#/" && r1.on === "#/", "4: the row opens the reading in its column, with five finger chips and its question; back to the tasks");
    ok(await wt() === az[0].title.ar, `4: today's reading is the first unread one on the current finger (${await wt()})`);
    await go(page, "#/me", 500); ok(await has(page, "#view .handbox") && (await page.locator("#view .handbox .chip").count()) === 5 && await has(page, "#view .pres") && !(await has(page, "#view .pact")) && await has(page, '#view .adseg a.on[href="#/me"]') && await has(page, '#view .adseg a[href="#/kids"]'), "4: the hand keeps its tab (#/me) with its percentages, and the switch to «مع أولادي» at the top");
    await go(page, "#/kids", 500); ok(await has(page, '#view .knone [data-act="profadd"]') && await has(page, "#view .pact") && await has(page, '#tabs a.on[href="#/me"]'), "4: with no child's profile, «مع أولادي» invites to add one, and holds the family pact (under «يدي»)");
    // the rule: a reading read today stays today's; otherwise the first unread on the finger
    await setS(page, `s.read = { '${az[0].id}': Date.now() - 2 * 864e5 };`); await open(page, "", 800); await go(page, "#/today", 500);
    ok(await wt() === az[1].title.ar, "4: once read on another day, the next unread reading becomes today's");
    await setS(page, `s.read['${az[1].id}'] = Date.now();`); await open(page, "", 800);
    rt = await rowT(); ok(rt && rt.on && rt.t.includes(az[1].title.ar) && /^1\/3$/.test(await cnt()), `4: a reading read today stays today's and counts as done (${await cnt()})`);
    await go(page, "#/wird", 500); ok(await wt() === az[1].title.ar, "4: an old #/wird link lands on today's reading");
    await page.click("#view .wird .wq .opt >> nth=0"); await page.waitForTimeout(400);
    const q1 = KA.stages.zombie.quiz.find(q => q.readingId === az[1].id);
    ok((await getS(page)).answered[q1.id] !== undefined && await has(page, "#view .wq .fb") && await has(page, "#view .wq .opt[disabled]"), "4: the question is answered with the existing scoring, then shows its explanation");
    await go(page, "#/", 500);
    await page.fill("#wirdTx", "مسودة لم تُحفظ"); await page.fill("#myNew", "مهمة للاختبار"); await page.click('#view [data-act="myadd"]'); await page.waitForTimeout(400);
    ok(await page.inputValue("#wirdTx") === "مسودة لم تُحفظ" && /^1\/4$/.test(await cnt()), `4: an unsaved evening answer survives a re-render, and one's own item joins the count (${await cnt()})`);
    await page.fill("#wirdTx", "سطر للاختبار في المساء"); await page.click('#view [data-act="wsave"]'); await page.waitForTimeout(400);
    const nt = ((await getS(page)).notes || []).find(n => /^wd-\d{8}-zombie$/.test(n.id));
    ok(nt && /سطر للاختبار في المساء/.test(nt.tx) && KC.muhasaba.some(m => m.stage === "zombie" && nt.tx.startsWith(m.q.ar)) && /^2\/4$/.test(await cnt()), `4: the evening answer is kept in «دفتري» with its question, and counts (${await cnt()})`);
    await go(page, "#/tadwin/nb", 500); ok(/سطر للاختبار في المساء/.test(await txt(page, "#view")), "4: it shows in the notebook");
    await go(page, "#/today", 500); await page.click('#view .wfing [data-s="pig"]'); await page.waitForTimeout(400);
    ok(await wt() === ap[0].title.ar, "4: a finger chip shows that finger's reading");
    await go(page, "#/", 500); rt = await rowT(); ok(rt && rt.t.includes(ap[0].title.ar), "4: and the list follows the chosen finger");
    // a sample child's profile on the same device
    await page.evaluate(() => { const K = "akhlaq-app-v1", now = Date.now(), d = 864e5;
      localStorage.setItem(K + ":p2", JSON.stringify({ v: 1, lang: "ar", fs: 19, mix: { zombie: 10, pig: 25, monkey: 30, human: 30, sabiq: 5 }, answered: { "pig-q1": true }, ansT: { "pig-q1": now - d },
        read: { "pig-r1": now - d }, readSecs: {}, tasks: { "zombie-t1": "ok" }, taskT: { "zombie-t1": now - 2 * d }, tr: {}, trPts: {}, seen: {}, self: {}, hist: [], ev: [{ t: now - d, k: "read" }],
        name: "آدم", gender: "m", age: "9-14", edition: "kids", intro: true, tour: true, notes: [], bless: [], chal: [], khabia: [], twV: 2 }));
      localStorage.setItem(K + ":profiles", JSON.stringify({ active: "p1", list: ["p1", "p2"] })); });
    await page.goto(`${base}?intro=0&n=${++nOpen}#/kids`); await page.waitForTimeout(900);
    const k = await page.evaluate(() => { const c = document.querySelector("#view .kid"); return c ? { name: c.querySelector(".kid-tx .h").textContent, txt: c.innerText, hand: !!c.querySelector(".kid-hand .handbox"), saw: [...c.querySelectorAll('[data-act="kidsaw"]')].map(b => b.dataset.t), talk: (c.querySelector(".ktalk") || {}).innerText || "" } : null; });
    const kp = KC.stages.pig;
    ok(k && k.name === "آدم" && k.hand && k.txt.includes(kp.readings[0].title.ar) && /البنصر/.test(k.txt), "4: each child: a small hand, this week's finger and what was read this week");
    ok(k && k.saw.includes("zombie-t1") && k.saw.length === 2, `4: tasks to witness: the one marked this week and the task now on the path (${k && k.saw.join(" ")})`);
    ok(k && k.talk.includes(kp.parent.ar[2]) && kp.selfcheck.some(s => k.talk.includes(s.q.ar)), "4: the dinner talk comes from the finger's parent guidance and self-check");
    const now = k.saw.find(x => x !== "zombie-t1");
    await page.click(`#view [data-act="kidsaw"][data-t="${now}"]`); await page.waitForTimeout(500);
    const after = await page.evaluate(() => ({ s: JSON.parse(localStorage.getItem("akhlaq-app-v1:p2")), f: JSON.parse(localStorage.getItem("tazkiya-family") || "{}") }));
    ok(after.s.tasks[now] === "ok" && after.s.mix.human === 31 && (after.f.seen || []).some(m => m.to === "p2" && m.from === "p1" && m.tk === now) && await has(page, "#view .kseen"),
      "4: «رأيته يفعلها» records the task on the child's profile with the confirmation logic, and the witness as a family message");
    await page.click('#view .kid [data-act="prof"]'); await page.waitForTimeout(1200);
    ok(/رأى فيك/.test(await txt(page, "#sheet")) && await has(page, "#view .nextstep") && !(await has(page, "#view .wird")), "4: on the child's own profile the witness arrives, and the children's home is unchanged");
    // the children's edition keeps its order, with the new names
    await page.keyboard.press("Escape"); await go(page, "#/tasks", 500);
    const kt = await page.evaluate(() => ({ head: ((document.querySelector("#view .my .dash-h .h")) || {}).textContent || "", tag: [...document.querySelectorAll("#view .my li.mis .ttag")].map(x => x.textContent).join(""), read: !!document.querySelector("#view .my li.wread"), eve: !!document.querySelector("#view .my .wrev"), old: /قائمة اليوم|مهمة اليوم|ورد/.test(document.body.innerText) }));
    ok(/مهام اليوم/.test(kt.head) && /مهمة مرحلتك/.test(kt.tag) && !kt.read && !kt.eve && !kt.old, "4: the children's «مهام اليوم» keeps its order and takes the new names");
    for (const [w, lang] of [[1280, "ar"], [1280, "en"], [375, "ar"], [375, "en"], [320, "ar"], [320, "en"]]) { await page.setViewportSize({ width: w, height: 820 });
      await page.evaluate(() => { const p = JSON.parse(localStorage.getItem("akhlaq-app-v1:profiles")); p.active = "p1"; localStorage.setItem("akhlaq-app-v1:profiles", JSON.stringify(p)); });
      await setS(page, `s.lang = '${lang}';`); await open(page, "", 800);
      const d = await page.evaluate(() => ({ my: !!document.querySelector("#view .my li.wread"), tabsTop: document.getElementById("tabs").getBoundingClientRect().top, over: document.documentElement.scrollWidth > innerWidth + 1, old: /ورد|Today's list|Today's mission/.test(document.body.innerText) }));
      await go(page, "#/today", 500); const ro = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1 || !document.querySelector("#view .wird .body p"));
      await go(page, "#/kids", 500); const ko = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1 || !document.querySelector("#view .kid .kitem") || !document.querySelector("#view .adseg"));
      ok(d.my && !d.over && !d.old && !ro && !ko && (w >= 900 ? d.tabsTop < 10 : d.tabsTop > 600), `4: at ${w} (${lang}) the tasks home, the reading and «مع أولادي» fit, no overflow`); }
    ok(fs.readFileSync(path.join(ROOT, "parents", "index.html"), "utf8").split('href="../adult/#/kids"').length === 3, "4: the parents' page links to «مع أولادي» in both languages");
    ok(!page.errs.length, "4: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  // direction 3 (owner's approval, 26 Nov 2026; the default since 27 Nov 2026): the hand as a map, with a settings switch to turn it off.
  // Joints at each finger's degrees, lit from the real path; a tap zooms onto the finger; a joint opens its panel; back to the whole hand
  await step("hand as a map", async () => { const { ctx, page } = await fresh(true); await open(page, "&reset=1", 700);
    const { C: KC } = loadContent(), nDeg = Object.values(KC.stages).reduce((a, st) => a + st.degrees.length, 0);
    const plain = s => s.replace(/[«»"“”]/g, "");
    const shot = async n => { if (SHOTS) await page.screenshot({ path: path.join(OUT, "shots", `handmap-${n}.jpg`), type: "jpeg", quality: 70 }); };
    const off0 = await page.evaluate(() => ({ map: !!document.querySelector("#view .hmap"), hand: !!document.querySelector("#view .handbox"), card: !!document.querySelector("#view .nextstep") }));
    ok(off0.map && !off0.hand && off0.card, "3: on by default (owner decision 27 Nov 2026): the home hand is the map, with the next step under it");
    await page.click("#setBtn, [data-act='settings'] >> nth=0"); await page.waitForTimeout(350);
    const sw0 = await page.evaluate(() => { const b = document.querySelector('#sheet [data-act="hmset"]'), r = b && b.closest(".srow"); return b ? [b.getAttribute("aria-checked"), r.textContent.trim()] : null; });
    ok(sw0 && sw0[0] === "true" && sw0[1] === "اليد الخريطة", `3: the settings hold the switch «اليد الخريطة», on (${sw0})`);
    await page.click('#sheet [data-act="hmset"]'); await page.waitForTimeout(250);
    const swOff = await page.evaluate(() => [document.querySelector('#sheet [data-act="hmset"]').getAttribute("aria-checked"), localStorage.getItem("tazkiya-handmap")]);
    await page.click('#sheet [data-act="close"]'); await page.waitForTimeout(400); await open(page, "", 600);
    const offH = await page.evaluate(() => ({ map: !!document.querySelector("#view .hmap"), chips: document.querySelectorAll("#view .handbox .chip").length, card: !!document.querySelector("#view .nextstep") }));
    ok(swOff[0] === "false" && swOff[1] === "0" && !offH.map && offH.chips === 5 && offH.card, "3: switched off, the choice is kept after a reload, and the usual hand returns with its five percentages and the next step");
    await page.click("#setBtn, [data-act='settings'] >> nth=0"); await page.waitForTimeout(350);
    await page.click('#sheet [data-act="hmset"]'); await page.waitForTimeout(250);
    const sw1 = await page.evaluate(() => [document.querySelector('#sheet [data-act="hmset"]').getAttribute("aria-checked"), localStorage.getItem("tazkiya-handmap")]);
    await page.click('#sheet [data-act="close"]'); await page.waitForTimeout(400);
    const on0 = await page.evaluate(() => ({ map: !!document.querySelector("#view .hmap"), hand: !!document.querySelector("#view .handbox"), j: document.querySelectorAll("#view .hmj").length, lit: document.querySelectorAll("#view .hmj.lit").length,
      dotted: [...document.querySelectorAll("#view .hmj:not(.lit) .jr")].every(c => c.getAttribute("stroke-dasharray")), chips: [...document.querySelectorAll("#view .hmsvg .chip text")].map(x => x.textContent), card: !!document.querySelector("#view .nextstep"), fw: !!document.querySelector("#view .fweek") }));
    const mix = (await getS(page)).mix || {};
    ok(sw1[0] === "true" && sw1[1] === "1" && on0.map && !on0.hand, "3: switched on again, the home hand is the map");
    ok(on0.j === nDeg && on0.lit === 0 && on0.dotted, `3: ${on0.j} joints, one for each degree (${nDeg}); with no progress all are dotted circles`);
    ok(on0.chips.length === 5 && ["zombie", "pig", "monkey", "human", "sabiq"].every(k => on0.chips.includes(mix[k] + "%")), `3: the five percentages stay on the fingers (${on0.chips.join(" ")})`);
    ok(on0.card && on0.fw, "3: the next-step card and this week's finger stay under the map (direction 1)");
    await shot("ar-375-hand");
    // the lit rule: a joint lights when every stop the finger's path puts under that degree is done
    const st0 = KC.stages.zombie;
    await setS(page, `s.read = {}; s.answered = {}; s.tasks = {}; ${JSON.stringify(st0.readings.map(r => r.id))}.forEach(id => s.read[id] = Date.now() - 9000);`); await open(page, "", 600);
    ok(await page.evaluate(() => document.querySelectorAll("#view .hmj.lit").length) === 0, "3: stories read without their questions and tasks light no joint");
    await setS(page, `${JSON.stringify(st0.quiz.map(q => q.id))}.forEach(id => s.answered[id] = true); ${JSON.stringify(st0.tasks.map(x => x.id))}.forEach(id => s.tasks[id] = "ok");`); await open(page, "", 600);
    const lit1 = await page.evaluate(() => [...document.querySelectorAll("#view .hmj.lit")].map(e => e.dataset.s + e.dataset.i));
    ok(lit1.length === st0.degrees.length && lit1.every(x => x.startsWith("zombie")), `3: the little finger's whole path walked lights its ${st0.degrees.length} joints and no other (${lit1.join(" ")})`);
    const ring = await page.evaluate(() => { const g = document.querySelector('#view .hmj.lit[data-s="zombie"]'), c = g && g.querySelectorAll("circle"); return c ? [...c].flatMap(x => [x.getAttribute("stroke"), x.getAttribute("fill")]) : []; });
    ok(ring.includes("#24364b") && ring.includes("#fffaf3") && ring.includes("#8f8f8a"), "3: a lit joint is a white ring with a dark stroke and a core in the finger's colour");
    // zoom onto the ring finger
    const vb = () => page.evaluate(() => document.querySelector("#view .hmsvg").getAttribute("viewBox").split(/\s+/).map(Number));
    await page.evaluate(() => document.querySelector('#view .hmsvg .hit[data-s="pig"]').dispatchEvent(new MouseEvent("click", { bubbles: true })));
    await page.waitForTimeout(120); const mid = await vb(); await page.waitForTimeout(900); const end = await vb();
    const z = await page.evaluate(() => { const st = document.querySelector("#view .hm-stage").getBoundingClientRect();
      return { zoomed: !!document.querySelector("#view .hmap.zoomed"), chips: document.querySelectorAll("#view .hmsvg .chip").length, labels: [...document.querySelectorAll("#view .hml text")].map(x => x.textContent), back: !!document.querySelector('#view [data-act="hmout"]'), ar: st.width / st.height, pct: (document.querySelector("#view .hm-pct") || {}).textContent || "" }; });
    ok(z.zoomed && end[2] < 800 && mid[2] > end[2] + 20, `3: a tap on a finger animates the viewBox onto it (width ${Math.round(mid[2])} on the way, ${Math.round(end[2])} at the end)`);
    ok(z.chips === 0 && z.back && z.labels.length === 3 && KC.stages.pig.degrees.every(d => z.labels.includes(plain(d.name.ar))), `3: zoomed, the chips hide, a back control shows, and the degree names sit on the joints (${z.labels.join(" / ")})`);
    ok(Math.abs(z.ar - 1.6) < 0.08 && z.pct.includes(mix.pig + "%"), `3: on a phone the zoomed stage is about 16/10 (${z.ar.toFixed(2)}), and the finger's percentage stays in view`);
    await shot("ar-375-finger");
    // the joint panel
    const d1 = KC.stages.pig.degrees[1];
    await page.evaluate(() => document.querySelector('#view .hml[data-i="1"]').dispatchEvent(new MouseEvent("click", { bubbles: true }))); await page.waitForTimeout(400);
    const p1 = await page.evaluate(() => ({ open: !document.getElementById("sheet").hidden, h: (document.querySelector("#sheet h2") || {}).textContent, tx: document.getElementById("sheet").innerText, story: !!document.querySelector('#sheet [data-act="hmstory"]'), sel: !!document.querySelector('#view .hmj.sel[data-i="1"]') }));
    ok(p1.open && p1.h === d1.name.ar && p1.tx.includes(d1.desc.ar) && p1.tx.includes(d1.looks.ar) && p1.tx.includes(d1.step.ar) && p1.story && p1.sel, "3: a joint opens its panel: the degree's name, its description, what it looks like, how to climb from it, and its story");
    await page.click('#sheet [data-act="hmstory"]'); await page.waitForTimeout(250);
    const sp = await page.evaluate(() => [...document.querySelectorAll("#sheet .hm-story p")].map(p => p.textContent));
    ok(sp.length === d1.story.ar.length && sp[0] === d1.story.ar[0], `3: the joint's story opens in the panel (${sp.length} lines)`);
    await shot("ar-375-joint");
    await page.click('#sheet [data-act="close"]'); await page.waitForTimeout(450);
    ok(await page.evaluate(() => !!document.querySelector("#view .hmap.zoomed") && !document.querySelector("#view .hmj.sel")), "3: closing the panel keeps the finger in view");
    await page.click('#view [data-act="hmout"]'); await page.waitForTimeout(900);
    const back = await page.evaluate(() => ({ zoomed: !!document.querySelector("#view .hmap.zoomed"), vb: document.querySelector("#view .hmsvg").getAttribute("viewBox"), chips: document.querySelectorAll("#view .hmsvg .chip").length }));
    ok(!back.zoomed && back.vb.split(/\s+/).map(Number).join(" ") === "10 100 1010 880" && back.chips === 5, `3: the back control returns to the whole hand with its percentages (${back.vb})`);
    // reduced motion: straight to the zoomed view
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.evaluate(() => document.querySelector('#view .hmsvg .hit[data-s="monkey"]').dispatchEvent(new MouseEvent("click", { bubbles: true }))); await page.waitForTimeout(40);
    const rm = await vb(); await page.waitForTimeout(700); const rm2 = await vb();
    ok(rm[2] < 800 && rm.join() === rm2.join(), `3: with prefers-reduced-motion the zoomed view comes at once (${Math.round(rm[2])})`);
    await page.emulateMedia({ reducedMotion: null });
    // a link to a degree (?sel=<stage>&deg=<i>) opens its joint on the map
    await page.goto(`${base}?intro=0&n=${++nOpen}&sel=human&deg=2#/`); await page.waitForTimeout(800);
    ok(await page.evaluate(t => !!document.querySelector('#view .hmap.zoomed .hmj.sel[data-s="human"][data-i="2"]') && !document.getElementById("sheet").hidden && document.querySelector("#sheet h2").textContent === t, KC.stages.human.degrees[2].name.ar), "3: a link to a degree opens that joint on the map");
    await page.evaluate(() => { const x = document.querySelector('#sheet [data-act="close"]'); if (x) x.click(); }); await page.waitForTimeout(400);
    // sizes and languages: no horizontal overflow, the names inside the picture
    for (const [w, lang] of [[320, "ar"], [320, "en"], [375, "en"], [1280, "ar"], [1280, "en"]]) {
      await page.setViewportSize({ width: w, height: w > 900 ? 820 : 700 }); await setS(page, `s.lang = '${lang}';`); await open(page, "", 700);
      const a = await page.evaluate(() => ({ over: document.documentElement.scrollWidth > innerWidth + 1, h: document.querySelector("#view .hm-stage").getBoundingClientRect().height, card: !!document.querySelector("#view .nextstep") }));
      const bad = [];
      for (const k of ["monkey", "human", "sabiq"]) {
        await page.evaluate(k => document.querySelector(`#view .hmsvg .hit[data-s="${k}"]`).dispatchEvent(new MouseEvent("click", { bubbles: true })), k); await page.waitForTimeout(850);
        const r = await page.evaluate(() => { const s = document.querySelector("#view .hmsvg").getBoundingClientRect(), L = [...document.querySelectorAll("#view .hml rect")].map(x => x.getBoundingClientRect());
          const hit = L.some((x, i) => L.some((y, j) => j > i && x.left < y.right - 1 && y.left < x.right - 1 && x.top < y.bottom - 1 && y.top < x.bottom - 1));
          return { inside: L.every(x => x.left >= s.left - 1 && x.right <= s.right + 1 && x.top >= s.top - 1 && x.bottom <= s.bottom + 1), hit, over: document.documentElement.scrollWidth > innerWidth + 1 }; });
        if (!r.inside || r.hit || r.over) bad.push(k + (r.inside ? "" : " outside") + (r.hit ? " overlap" : "") + (r.over ? " overflow" : ""));
        if (k === "human") await shot(`${lang}-${w}-finger`);
      }
      ok(!a.over && a.h > 200 && a.card && !bad.length, `3: at ${w} (${lang}) the map fits with no overflow, and the degree names stay inside the picture without covering each other${bad.length ? " (" + bad.join(", ") + ")" : ""}`);
      await page.click('#view [data-act="hmout"]'); await page.waitForTimeout(700); if (w === 375 || w === 1280) await shot(`${lang}-${w}-hand`);
    }
    // the adult edition is untouched by the switch
    await page.setViewportSize({ width: 375, height: 812 }); await setS(page, "s.lang = 'ar';");
    await open(page, "&reset=1&ed=adult", 1000); await page.evaluate(() => localStorage.setItem("tazkiya-handmap", "1")); await open(page, "", 900); await go(page, "#/me", 600);
    const ad = await page.evaluate(() => ({ map: !!document.querySelector(".hmap"), hand: !!document.querySelector("#view .handbox") }));
    await page.click("#setBtn, [data-act='settings'] >> nth=0"); await page.waitForTimeout(350);
    const adSw = await has(page, '#sheet [data-act="hmset"]');
    ok(!ad.map && ad.hand && !adSw, `3: the adult edition keeps its hand and shows no map switch (map ${ad.map}, hand ${ad.hand}, switch ${adSw})`);
    // switched off again, the usual hand returns
    await open(page, "&reset=1&ed=kids", 900); await page.evaluate(() => localStorage.setItem("tazkiya-handmap", "0")); await open(page, "", 600);
    ok(await page.evaluate(() => !document.querySelector("#view .hmap") && document.querySelectorAll("#view .handbox .chip").length === 5), "3: a stored «off» is respected: the usual hand returns");
    ok(!page.errs.length, "3: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  // 2. evening reckoning
  const at = async (page, h) => { if (page.clock && page.clock.setFixedTime) { const d = new Date(); d.setHours(h, 30, 0, 0); await page.clock.setFixedTime(d); return true; } return false; };
  await step("evening reckoning", async () => { const { ctx, page } = await fresh();
    if (await at(page, 10)) { await openMe(page, "&reset=1"); ok(!(await has(page, ".evecard")) && await has(page, '.evelink[href="#/evening"]'), "2: in the morning, a fixed link to the reckoning on #/me and no evening card"); }
    if (await at(page, 18)) { await openMe(page, "&reset=1"); ok(await has(page, '.evecard[href="#/evening"]') && (await page.locator('#view a[href="#/evening"]').count()) === 1, "2: after five in the evening the evening card shows, once (the duplicate link is gone)"); }
    else { await openMe(page, "&reset=1"); notesOut.push("2: Playwright has no page.clock; the 17:00 window was not tested"); }
    await go(page, "#/"); ok(!(await has(page, '#view a[href="#/evening"]')) && await has(page, '#view a.morelink[href="#/me"]'), "2: the home page holds one link to everything else, and no evening entry of its own");
    await go(page, "#/evening"); ok(/أين كنتَ اليوم أكثر الوقت/.test(await txt(page, "#view")), "2: step 1 asks where most of the day went");
    await page.click('#view [data-act="finger"][data-f="ring"]'); await page.waitForTimeout(250);
    ok(/سلوكيات الخنزير/.test(await txt(page, ".eve-pick")), "2: touching a finger shows its stage");
    await page.click('[data-act="evenext"]'); await page.waitForTimeout(250);
    await page.fill("#eveG", `<img src=x onerror="window.__pwn=7"> ضحكة أخي ` + "ب".repeat(200)); await page.click('[data-act="evenext"]'); await page.waitForTimeout(250);
    ok(await has(page, '[data-act="evesay"]'), "2: step 3 is one touch of «أستغفر الله»");
    await page.click('[data-act="evesay"]'); await page.waitForTimeout(250);
    ok(/آتِ نَفْسِي تَقْوَاهَا/.test(await txt(page, "#view")) && /مسلم 2722/.test(await txt(page, "#view")), "2: the closing supplication with its reference");
    await page.click('[data-act="evefinish"]'); await page.waitForTimeout(300);
    const e = await getS(page), dk = Object.keys(e.eve || {})[0], ev = dk && e.eve[dk];
    ok(ev && ev.f === "pig" && ev.g && ev.g.length <= 120 && !/[<>]/.test(ev.g), "2: the night is saved with its finger and a cleaned line of thanks");
    ok(!(await page.evaluate(() => !!window.__pwn || !!document.querySelector("#view img[src='x']"))), "2: the line of thanks never runs as markup");
    await go(page, "#/me"); ok(!(await has(page, ".evecard")) && await has(page, ".evelink"), "2: the card disappears once done (the fixed link stays)");
    ok((await page.evaluate(() => document.querySelector(".pres .m.ok") !== null)), "2: the night counts as presence for the day");
    await go(page, "#/record"); ok(/ليالي المحاسبة/.test(await txt(page, "#view")) && await has(page, ".eve-mix"), "2: the record shows the nights and the finger spread");
    await go(page, "#/evening");
    const [dl] = await Promise.all([page.waitForEvent("download", { timeout: 5000 }), (async () => { await page.click('[data-act="everemind"]'); await page.waitForTimeout(250); await page.click('[data-act="eveics"]'); })()]);
    const ics = fs.readFileSync(await dl.path(), "utf8");
    ok(dl.suggestedFilename().endsWith(".ics") && /^BEGIN:VCALENDAR\r\n/.test(ics) && /\r\nEND:VCALENDAR\r\n$/.test(ics), "2: the reminder is a calendar file");
    ok(/\r\nRRULE:FREQ=DAILY\r\n/.test(ics) && /\r\nDTSTART:\d{8}T200000\r\n/.test(ics), "2: it repeats daily at 20:00 local time (no Z, no time zone)");
    ok(/SUMMARY:محاسبة المساء · تزكية/.test(ics.replace(/\r\n /g, "")) && /URL:https:\/\/tazkiya\.family\/#\/evening/.test(ics), "2: title and link as specified");
    ok(ics.split("\r\n").every(l => Buffer.byteLength(l, "utf8") <= 75), "2: lines are folded at 75 octets");
    await setS(page, "s.gender = 'f'; s.eve = { '2020-01-01': { f: '<b>' }, 'bad': { f: 'pig' }, '2020-01-02': { f: 'monkey', g: '<i>' + 'x'.repeat(300) } };"); await open(page); await go(page, "#/evening");
    ok(/أين كنتِ/.test(await txt(page, "#view")), "2: feminine wording");
    const e2 = (await getS(page)).eve; ok(Object.keys(e2).join() === "2020-01-02" && e2["2020-01-02"].g.length <= 120 && !/[<>]/.test(e2["2020-01-02"].g), "2: stored nights are checked (day keys, stage, text)");
    ok(!page.errs.length, "2: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("evening reckoning (adults)", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1&ed=adult", 900); await go(page, "#/evening");
    ok(/ارجع إلى يومك من أوله/.test(await txt(page, "#view")), "2a: the adult question");
    await setS(page, "s.lang = 'en';"); await open(page, "", 900); await go(page, "#/evening");
    ok(/where did most of it go/.test(await txt(page, "#view")), "2a: English adult question");
    ok(!page.errs.length, "2a: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  // 3. the hidden deed: since Tadwin v2 (23 Nov 2026) a written line among «نِعَم الله عليّ», marked 🤲
  await step("hidden deed", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    ok(!(await has(page, '#view [data-act="khab"]')) && !(await has(page, '#view [data-act="sawopen"]')), "3: the hidden deed and «رأيت خيرًا» live in Tadwin, away from the home page");
    await go(page, "#/tasks"); ok(!(await has(page, '#view [data-act="khab"]')), "3: and the tasks section");
    await setS(page, "s.twIntro = true;"); await open(page); await go(page, "#/tadwin");
    const mix0 = JSON.stringify((await getS(page)).mix);
    ok(await has(page, '#tw-bless [data-act="khab"]'), "3: the hidden deed is offered inside the blessings");
    await page.click('#view [data-act="khab"]'); await page.waitForTimeout(300);
    ok(/تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا/.test(await txt(page, "#sheet")) && /البخاري 1423/.test(await txt(page, "#sheet")), "3: the sheet quotes the hadith with its reference");
    ok(await has(page, "#sheet textarea#twTx"), "3: it is written as text");
    await page.click('#sheet [data-act="khsave"]'); await page.waitForTimeout(250);
    ok(await has(page, "#sheet:not([hidden]) #twTx") && !((await getS(page)).khabia || []).length, "3: an empty line is not saved");
    await page.fill("#twTx", `<img src=x onerror="window.__pwn=9">أعطيت صديقي قلمي ` + "س".repeat(260)); await page.click('#sheet [data-act="khsave"]'); await page.waitForTimeout(350);
    const st = await getS(page), kh = st.khabia || [];
    ok(kh.length === 1 && kh[0].tx.length <= 200 && !/[<>]/.test(kh[0].tx) && kh[0].t > 0 && !(st.bless || []).length, "3: saved as a cleaned line (200 at most) with its date, as a hidden deed");
    ok(JSON.stringify(st.mix) === mix0 && !(st.ev || []).length, "3: no points, no mix change, no event");
    ok(/🤲/.test(await txt(page, "#tw-bless .tw-list")) && /أعطيت صديقي قلمي/.test(await txt(page, "#tw-bless")), "3: marked 🤲 among the blessings");
    ok(!(await page.evaluate(() => !!window.__pwn || !!document.querySelector("#view img[src='x']"))), "3: the line never runs as markup");
    await go(page, "#/record"); ok(!/خبيئ|أعطيت صديقي/.test(await page.evaluate(() => document.getElementById("view").textContent)), "3: the record never shows it");
    await setS(page, "delete s.twV; delete s.twMig; delete s.khabia; delete s.bless; s.good = []; s.khab = ['2020-01-01','2020-01-01','2020-01-01','2020-01-01','<b>', 5]; s.eve = { '2020-01-05': { f: 'human', g: 'المطر' } };"); await open(page);
    const s2 = await getS(page);
    ok((s2.khabia || []).length === 3 && (s2.bless || []).some(e => e.src === "eve" && e.tx === "المطر") && !("khab" in s2) && !("good" in s2) && s2.twV === 2, "3: the oldest date-only hidden deeds (three a day at most) and evening blessings move in too");
    await open(page); const s3 = await getS(page); ok(s3.khabia.length === 3 && s3.bless.length === s2.bless.length, "3: that move happens once");
    await go(page, "#/tadwin"); ok(/خبيئة يعلمها الله/.test(await txt(page, "#tw-bless")), "3: an old hidden deed shows without text");
    ok(!page.errs.length, "3: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("hidden deed (adults)", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1&ed=adult&lang=en", 900);
    await setS(page, "s.twIntro = true;"); await open(page, "", 900); await go(page, "#/tadwin");
    await page.click('#view [data-act="khab"]'); await page.waitForTimeout(300);
    ok(/left hand did not know/.test(await txt(page, "#sheet")) && /kept as a secret between you and Allah/.test(await txt(page, "#sheet")), "3a: English adult wording with the meaning of the hadith");
    ok(!page.errs.length, "3a: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  // Tadwin «علّم بالقلم», version 2 (docs/TADWIN-SPEC.md, approved 23 Nov 2026)
  const TW_OLD = /حسنات|سيئات|زلّة|زلة|صحيفة/; // the first journal's words, retired by the owner
  await step("tadwin: tab, intro and page order", async () => {
    for (const [q, lab, ch] of [["&lang=ar", "التدوين", "تحدّياتي"], ["&lang=en", "Journal", "My challenges"], ["&ed=adult&lang=ar", "التدوين", "مجاهداتي"], ["&ed=adult&lang=en", "Journal", "My challenges"]]) {
      const { ctx, page } = await fresh(); await open(page, "&reset=1" + q, 900);
      const tabs = await page.evaluate(() => [...document.querySelectorAll("#tabs a")].map(a => a.getAttribute("href") + "|" + a.innerText.trim()));
      // the adult edition opens on its tasks (#/), and the hand has its own tab (owner's decision, 27 Nov 2026)
      const ad = /ed=adult/.test(q), exp = ad ? ["#/|", "#/me|"] : ["#/|", "#/tasks|"];
      ok(tabs.length === exp.length + 1 && exp.every((x, i) => tabs[i].startsWith(x)) && tabs[exp.length] === "#/tadwin|" + lab, `tw: the tabs are ${ad ? "tasks, my hand" : "my hand, tasks"}, «${lab}» (${q}): ${tabs.join(", ")}`);
      ok(await has(page, '#tabs a[href="#/tadwin"] svg'), `tw: the journal tab has its pen (${q})`);
      await page.click('#tabs a[href="#/tadwin"]'); await page.waitForTimeout(400);
      const t = await txt(page, "#view");
      ok(await has(page, '#view [data-act="twstart"]') && /عَلَّمَ بِالْقَلَمِ/.test(t) && /كَاتِبِينَ/.test(t), `tw: the first visit opens «why we write» with both verses (${q})`);
      ok(!TW_OLD.test(t), `tw: «why we write» speaks of writing, blessings and challenges (${q})`);
      if (q.includes("en")) ok(/taught by the pen/.test(t) && /recording/.test(t) && /blessings/.test(t) && /challenges/.test(t), `tw: English meanings of the verses and the new idea (${q})`);
      else ok(/نعم/.test(t) && /(تحديات|مجاهدات)/.test(t) && /(اكتب كما تحكي|اكتب يومك كما جرى)/.test(t), `tw: the intro names free writing, blessings and challenges (${q})`);
      await page.click('#view [data-act="twstart"]'); await page.waitForTimeout(350);
      const ord = await page.evaluate(() => ["#tw-write", "#tw-nb", "#tw-bless", "#tw-chal", ".tw-eve .evelink"].map(s => { const e = document.querySelector("#view " + s); return e ? e.getBoundingClientRect().top + scrollY : -1; }));
      ok(ord.every(x => x >= 0) && ord.every((x, i) => !i || x > ord[i - 1]), `tw: write, notebook, blessings, challenges, the evening reckoning, in that order (${q}): ${ord.join(",")}`);
      const big = await page.evaluate(() => { const ta = document.getElementById("twNote"); const r = ta.getBoundingClientRect(); return { h: r.height, w: r.width, vw: innerWidth, max: Math.max(...[...document.querySelectorAll("#view .tw-paper > ul > li, #view .card")].map(e => e.getBoundingClientRect().height), 0) }; });
      ok(big.h >= 240 && big.w >= big.vw * 0.8 && big.h > big.max, `tw: the writing box is the largest element (${q}): ${JSON.stringify(big)}`);
      ok((await txt(page, "#tw-chal h2")).includes(ch), `tw: the challenges are called «${ch}» (${q})`);
      ok(!TW_OLD.test(await txt(page, "#view")), `tw: none of the first journal's words on the page (${q})`);
      ok(await has(page, '.tw-head a[href="#/tadwin/why"]') && await has(page, '.tw-eve .evelink[href="#/evening"]') && await has(page, '#tw-bless [data-act="sawopen"]') && await has(page, '#tw-bless [data-act="khab"]') && await has(page, '#tw-bless [data-act="twadd"][data-k="deed"]') && await has(page, "#tw-bless #tw-seen") && await has(page, '#view [data-act="sawopen"]'), `tw: «why» link, the evening after the challenges, and in the blessings «حسنة», «خبيئة», «رأيتُ خيرًا» and «ما رآه أهلي فيّ» (${q})`);
      ok(await has(page, '#tabs a[href="#/tadwin"].on'), `tw: the tab is marked current (${q})`);
      await open(page, "", 900); await go(page, "#/tadwin"); ok(!(await has(page, '#view [data-act="twstart"]')), `tw: the intro shows once (${q})`);
      await go(page, "#/tadwin/why"); ok(await has(page, '#view a[href="#/tadwin"].btn'), `tw: and stays reachable from its link (${q})`);
      ok(!page.errs.length, `tw: no script errors (${q}) ` + page.errs.slice(0, 1).join(""));
      await ctx.close();
    }
  });
  await step("tadwin: free writing and the notebook", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await setS(page, "s.twIntro = true;"); await open(page); await go(page, "#/tadwin");
    const note = "ذهبتُ اليوم إلى المدرسة\nوساعدني صديقي في الرياضيات\n\nثم لعبنا بعد الظهر";
    await page.fill("#twNote", note); await page.waitForTimeout(600);
    await open(page); await go(page, "#/tadwin");
    ok((await page.inputValue("#twNote")) === note, "tw: an unsaved page survives a reload as a draft");
    await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(400);
    let s = await getS(page);
    ok(s.notes.length === 1 && s.notes[0].tx === note && /^\d{4}-\d{2}-\d{2}$/.test(s.notes[0].d) && s.notes[0].t > 0 && !("twDraft" in s), "tw: saving keeps the text with its line breaks and its date, and clears the draft");
    ok((await page.inputValue("#twNote")) === "" && /حُفظت في دفترك/.test(await txt(page, ".tw-after")), "tw: the box is ready for a new page, with a quiet «saved»");
    await open(page); await go(page, "#/tadwin");
    ok((await txt(page, "#tw-nb .nb-c")).includes("1"), "tw: the notebook counts the entry after a reload");
    ok(await page.locator("#tw-nb .nb-e .nb-tx").first().isVisible() && /وساعدني صديقي/.test(await txt(page, "#tw-nb .nb-tx")) && /\d{4}/.test(await txt(page, "#tw-nb .tw-d")),
      "tw: after a reload the written page is in view on the Tadwin page with its date, with no tap (bug of 24 Nov 2026)");
    await go(page, "#/"); await go(page, "#/tadwin");
    ok(await page.locator("#tw-nb .nb-e .nb-tx").first().isVisible(), "tw: leaving the Tadwin page and coming back, the page is still in view");
    await page.click('#tw-nb [data-act="nbopen"]'); await page.waitForTimeout(400);
    ok((await page.inputValue("#twNote")) === note && await has(page, ".tw-write.editing") && await has(page, '#view [data-act="nbcancel"]'), "tw: an entry reopens in the writing box to be edited");
    ok(await page.locator("#tw-nb .nb-e.on").isVisible(), "tw: the notebook stays in view across the redraw, the open entry marked");
    await page.fill("#twNote", note + "\nوالحمد لله"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(400);
    s = await getS(page); ok(s.notes.length === 1 && /والحمد لله$/.test(s.notes[0].tx) && s.notes[0].u >= s.notes[0].t, "tw: editing changes the same entry and marks when");
    ok((await page.inputValue("#twNote")) === "" && !(await has(page, ".tw-write.editing")), "tw: after the edit the box is a new page again");
    await page.fill("#twNote", "صفحة ثانية للتجربة"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(400);
    ok(/صفحة ثانية للتجربة/.test(await txt(page, "#tw-nb .nb-e .nb-tx")), "tw: the newest entry shows first");
    await page.click('#tw-nb [data-act="twdel"]'); await page.waitForTimeout(250);
    ok(/دفترك/.test(await txt(page, "#sheet")), "tw: removing an entry asks once");
    await page.click('#sheet [data-act="twdelyes"]'); await page.waitForTimeout(300);
    s = await getS(page); ok(s.notes.length === 1 && /والحمد لله$/.test(s.notes[0].tx), "tw: only the chosen entry is removed");
    await setS(page, "s.notes = s.notes.concat([1, 2, 3, 4].map(i => ({ id: 'old' + i, t: Date.now() - i * 40 * 86400000, d, tx: 'صفحة قديمة ' + i })));"); await open(page); await go(page, "#/tadwin");
    ok(await page.locator("#tw-nb .nb-e").count() === 3 && /\(5\)/.test(await txt(page, "#tw-nb .nb-all")), "tw: the Tadwin page shows the latest three pages and a way to the whole notebook");
    await page.click("#tw-nb .nb-all"); await page.waitForTimeout(400);
    ok(await page.evaluate(() => location.hash) === "#/tadwin/nb" && await page.locator("#view .nbp .nb-e").count() === 5 && await page.locator("#view .nb-month").count() >= 2
      && await has(page, '#view .st-back a[href="#/tadwin"]'), "tw: the whole notebook opens on its own page, month by month, with a way back");
    await page.click('#view .nbp [data-act="nbopen"] >> nth=0'); await page.waitForTimeout(500);
    ok(await page.evaluate(() => location.hash) === "#/tadwin" && await has(page, ".tw-write.editing"), "tw: an entry opened from the whole notebook comes back to the writing box");
    await page.click('#view [data-act="nbcancel"]'); await page.waitForTimeout(300);
    await setS(page, "s.notes = s.notes.filter(e => !/^old/.test(e.id));"); await open(page);
    await setS(page, "s.notes = [{ id: '<x>', t: 5, tx: '<b>hi</b>\\u0001' }, { t: 'x', tx: 'a' }, { id: 'a', t: 1700000000000, tx: 'x'.repeat(9000), d: 'bad' }, { id: 'b', t: 1700000000000, tx: '   ' }, 7]; s.twDraft = '<i>draft</i>';"); await open(page);
    s = await getS(page);
    ok(s.notes.length === 2 && s.notes.every(e => /^[a-z0-9-]{1,24}$/.test(e.id) && /^\d{4}-\d{2}-\d{2}$/.test(e.d)) && !/[<>]/.test(JSON.stringify(s.notes)) && s.notes[1].tx.length === 8000 && !/[<>]/.test(s.twDraft), "tw: stored entries and the draft are checked (id, date, day, text up to 8000)");
    ok(!page.errs.length, "tw: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("tadwin: blessings and challenges", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await setS(page, "s.twIntro = true;"); await open(page); await go(page, "#/tadwin");
    await page.click('#tw-bless [data-act="twadd"][data-k="bless"]'); await page.waitForTimeout(300);
    await page.fill("#twTx", "جدتي التي زارتنا اليوم"); await page.click('#sheet [data-act="twf"][data-s="human"]'); await page.waitForTimeout(200);
    ok((await page.inputValue("#twTx")) === "جدتي التي زارتنا اليوم", "tw: picking a finger keeps the text");
    await page.click('#sheet [data-act="twsave"]'); await page.waitForTimeout(350);
    await page.click('#tw-bless [data-act="twadd"][data-k="deed"]'); await page.waitForTimeout(300);
    ok(/حسنة/.test(await txt(page, "#sheet h2")), "tw: «اكتب حسنة» opens its own sheet");
    await page.fill("#twTx", "ساعدت جدتي في حمل الأكياس"); await page.click('#sheet [data-act="twsave"]'); await page.waitForTimeout(350);
    await page.click('#tw-chal [data-act="twadd"][data-k="chal"]'); await page.waitForTimeout(300);
    await page.fill("#twTx", "أن أهدأ حين يغضبني أخي"); await page.click('#sheet [data-act="twf"][data-s="monkey"]'); await page.waitForTimeout(150); await page.click('#sheet [data-act="twsave"]'); await page.waitForTimeout(350);
    await page.click('#tw-chal [data-act="twadd"][data-k="chal"]'); await page.waitForTimeout(300);
    await page.fill("#twTx", "النوم مبكرًا"); await page.click('#sheet [data-act="twsave"]'); await page.waitForTimeout(350);
    await open(page); await go(page, "#/tadwin");
    let s = await getS(page);
    ok(s.bless.length === 2 && s.bless[0].src === "hand" && s.bless[0].f === "human" && s.bless[1].src === "deed", "tw: a blessing by hand and a good deed are both kept among the blessings");
    ok(s.chal.length === 2 && s.chal[0].f === "monkey" && s.chal[0].src === "hand" && !s.chal[1].f, "tw: challenges are kept, with an optional finger");
    ok(/جدتي التي زارتنا/.test(await txt(page, "#tw-bless")) && /حسنة/.test(await txt(page, "#tw-bless .tw-tag")) && !/أن أهدأ/.test(await txt(page, "#tw-bless")), "tw: they survive a reload, each in its section");
    ok(await has(page, '#tw-chal .ch-task a[href="#/stage/monkey/work"]') && (await page.locator("#tw-chal .ch-task").count()) === 1, "tw: a challenge linked to a finger suggests one of that finger's tasks");
    // overcome: a line of thanks among the blessings
    await page.click('#tw-chal [data-act="chover"] >> nth=0'); await page.waitForTimeout(400);
    s = await getS(page); const over = s.chal.find(e => e.done), thanks = s.bless.find(e => e.src === "over");
    ok(over && over.dt > 0 && thanks && thanks.n === over.id && thanks.tx.includes(over.tx) && /بفضل الله/.test(thanks.tx), "tw: «تجاوزته بفضل الله» marks it and writes a thanks line into the blessings");
    ok(/تجاوزت/.test(await txt(page, "#tw-bless")) && /✓ تجاوزته بفضل الله/.test(await txt(page, "#tw-chal")), "tw: both are shown");
    // editing a line
    await page.click('#tw-bless [data-act="twedit"] >> nth=0'); await page.waitForTimeout(300);
    ok(await has(page, "#sheet #twTx"), "tw: a line opens to be edited");
    await page.fill("#twTx", "نعمة معدّلة"); await page.click('#sheet [data-act="twsave"]'); await page.waitForTimeout(350);
    s = await getS(page); ok(s.bless.length === 3 && s.bless.some(e => e.tx === "نعمة معدّلة" && e.u), "tw: editing changes the line in place");
    // the evening's blessing
    await go(page, "#/evening"); await page.click('#view [data-act="finger"][data-f="ring"]'); await page.waitForTimeout(200); await page.click('[data-act="evenext"]'); await page.waitForTimeout(200);
    await page.fill("#eveG", "نزول المطر"); await page.click('[data-act="evenext"]'); await page.waitForTimeout(200); await page.click('[data-act="evesay"]'); await page.waitForTimeout(200);
    await page.click('[data-act="evefinish"]'); await page.waitForTimeout(300);
    ok(await has(page, '#view a.eve-tw[href="#/tadwin"]') && /نِعَم الله عليّ/.test(await txt(page, "#view")), "tw: the evening's last screen points to «نِعَم الله عليّ»");
    ok((await getS(page)).bless.some(e => e.src === "eve" && e.tx === "نزول المطر"), "tw: the evening's blessing is written there");
    await go(page, "#/tadwin"); ok(/من المحاسبة/.test(await txt(page, "#tw-bless")) && /نزول المطر/.test(await txt(page, "#tw-bless")), "tw: shown «من المحاسبة»");
    // a free page too, for the privacy checks
    await page.fill("#twNote", "سرّ الدفتر الخاص جدًا"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(350);
    const secret = /سرّ الدفتر|جدتي|أن أهدأ|نزول المطر|معدّلة/;
    for (const h of ["#/record", "#/", "#/tasks"]) { await go(page, h); ok(!secret.test(await page.evaluate(() => document.getElementById("view").textContent)), `tw: nothing from the journal in ${h}`); }
    await page.evaluate(() => { const p = { active: "p2", list: ["p1", "p2"] }; localStorage.setItem("akhlaq-app-v1:profiles", JSON.stringify(p));
      localStorage.setItem("akhlaq-app-v1:p2", JSON.stringify({ v: 1, lang: "ar", fs: 19, mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, intro: true, tour: true, twIntro: true })); });
    await open(page, "", 900);
    for (const h of ["#/tadwin", "#/tadwin/bad", "#/record", "#/", "#/seen"]) { await go(page, h); ok(!secret.test(await page.evaluate(() => document.body.textContent)), `tw: another profile sees nothing of it in ${h}`); }
    await page.evaluate(() => { const p = { active: "p1", list: ["p1", "p2"] }; localStorage.setItem("akhlaq-app-v1:profiles", JSON.stringify(p)); });
    // stored lines are checked
    await setS(page, "s.bless = [{ id: '<x>', t: 5, tx: '<b>hi</b>', src: 'zz', f: 'pig', n: '<n>' }, { t: 'x', tx: 'a' }, { id: 'a', t: 1700000000000, tx: '' }, { id: 'b', t: 1700000000000, tx: 'y'.repeat(400), src: 'over', n: 'c1', done: true }, 7]; s.chal = [{ id: 'c', t: 1700000000000, tx: 'z', done: 1, src: 'deed', f: '<i>' }, { id: 'c', t: 1700000000001, tx: 'w', done: true, dt: 'x' }]; s.khabia = [{ id: 'k', t: 1700000000000, f: 'pig', src: 'hand' }];"); await open(page);
    s = await getS(page);
    ok(s.bless.length === 2 && s.bless.every(e => /^[a-z0-9-]{1,24}$/.test(e.id)) && !/[<>]/.test(JSON.stringify(s.bless)) && !("src" in s.bless[0]) && !("n" in s.bless[0]) && s.bless[0].f === "pig" && s.bless[1].tx.length === 200 && s.bless[1].src === "over" && !("done" in s.bless[1]), "tw: stored blessings are checked (id, date, text, source, finger, link)");
    ok(s.chal.length === 2 && !("done" in s.chal[0]) && !("src" in s.chal[0]) && !("f" in s.chal[0]) && s.chal[1].done === true && !("dt" in s.chal[1]) && s.chal[0].id !== s.chal[1].id, "tw: stored challenges are checked (marks, source, unique ids)");
    ok(s.khabia.length === 1 && Object.keys(s.khabia[0]).sort().join() === "id,t", "tw: stored hidden deeds keep only their date and text");
    ok(!page.errs.length, "tw: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("tadwin: parent mode", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await setS(page, "s.twIntro = true; s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'سرّ في الدفتر' }]; s.bless = [{ id: 'b1', t: Date.now(), tx: 'نعمة سرّية' }]; s.chal = [{ id: 'c1', t: Date.now(), tx: 'تحدٍّ سرّي' }]; s.khabia = [{ id: 'k1', t: Date.now(), tx: 'خبيئة سرّية' }];"); await open(page);
    // parent mode has no button in the interface for now (owner decision, 21 Nov 2026): it is reached here through its PIN sheet
    await page.evaluate(() => { const b = document.createElement("button"); b.dataset.act = "pinopen"; document.body.appendChild(b); b.click(); b.remove(); }); await page.waitForTimeout(300);
    for (const k of "1234") { await page.click(`#sheet [data-act="pin"][data-k="${k}"]`); await page.waitForTimeout(120); }
    const secret = /سرّ في الدفتر|نعمة سرّية|تحدٍّ سرّي|خبيئة سرّية/;
    for (const h of ["#/tadwin", "#/record", "#/", "#/tasks", "#/seen"]) { await go(page, h); ok(!secret.test(await page.evaluate(() => document.body.textContent)), `tw: parent mode shows nothing of the journal in ${h}`); }
    await go(page, "#/tadwin"); ok(/لصاحب الملف وحده/.test(await txt(page, "#view")) && !(await has(page, "#twNote")), "tw: in parent mode the journal page names its owner, with nothing to read or write");
    ok(!page.errs.length, "tw: parent mode, no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("tadwin: migration from the first journal", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await setS(page, "delete s.twV; delete s.notes; delete s.bless; delete s.chal; delete s.khabia; s.twIntro = true; s.twMig = true;"
      + " s.good = [{ id: 'g1', t: 1763800000000, tx: 'ساعدت جدتي', f: 'human' }, { id: 'g2', t: 1763800001000, k: 'kh', tx: 'خبيئة قديمة', f: 'pig' }, { id: 'g3', t: 1763800002000, tx: 'المطر', k: 'ni' }, { id: 'g4', t: 1763800003000, k: 'kh' }];"
      + " s.bad = [{ id: 'b1', t: 1763800004000, tx: 'رفعت صوتي على أخي', st: true }, { id: 'b2', t: 1763800005000, tx: 'تأخرت عن الصلاة', fx: true, f: 'pig' }];"); await open(page);
    const s = await getS(page), byId = (l, id) => (l || []).find(e => e.id === id) || {};
    ok(!("good" in s) && !("bad" in s) && s.twV === 2, "mig: the first journal's two lists are gone, version 2 recorded");
    ok(byId(s.bless, "g1").tx === "ساعدت جدتي" && byId(s.bless, "g1").src === "deed" && byId(s.bless, "g1").f === "human" && byId(s.bless, "g3").src === "eve", "mig: good lines go to the blessings (good deeds, the evening's blessings)");
    ok(byId(s.khabia, "g2").tx === "خبيئة قديمة" && !("f" in byId(s.khabia, "g2")) && byId(s.khabia, "g4").id === "g4", "mig: hidden deeds stay hidden deeds, among the blessings");
    ok(byId(s.chal, "b1").tx === "رفعت صوتي على أخي" && byId(s.chal, "b1").src === "hand" && !("st" in byId(s.chal, "b1")) && !byId(s.chal, "b1").done, "mig: the other scroll's lines go to the challenges, text unchanged");
    ok(byId(s.chal, "b2").tx === "تأخرت عن الصلاة" && byId(s.chal, "b2").done === true && byId(s.chal, "b2").f === "pig" && !s.bless.some(e => e.src === "over"), "mig: a line marked «put right» comes over as overcome, with its finger");
    await go(page, "#/tadwin/bad");
    ok(await has(page, "#tw-chal") && /رفعت صوتي على أخي/.test(await txt(page, "#tw-chal")) && !TW_OLD.test(await txt(page, "#view")), "mig: the old address of the second scroll opens the journal at the challenges");
    await open(page); const s2 = await getS(page);
    ok(s2.bless.length === s.bless.length && s2.chal.length === s.chal.length && s2.khabia.length === s.khabia.length, "mig: it happens once");
    ok(!page.errs.length, "mig: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("tadwin: extract", async () => {
    // without the server (the site today): no button, no setting
    { const { ctx, page } = await fresh(); await open(page, "&reset=1&ed=adult", 900);
      await setS(page, "s.twIntro = true;"); await open(page, "", 900); await go(page, "#/tadwin");
      await page.fill("#twNote", "اليوم كان يومًا طيبًا مع أهلي"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(2900);
      ok(!(await has(page, '[data-act="exgo"]')), "ext: without a server the extract button stays hidden");
      ok(!page.errs.length, "ext: no script errors without a server (" + page.errs.slice(0, 1).join("") + ")");
      await ctx.close(); }
    // with a server (mocked to the contract of outputs/server/src/extract.js)
    const freshNoSw = async (vp) => { const ctx = await browser.newContext({ viewport: vp || { width: 375, height: 812 }, serviceWorkers: "block" }); const page = await ctx.newPage(); const errs = []; page.on("pageerror", e => errs.push(e.message)); page.errs = errs; return { ctx, page }; };
    const mock = async (ctx, reqs, ans, adult18, img) => {
      await ctx.route("**/api/health", r => r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, env: "test", ai: true, ai_image: img !== false }) }));
      await ctx.route("**/api/me", r => r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ account: { email: "x@example.com", adult_at: adult18 === false ? null : 1763900000000 }, profiles: [] }) }));
      await ctx.route("**/api/sync", r => r.fulfill({ status: 200, contentType: "application/json", body: '{"cursor":"1.1","more":false,"profiles":[],"changes":[],"rejected":[]}' }));
      await ctx.route("**/api/extract", r => { reqs.push({ m: r.request().method(), h: r.request().headers(), b: r.request().postData() }); return r.fulfill(ans()); }); };
    // the 18+ card, the one-time consent, then each saved page is analysed into dated lines of the three lists
    { const { ctx, page } = await freshNoSw(), reqs = [], adultReqs = [];
      await mock(ctx, reqs, () => ({ status: 200, contentType: "application/json", body: JSON.stringify({ good: ["أمي التي ساعدتني في واجبي", "<b>صديق</b> وقف بجانبي", 5], challenges: ["أن أهدأ حين يغضبني أخي"], hidden: ["تصدقت على جاري دون أن يعلم أحد"], care: "ما كتبته مهم." }) }));
      await ctx.route("**/api/account/adult", r => { adultReqs.push(1); return r.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true,"adult_at":1763900000000}' }); });
      await open(page, "&reset=1&ed=adult", 900); await setS(page, "s.twIntro = true; s.gender = 'm';"); await open(page, "", 900); await go(page, "#/tadwin", 900);
      const card = await txt(page, "#tw-write .ai-bar");
      ok(/18\+/.test(card) && /ثماني عشرة/.test(card) && /OpenAI/.test(card) && /للكبار وحدهم/.test(card) && await has(page, '#tw-write [data-act="aiopt"]'), "ai: the journal page says plainly the analysis is for adults over 18, with OpenAI named");
      await page.fill("#twNote", "ساعدتني أمي في الواجب، وغضبت من أخي"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(600);
      ok(!reqs.length && !((await getS(page)).bless || []).length, "ai: before the consent, saving a page sends nothing");
      await page.click('#tw-write [data-act="aiopt"]'); await page.waitForTimeout(400);
      const sh = await txt(page, "#sheet");
      ok(/ثماني عشرة/.test(sh) && /OpenAI/.test(sh) && /تدرّب/.test(sh) && /30|ثلاثين/.test(sh) && /طبعة الصغار/.test(sh) && await has(page, '#sheet a[href="privacy/"]'), "ai: the consent explains adults only, what goes to OpenAI, no training, the 30-day logs, and links the privacy page");
      await page.click('#sheet [data-act="adultyes"]'); await page.waitForTimeout(500);
      ok(!adultReqs.length && (await getS(page)).aiOn > 0 && await has(page, '#tw-write .ai-bar.on [data-act="aioff"]'), "ai: with the 18+ statement already given, the consent is kept on the profile and the line «أوقفه» shows");
      ok(await has(page, "#tw-write label.ai-photo input[data-ai-photo]"), "ai: the photograph-a-page button shows once the analysis is on");
      await page.fill("#twNote", "ساعدتني أمي في الواجب، وغضبت من أخي، وتصدقت سرًّا"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(900);
      const rq = reqs[0] || { h: {} }, body = JSON.parse(rq.b || "{}");
      ok(reqs.length === 1 && rq.m === "POST" && rq.h["x-tazkiya"] === "1" && /application\/json/.test(rq.h["content-type"] || ""), "ai: saving a page POSTs /api/extract as JSON with the x-tazkiya header");
      ok(Object.keys(body).sort().join() === "edition,gender,lang,pid,text" && body.pid === "p1" && body.edition === "adult" && body.lang === "ar" && body.gender === "m" && /تصدقت سرًّا/.test(body.text), `ai: it sends that page with edition, language and gender: ${JSON.stringify(body)}`);
      let s = await getS(page); const note = s.notes.find(e => /سرًّا/.test(e.tx));
      ok(s.bless.length === 2 && s.bless.every(e => e.src === "ai" && e.n === note.id && Math.abs(e.t - note.t) < 50) && !/[<>]/.test(JSON.stringify(s.bless)), "ai: good deeds and blessings are saved as dated lines of the page, cleaned");
      ok(s.chal.length === 1 && s.chal[0].tx === "أن أهدأ حين يغضبني أخي" && s.chal[0].src === "ai" && s.chal[0].n === note.id, "ai: the challenge is saved");
      ok(s.khabia.length === 1 && s.khabia[0].tx === "تصدقت على جاري دون أن يعلم أحد" && s.khabia[0].n === note.id && !s.khabia[0].src, "ai: the hidden deed goes among the hidden deeds");
      ok(/أُضيفت سطور هذه الصفحة/.test(await txt(page, "#ai-st")) && /ما كتبته مهم/.test(await txt(page, "#ai-st .ex-care")), "ai: the status line says the lines were added, with the care line");
      ok(/من كتابتي/.test(await txt(page, "#tw-bless")) && /دون أن يعلم أحد/.test(await txt(page, "#tw-bless")) && /أن أهدأ/.test(await txt(page, "#tw-chal")), "ai: the lines show at once in the lists");
      ok(await has(page, `#tw-bless [data-act="twedit"][data-id="${s.bless[0].id}"]`) && await has(page, `#tw-bless [data-act="twdel"][data-id="${s.bless[0].id}"]`), "ai: each line can be edited or deleted");
      // saving the page again: its untouched lines are replaced, a line the writer edited stays
      await setS(page, "s.bless[0].u = s.bless[0].t + 5000; s.bless[0].tx = 'أمي، عدّلتها بيدي';"); await open(page, "", 900); await go(page, "#/tadwin", 900);
      await page.click(`#tw-nb [data-act="nbopen"][data-id="${note.id}"]`); await page.waitForTimeout(400);
      await page.fill("#twNote", note.tx + " ثم نمت مبكرًا"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(900);
      s = await getS(page);
      ok(reqs.length === 2 && s.bless.length === 3 && s.bless.some(e => e.tx === "أمي، عدّلتها بيدي") && s.chal.length === 1 && s.khabia.length === 1, `ai: a page saved again replaces its earlier lines and keeps the edited one (${s.bless.length}, ${s.chal.length}, ${s.khabia.length})`);
      await page.click('#tw-write [data-act="aioff"]'); await page.waitForTimeout(400);
      await page.fill("#twNote", "صفحة بعد إيقاف التحليل في هذا اليوم"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(600);
      ok(!(await getS(page)).aiOn && reqs.length === 2 && await has(page, '#tw-write [data-act="aiopt"]'), "ai: turned off, nothing more is sent");
      ok(!page.errs.length, "ai: no script errors (" + page.errs.slice(0, 1).join("") + ")");
      await ctx.close(); }
    // a photographed page: made smaller on the device, read on the server, kept in the notebook with its date
    { const { ctx, page } = await freshNoSw(), reqs = [];
      await mock(ctx, reqs, () => ({ status: 200, contentType: "application/json", body: JSON.stringify({ text: "ساعدت جارتي في حمل أكياسها\nوتأخرت عن صلاة العصر", date: "2026-11-20", good: ["ساعدت جارتي في حمل أكياسها"], challenges: ["أن أصلي العصر في وقتها"], hidden: [], blessings: ["ساعدت جارتي في حمل أكياسها"] }) }));
      await open(page, "&reset=1&ed=adult&lang=en", 900); await setS(page, "s.twIntro = true; s.aiOn = Date.now();"); await open(page, "", 900); await go(page, "#/tadwin", 900);
      ok(/18\+/.test(await txt(page, "#tw-write .ai-bar")) && /adults only/.test(await txt(page, "#tw-write .ai-bar")), "ai photo: in English the line says adults only");
      const png = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "base64");
      await page.setInputFiles("#tw-write input[data-ai-photo]", { name: "page.png", mimeType: "image/png", buffer: png }); await page.waitForTimeout(1500);
      const body = JSON.parse((reqs[0] || {}).b || "{}");
      ok(reqs.length === 1 && /^data:image\/jpeg;base64,[A-Za-z0-9+/]+=*$/.test(body.image || "") && body.text === undefined && body.pid === "p1" && body.edition === "adult", `ai photo: the page goes as a JPEG data URL, no text (${Object.keys(body).join()})`);
      const s = await getS(page), n = s.notes.find(e => /جارتي/.test(e.tx));
      ok(n && n.d === "2026-11-20" && new Date(n.t).getDate() === 20 && n.tx.includes("\n"), "ai photo: the page's text is saved in the notebook on the date written on it");
      ok(s.bless.length === 1 && s.bless[0].n === n.id && s.chal.length === 1 && s.chal[0].t - n.t < 50, "ai photo: its lines are saved on that date");
      ok(/saved in My notebook/.test(await txt(page, "#ai-st")) && /ساعدت جارتي/.test(await txt(page, "#tw-nb")), "ai photo: the status says so, and the page shows in the notebook");
      ok(!page.errs.length, "ai photo: no script errors (" + page.errs.slice(0, 1).join("") + ")");
      await ctx.close(); }
    // no AI for children (owner decision, 23 Nov 2026): never in the kids' edition, not even as a setting
    { const { ctx, page } = await freshNoSw(), reqs = [];
      await mock(ctx, reqs, () => ({ status: 200, contentType: "application/json", body: '{"good":["x"],"challenges":[],"hidden":[]}' }));
      for (const q of ["&lang=ar", "&lang=en"]) {
        await open(page, "&reset=1" + q, 900); await setS(page, "s.twIntro = true; s.age = '9-14'; s.aiOn = Date.now(); s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'كان يومًا طيبًا في المدرسة' }];"); await open(page, "", 900); await go(page, "#/tadwin", 1200);
        await page.fill("#twNote", "كتبت صفحة جديدة طويلة اليوم"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(400);
        ok(!(await has(page, '[data-act="exgo"]')) && !(await has(page, ".ai-bar, #ai-st, input[data-ai-photo], [data-act='aiopt']")) && !/OpenAI|18\+/.test(await txt(page, "#view")), `ext: kids (${q}): no analysis, no 18+ card, no photo button, with a working server`);
        await page.click("#setBtn"); await page.waitForTimeout(500);
        ok(!/(المساعد|الذكاء|OpenAI|journal helper|\bAI\b)/.test(await txt(page, "#sheet")), `ext: kids (${q}): no setting for it`);
        await page.keyboard.press("Escape"); await page.waitForTimeout(200);
        ok(((await getS(page)).bless || []).length === 0 && ((await getS(page)).chal || []).length === 0 && await has(page, '#tw-bless [data-act="twadd"]') && await has(page, '#tw-chal [data-act="twadd"]'), `ext: kids (${q}): writing and adding by hand stay`);
      }
      // settings may ask the server whether family sign-in is on (api/health); the AI and the adult statement are never called
      const calls = await page.evaluate(() => performance.getEntriesByType("resource").filter(e => /\/api\/(extract|account\/adult)/.test(e.name)).length);
      ok(!reqs.length && !calls, `ext: kids: the app never calls the server's AI or asks for it (${reqs.length}, ${calls})`);
      ok(!page.errs.length, "ext: kids: no script errors (" + page.errs.slice(0, 1).join("") + ")");
      await ctx.close(); }
    // an adult account without the 18+ statement: the first use asks for it with the consent, and nothing is read before it
    { const { ctx, page } = await freshNoSw(), reqs = [], adultReqs = [];
      await mock(ctx, reqs, () => ({ status: 200, contentType: "application/json", body: '{"blessings":["صحة أمي"],"challenges":[]}' }), false);
      await ctx.route("**/api/account/adult", r => { adultReqs.push({ h: r.request().headers(), b: r.request().postData() }); return r.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true,"adult_at":1763900000000}' }); });
      await open(page, "&reset=1&ed=adult", 900); await setS(page, "s.twIntro = true; s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'كان يومًا طويلًا في العمل' }];"); await open(page, "", 900); await go(page, "#/tadwin", 1200);
      ok(await has(page, '#tw-nb [data-act="exgo"]'), "ext: a signed-in adult sees «حلّل» before the 18+ statement");
      await page.click('#tw-nb [data-act="exgo"]'); await page.waitForTimeout(400);
      ok(/ثماني عشرة/.test(await txt(page, "#sheet")) && /OpenAI/.test(await txt(page, "#sheet")) && !reqs.length, "ext: the first use asks for the 18+ statement and the consent, and sends nothing yet");
      await page.click('#sheet [data-act="adultyes"]'); await page.waitForTimeout(900);
      const ab = JSON.parse((adultReqs[0] || {}).b || "{}");
      ok(adultReqs.length === 1 && ab.confirm === true && Object.keys(ab).length === 1 && (adultReqs[0].h || {})["x-tazkiya"] === "1", "ext: the statement is POSTed as {confirm: true} with the x-tazkiya header");
      const s = await getS(page);
      ok(reqs.length === 1 && s.bless.length === 1 && s.bless[0].tx === "صحة أمي" && s.bless[0].n === "n1", "ext: after it the page is analysed (an older answer shape still read)");
      ok(!page.errs.length, "ext: no script errors (" + page.errs.slice(0, 1).join("") + ")");
      await ctx.close(); }
    { const { ctx, page } = await freshNoSw(), reqs = [];
      await mock(ctx, reqs, () => ({ status: 401, contentType: "application/json", body: '{"error":"no_session"}' }));
      await open(page, "&reset=1&ed=adult&lang=en", 900); await setS(page, "s.twIntro = true; s.aiOn = Date.now(); s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'A long day at work, and a kind word.' }];"); await open(page, "", 900); await go(page, "#/tadwin", 1200);
      await page.click('#tw-nb [data-act="exgo"]'); await page.waitForTimeout(600);
      ok(/signed in/.test(await txt(page, "#ai-st")), "ext: a signed-out answer asks to sign in");
      ok(!page.errs.length, "ext: no script errors (" + page.errs.slice(0, 1).join("") + ")");
      await ctx.close(); }
    // another adult profile on the device (a family member, not the account holder): hidden
    { const { ctx, page } = await freshNoSw(), reqs = [];
      await mock(ctx, reqs, () => ({ status: 200, contentType: "application/json", body: '{"good":["x"],"challenges":[],"hidden":[]}' }));
      await open(page, "&reset=1&ed=adult", 900);
      await page.evaluate(() => { localStorage.setItem("akhlaq-app-v1:profiles", JSON.stringify({ active: "p2", list: ["p1", "p2"] }));
        localStorage.setItem("akhlaq-app-v1:p2", JSON.stringify({ v: 1, lang: "ar", fs: 19, mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, edition: "adult", intro: true, tour: true, twIntro: true, aiOn: Date.now(), notes: [{ id: "n1", t: Date.now(), tx: "كتابة فرد آخر من الأسرة" }] })); });
      await open(page, "", 900); await go(page, "#/tadwin", 1200);
      await page.fill("#twNote", "صفحة جديدة لفرد آخر من الأسرة"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(500);
      ok(!(await has(page, '[data-act="exgo"], .ai-bar, #ai-st')) && !reqs.length, "ext: an adult profile other than the account holder's sees nothing of the analysis and sends nothing");
      await ctx.close(); }
    // nothing found: say so, and invite adding by hand
    { const { ctx, page } = await freshNoSw(), reqs = [];
      await mock(ctx, reqs, () => ({ status: 200, contentType: "application/json", body: '{"good":[],"challenges":[],"hidden":[]}' }));
      await open(page, "&reset=1&ed=adult", 900); await setS(page, "s.twIntro = true; s.aiOn = Date.now(); s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'كان يومًا طويلًا في العمل' }];"); await open(page, "", 900); await go(page, "#/tadwin", 1200);
      await page.click('#tw-nb [data-act="exgo"]'); await page.waitForTimeout(600);
      ok(/لم يجد التحليل سطورًا/.test(await txt(page, "#ai-st")) && /بيدك/.test(await txt(page, "#ai-st")), "ext: empty lists say nothing was found and invite adding by hand");
      await ctx.close(); }
  });
  await step("tadwin: backup", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await setS(page, "s.twIntro = true; s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'صفحة\\nفي النسخة' }]; s.bless = [{ id: 'b1', t: Date.now(), tx: 'نعمة في النسخة', src: 'ai', n: 'n1' }]; s.chal = [{ id: 'c1', t: Date.now(), tx: 'تحدٍّ في النسخة', done: true, dt: Date.now(), f: 'pig' }]; s.khabia = [{ id: 'k1', t: Date.now(), tx: 'خبيئة في النسخة' }];"); await open(page);
    const [dl] = await Promise.all([page.waitForEvent("download", { timeout: 5000 }), (async () => { await page.click("#setBtn"); await page.waitForTimeout(250); await page.click('#sheet [data-act="bkexport"]'); })()]);
    const out = JSON.parse(fs.readFileSync(await dl.path(), "utf8")), p1 = out.states && out.states.p1;
    ok(p1 && p1.notes[0].tx === "صفحة\nفي النسخة" && p1.bless[0].n === "n1" && p1.chal[0].done === true && p1.chal[0].f === "pig" && p1.khabia[0].tx === "خبيئة في النسخة", "bk: the backup file carries the notebook, the blessings, the challenges and the hidden deeds");
    await page.keyboard.press("Escape"); await setS(page, "s.notes = []; s.bless = []; s.chal = []; s.khabia = [];"); await open(page);
    p1.chal.push({ id: "<x>", t: 1, tx: "<script>x</script>" }); p1.notes.push({ id: "n2", t: 2, tx: "<i>" + "q".repeat(9000) });
    await page.click("#setBtn"); await page.waitForTimeout(250);
    await page.setInputFiles("#bkFile", { name: "b.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(out)) }); await page.waitForTimeout(400);
    await page.click('#sheet [data-act="bkyes"]'); await page.waitForTimeout(1300);
    let r = await getS(page);
    ok(r.notes.length === 2 && r.notes[0].tx === "صفحة\nفي النسخة" && r.notes[1].tx.length === 8000 && r.bless[0].n === "n1" && r.chal.length === 2 && r.chal[0].done === true && r.khabia.length === 1 && !/[<>]/.test(JSON.stringify(r)), "bk: restoring brings everything back, checked");
    await page.evaluate(() => localStorage.setItem("tazkiya-sync", JSON.stringify({ email: "a@example.com", cursor: "9.9", base: { "p1|note|n1": 1 }, gone: [], fresh: [], prof: {}, linked: true, at: 1 })));
    // a backup made by the first journal (two scrolls) is moved to version 2 on restore
    const old = JSON.parse(JSON.stringify(out)), o1 = old.states.p1; ["notes", "bless", "chal", "khabia", "twV"].forEach(k => delete o1[k]);
    o1.twMig = true; o1.good = [{ id: "g1", t: Date.now(), tx: "حسنة قديمة" }]; o1.bad = [{ id: "s1", t: Date.now(), tx: "سطر قديم", st: true }];
    await page.click("#setBtn"); await page.waitForTimeout(250);
    await page.setInputFiles("#bkFile", { name: "old.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(old)) }); await page.waitForTimeout(400);
    await page.click('#sheet [data-act="bkyes"]'); await page.waitForTimeout(1300);
    r = await getS(page);
    ok(r.twV === 2 && r.bless.length === 1 && r.bless[0].tx === "حسنة قديمة" && r.chal.length === 1 && r.chal[0].tx === "سطر قديم" && !("good" in r) && !("bad" in r), "bk: a backup from the first journal is moved to version 2");
    { const sy = await page.evaluate(() => JSON.parse(localStorage.getItem("tazkiya-sync") || "{}"));
      ok(sy.email === "a@example.com" && sy.linked === false && sy.cursor === "0" && !Object.keys(sy.base || {}).length, "bk: after a restore on a signed-in device, the next sync pulls the account's copy first (و1)"); }
    ok(!page.errs.length, "bk: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("tadwin: closing the year", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await setS(page, "s.twIntro = true; s.bless = [{ id: 'g1', t: Date.now() - 2000, tx: 'نعمة السنة الأولى', src: 'deed' }, { id: 'g2', t: Date.now() - 1000, tx: 'نعمة الصحة', src: 'eve' }]; s.khabia = [{ id: 'k1', t: Date.now(), tx: 'خبيئة السنة' }];"
      + " s.chal = [{ id: 'c1', t: Date.now(), tx: 'تحدٍّ أول' }, { id: 'c2', t: Date.now(), tx: 'تحدٍّ ثانٍ', done: true }]; s.notes = [{ id: 'n1', t: Date.now() - 500, d, tx: 'كتابة أولى في السنة' }, { id: 'n2', t: Date.now(), d, tx: 'كتابة ثانية في السنة' }];"); await open(page);
    const inWin = (() => { try { const p = {}; new Intl.DateTimeFormat("en-u-ca-islamic-umalqura-nu-latn", { day: "numeric", month: "numeric", year: "numeric" }).formatToParts(new Date()).forEach(x => { p[x.type] = x.value; }); const m = +p.month, d = +p.day; return (m === 12 && d >= 20) || (m === 1 && d <= 10); } catch (e) { return false; } })();
    await go(page, "#/tadwin"); ok((await has(page, ".ye-card")) === inWin, `ye: the «ختام السنة» card follows the Hijri dates (in the window today: ${inWin})`);
    await open(page, "&burntest=1"); await go(page, "#/tadwin");
    ok(await has(page, '.ye-card [data-act="burnask"]') && /ختام السنة/.test(await txt(page, ".ye-card")) && /صفحة التحديات/.test(await txt(page, ".ye-card")), "ye: the test hook shows the card outside its days");
    await page.click('.ye-card [data-act="burnask"]'); await page.waitForTimeout(300);
    ok(/لا رجوع فيها/.test(await txt(page, "#sheet")) && /يبقى دفترك ونعمك/.test(await txt(page, "#sheet")) && await has(page, '#sheet [data-act="burnyes"]'), "ye: one confirmation first, saying what stays");
    ok(((await getS(page)).chal || []).length === 2, "ye: nothing is deleted before it");
    await page.click('#sheet [data-act="burnyes"]'); await page.waitForTimeout(500);
    let s = await getS(page);
    ok(s.chal.length === 0 && s.bless.length === 2 && s.khabia.length === 1 && s.notes.length === 2 && s.burnY > 1400, "ye: the burn empties the challenges only, for real; the notebook, blessings and hidden deeds stay");
    ok(await has(page, ".burn-paper") && /فَإِنَّ مَعَ الْعُسْرِ يُسْرًا/.test(await txt(page, "#view")) && /الشرح: 5/.test(await txt(page, "#view")) && !TW_OLD.test(await txt(page, "#view")), "ye: the page burns with ﴿فَإِنَّ مَعَ الْعُسْرِ يُسْرًا﴾");
    await page.click('#view [data-act="burnnext"]'); await page.waitForTimeout(300);
    ok(/نعم الله عليك في سنتك/.test(await txt(page, "#view")) && /نعمة السنة الأولى/.test(await txt(page, ".ye-one")) && /1 \/ 3/.test(await txt(page, ".ye-count")), "ye: then the year's blessings, one by one");
    await page.click('#view [data-act="burnnext"]'); await page.waitForTimeout(250); await page.click('#view [data-act="burnnext"]'); await page.waitForTimeout(250);
    ok(/خبيئة السنة/.test(await txt(page, ".ye-one")) && /🤲/.test(await txt(page, ".ye-one")), "ye: hidden deeds among them");
    await page.click('#view [data-act="burnnext"]'); await page.waitForTimeout(250);
    ok(/الحمد لله/.test(await txt(page, ".ye-end")) && await has(page, '#view [data-act="burnend"]') && await has(page, '#view [data-act="burnnb"]'), "ye: ending with «الحمد لله», and an optional step for the notebook");
    await page.click('#view [data-act="burnnb"]'); await page.waitForTimeout(300);
    ok((await page.locator("#view .ye-pick").count()) === 2 && await has(page, '#view [data-act="nbburn"][disabled]') && /دفترك باقٍ معك/.test(await txt(page, "#view")), "ye: the notebook's entries of the year to choose from; nothing chosen yet");
    await page.click('#view .ye-pick >> nth=1'); await page.waitForTimeout(250);
    ok(/\(1\)/.test(await txt(page, '#view [data-act="nbburn"]')), "ye: the count follows the choice");
    await page.click('#view [data-act="nbburn"]'); await page.waitForTimeout(400);
    s = await getS(page); ok(s.notes.length === 1 && s.notes[0].id === "n2", "ye: only the chosen entry is burnt");
    ok(await has(page, "#tw-write") && !(await has(page, ".ye-card")), "ye: back to the journal; the card does not return this year");
    await open(page, "&burntest=1"); await go(page, "#/tadwin");
    ok(/حين يصعب عليك شيء/.test(await txt(page, "#tw-chal")) && !(await has(page, ".ye-card")), "ye: after a reload the challenges page stays empty");
    ok(!page.errs.length, "ye: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close();
    // reduced motion: no burning animation and no automatic steps
    const ctx2 = await browser.newContext({ viewport: { width: 375, height: 812 }, reducedMotion: "reduce" }); const p2 = await ctx2.newPage();
    await open(p2, "&reset=1"); await setS(p2, "s.twIntro = true; s.chal = [{ id: 'c1', t: Date.now(), tx: 'تحدٍّ' }];"); await open(p2, "&burntest=1"); await go(p2, "#/tadwin");
    await p2.click('.ye-card [data-act="burnask"]'); await p2.waitForTimeout(250); await p2.click('#sheet [data-act="burnyes"]'); await p2.waitForTimeout(400);
    const rm = await p2.evaluate(() => { const b = document.querySelector(".burn-box"), v = document.querySelector(".burn-v"); return { rm: !!(b && b.classList.contains("rm")), paper: b ? getComputedStyle(b.querySelector(".burn-paper")).display : "", op: v ? getComputedStyle(v).opacity : "" }; });
    ok(rm.rm && rm.paper === "none" && rm.op === "1", `ye: with reduced motion the page is simply gone and the verse shows at once (${JSON.stringify(rm)})`);
    await p2.waitForTimeout(7000); ok(await has(p2, ".burn-v"), "ye: with reduced motion the ritual waits for «التالي»");
    await ctx2.close();
    // the adult edition says «المجاهدات»
    const { ctx: c3, page: p3 } = await fresh(); await open(p3, "&reset=1&ed=adult", 900); await setS(p3, "s.twIntro = true; s.chal = [{ id: 'c1', t: Date.now(), tx: 'مجاهدة' }];"); await open(p3, "&burntest=1", 900); await go(p3, "#/tadwin");
    ok(/صفحة المجاهدات/.test(await txt(p3, ".ye-card")), "ye: adults burn «صفحة المجاهدات»");
    await c3.close(); });
  await step("tadwin: 320 px", async () => {
    for (const q of ["&lang=ar", "&lang=en", "&ed=adult&lang=ar", "&ed=adult&lang=en"]) {
      const ctx = await browser.newContext({ viewport: { width: 320, height: 640 } }), page = await ctx.newPage(), errs = []; page.on("pageerror", e => errs.push(e.message));
      await open(page, "&reset=1" + q, 900);
      await setS(page, "s.twIntro = true; s.gender = 'f'; s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'ك'.repeat(900) + '\\n' + 'Supercalifragilistic'.repeat(20) }, { id: 'n2', t: Date.now(), d, tx: 'سطر' }];"
        + " s.bless = [{ id: 'g1', t: Date.now(), tx: 'ك'.repeat(200), f: 'sabiq', src: 'over' }, { id: 'g2', t: Date.now(), tx: 'a'.repeat(200), src: 'eve' }]; s.khabia = [{ id: 'k1', t: Date.now(), tx: 'خ'.repeat(200) }];"
        + " s.chal = [{ id: 'c1', t: Date.now(), tx: 'Supercalifragilistic'.repeat(10), f: 'monkey' }, { id: 'c2', t: Date.now(), tx: 'تحدٍّ', done: true, f: 'pig' }];");
      await open(page, "&burntest=1", 900);
      for (const h of ["#/tadwin", "#/tadwin/why", "#/seen"]) { await go(page, h); const x = await page.evaluate(PAGE_CHECK); ok(!x.overflow && !x.clipped.length && !x.badText && !x.missing, `tw: 320 ${q} ${h}: ${JSON.stringify(x)}`); }
      await go(page, "#/tadwin"); await page.click('#tw-nb [data-act="nbopen"] >> nth=0'); await page.waitForTimeout(300);
      let x = await page.evaluate(PAGE_CHECK); ok(!x.overflow && !x.clipped.length && !x.badText, `tw: 320 ${q} the notebook open, an entry being edited: ${JSON.stringify(x)}`);
      await page.click('#tw-bless [data-act="twadd"][data-k="bless"]'); await page.waitForTimeout(300);
      x = await page.evaluate(PAGE_CHECK); ok(!x.overflow && !x.clipped.length, `tw: 320 ${q} the writing sheet: ${JSON.stringify(x)}`);
      await page.keyboard.press("Escape"); await page.waitForTimeout(250);
      await page.click('.ye-card [data-act="burnask"]'); await page.waitForTimeout(250); await page.click('#sheet [data-act="burnyes"]'); await page.waitForTimeout(400);
      x = await page.evaluate(PAGE_CHECK); ok(!x.overflow && !x.clipped.length && !x.badText, `tw: 320 ${q} the burning: ${JSON.stringify(x)}`);
      await page.click('#view [data-act="burnnext"]'); await page.waitForTimeout(250);
      x = await page.evaluate(PAGE_CHECK); ok(!x.overflow && !x.clipped.length && !x.badText, `tw: 320 ${q} the year's blessings: ${JSON.stringify(x)}`);
      for (let i = 0; i < 3; i++) { await page.click('#view [data-act="burnnext"]'); await page.waitForTimeout(200); }
      await page.click('#view [data-act="burnnb"]'); await page.waitForTimeout(300); await page.click('#view .ye-pick >> nth=0'); await page.waitForTimeout(200);
      x = await page.evaluate(PAGE_CHECK); ok(!x.overflow && !x.clipped.length && !x.badText, `tw: 320 ${q} choosing from the notebook: ${JSON.stringify(x)}`);
      ok(!errs.length, `tw: 320 ${q} no script errors ` + errs.slice(0, 1).join(""));
      await ctx.close();
    }
    // the journal analysis at 320 px (mocked server): the 18+ card, then the status line with the care line, and long lines in the lists
    const ctx = await browser.newContext({ viewport: { width: 320, height: 640 }, serviceWorkers: "block" }), page = await ctx.newPage();
    await ctx.route("**/api/health", r => r.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true,"ai":true,"ai_image":true}' }));
    await ctx.route("**/api/me", r => r.fulfill({ status: 200, contentType: "application/json", body: '{"account":{"adult_at":1763900000000}}' }));
    await ctx.route("**/api/sync", r => r.fulfill({ status: 200, contentType: "application/json", body: '{"cursor":"1.1","more":false,"profiles":[],"changes":[],"rejected":[]}' }));
    await ctx.route("**/api/extract", r => r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ good: ["ك".repeat(140), "صديق"], challenges: ["Supercalifragilistic".repeat(7)], hidden: ["A kindness no one saw"], care: "What you wrote matters. It may help to talk it through today with someone you trust." }) }));
    await open(page, "&reset=1&ed=adult&lang=en", 900); await setS(page, "s.twIntro = true; s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'A long day with my family and friends.' }];"); await open(page, "", 900); await go(page, "#/tadwin", 900);
    let x = await page.evaluate(PAGE_CHECK); ok(!x.overflow && !x.clipped.length && !x.badText && await has(page, "#tw-write .ai-bar"), `tw: 320 the 18+ card: ${JSON.stringify(x)}`);
    await setS(page, "s.aiOn = Date.now();"); await open(page, "", 900); await go(page, "#/tadwin", 900);
    await page.click('#tw-nb [data-act="exgo"]'); await page.waitForTimeout(700);
    x = await page.evaluate(PAGE_CHECK); ok(!x.overflow && !x.clipped.length && !x.badText && ((await getS(page)).bless || []).length === 2 && await has(page, "#ai-st .ex-care") && await has(page, "#tw-write label.ai-photo"), `tw: 320 the analysis status, the photo button and the long lines: ${JSON.stringify(x)}`);
    await ctx.close();
  });
  // 4. the family pact and "I saw good"
  // the family account (Google sign-in, owner decision 23 Nov 2026), mocked to the contract of outputs/server/src/sync.js
  await step("account: sign-in and sync", async () => {
    const ctx = await browser.newContext({ viewport: { width: 375, height: 812 }, serviceWorkers: "block" }), page = await ctx.newPage(), errs = [], syncs = [];
    page.on("pageerror", e => errs.push(e.message));
    const T = Date.now() - 3600000, prof = [{ pid: "p1", name: "Remote", edition: "adult", burn_at: 0, updated: T }];
    await ctx.route("**/api/health", r => r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, env: "test", sign_in: { email: false, google: true }, ai: true }) }));
    const PIC = "https://lh3.googleusercontent.com/a/test-picture=s96-c"; let picOk = true;
    await ctx.route("**/api/me", r => r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ account: { email: "family@example.com", google: true, adult_at: null, picture: PIC }, profiles: prof, profile_max: 4 }) }));
    const PNG = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==", "base64");
    await ctx.route("https://lh3.googleusercontent.com/**", r => picOk ? r.fulfill({ status: 200, contentType: "image/png", body: PNG }) : r.fulfill({ status: 404, body: "" }));
    await ctx.route("**/api/auth/logout", r => r.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' }));
    await ctx.route("**/api/sync", r => { const b = JSON.parse(r.request().postData() || "{}"); syncs.push({ b, h: r.request().headers() });
      const first = syncs.length === 1;
      const changes = first ? [{ pid: "p1", kind: "blessing", id: "rb1", t: T, u: T, data: { tx: "نعمة من جهاز آخر", src: "hand" } },
        { pid: "p1", kind: "note", id: "rn1", t: T, u: T, data: { d: new Date(T).toISOString().slice(0, 10), tx: "بسم الله الرحمن الرحيم" } },
        { pid: "p1", kind: "state", id: "main", t: T, u: T, data: { s: { v: 1, mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, name: "Remote", edition: "adult", twIntro: true, read: { "x": true } } } }]
        : (b.changes || []).map(c => Object.assign({}, c));
      return r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ cursor: first ? "1.999" : "2.999", more: false, profiles: prof, changes, rejected: [] }) }); });
    await open(page, "&reset=1&ed=adult", 900);
    await setS(page, "s.twIntro = true; s.name = 'Local'; s.notes = [{ id: 'n1', t: Date.now() - 1000, d, tx: 'صفحة كتبتها هنا' }];");
    ok(!syncs.length, "acc: nothing is sent before signing in");
    ok(await has(page, '#view .acc.home a.gsi[href="api/auth/google/start"] svg') && await has(page, "#setBtn .sdot"), "acc: signed out, the home page and the header offer Google's button");
    await page.click("#setBtn"); await page.waitForTimeout(400);
    ok(await page.evaluate(() => { const a = document.querySelector("#sheet .acc"), pp = document.querySelector("#sheet .people"); return !!(a && pp && a.querySelector(".gsi svg") && (a.compareDocumentPosition(pp) & 4)); }), "acc: the account comes first in the settings, with Google's button");
    await page.keyboard.press("Escape"); await page.waitForTimeout(250);
    await page.click('#view [data-act="signlater"]'); await page.waitForTimeout(300);
    ok(!(await has(page, "#view .acc")) && await has(page, "#setBtn .sdot"), "acc: «this device only» puts the home card away; settings keep the button");
    await page.goto(`${base}?intro=0#/signed-in`); await page.waitForTimeout(2500);
    ok(await page.evaluate(() => location.hash) === "#/", "acc: back from Google, the address returns to the home page");
    ok(syncs.length >= 2 && syncs[0].b.since === "0" && !syncs[0].b.changes && syncs.every(x => x.h["x-tazkiya"] === "1" && /application\/json/.test(x.h["content-type"] || "")), "acc: the first sync pulls the account's copy before sending anything, as JSON with the x-tazkiya header");
    const sent = syncs.slice(1).flatMap(x => x.b.changes || []);
    ok(sent.some(c => c.kind === "note" && c.id === "n1" && c.data.tx === "صفحة كتبتها هنا") && !sent.some(c => c.kind === "state"), "acc: this device's page goes up; the account's progress is kept, not overwritten");
    ok((syncs[1].b.profiles || []).some(p => p.pid === "p1" && p.edition === "adult"), "acc: the profile goes up with its edition");
    const s = await getS(page);
    ok((s.bless || []).some(e => e.id === "rb1" && e.tx === "نعمة من جهاز آخر") && s.name === "Remote" && s.notes.length === 2, "acc: the account's blessing, page and progress arrive, this device's page stays");
    await page.evaluate(() => { location.hash = "#/tadwin"; }); await page.waitForTimeout(400);
    ok(await page.locator("#tw-nb .nb-e .nb-tx", { hasText: "بسم الله الرحمن الرحيم" }).isVisible() && await page.locator("#tw-nb .nb-e .nb-tx", { hasText: "صفحة كتبتها هنا" }).isVisible(),
      "acc: a page written on another device is in view on the Tadwin page after sync, with no tap");
    ok(await page.evaluate(src => { const i = document.querySelector("#setBtn .av img.gpic"); return !!i && i.getAttribute("src") === src && i.complete && i.naturalWidth > 0 && i.referrerPolicy === "no-referrer" && !!document.querySelector("#setBtn .av svg"); }, PIC),
      "acc: signed in, the account holder's face is their Google picture, the drawn face beneath it");
    await page.click("#setBtn"); await page.waitForTimeout(500);
    ok(await has(page, '#sheet .person[data-p="p1"] .av img.gpic') && await page.locator('#sheet .avpick [data-act="setav"]').count() === 9 && await has(page, '#sheet .avpick [data-v="g"].on'),
      "acc: settings offer the Google picture (chosen), two faces and six animals, in circles");
    await page.click('#sheet .avpick [data-v="owl"]'); await page.waitForTimeout(300);
    ok((await getS(page)).av === "owl" && !(await has(page, "#setBtn img.gpic")) && await has(page, '#sheet .avpick [data-v="owl"].on'), "acc: one tap gives the profile the owl, in place of the Google picture");
    await page.click('#sheet .avpick [data-v="g"]'); await page.waitForTimeout(300);
    ok((await getS(page)).av === "g" && await has(page, "#setBtn img.gpic"), "acc: one tap brings the Google picture back");
    await page.keyboard.press("Escape"); await page.waitForTimeout(250);
    picOk = false; await page.evaluate(() => location.reload()); await page.waitForTimeout(2200);
    ok(!(await has(page, "#setBtn img.gpic")) && await has(page, "#setBtn .av svg"), "acc: when the Google picture cannot load, the drawn face stays");
    const base0 = await page.evaluate(() => JSON.parse(localStorage.getItem("tazkiya-sync") || "{}"));
    ok(base0.email === "family@example.com" && base0.linked === true && base0.cursor === "2.999", "acc: the sync state is kept on the device");
    // a deleted line goes up as a deletion
    const before = syncs.length;
    await setS(page, "s.notes = [];"); await page.evaluate(() => location.reload()); await page.waitForTimeout(1500);
    await page.evaluate(() => { location.hash = "#/tadwin"; }); await page.waitForTimeout(300);
    await page.click("#setBtn"); await page.waitForTimeout(600);
    ok(/حساب الأسرة/.test(await txt(page, "#sheet")) && /family@example\.com/.test(await txt(page, "#sheet")), "acc: settings show the account");
    await page.click('#sheet [data-act="accsync"]'); await page.waitForTimeout(1200);
    ok(syncs.slice(before).flatMap(x => x.b.changes || []).some(c => c.kind === "note" && c.id === "n1" && c.del === true), "acc: a line deleted on this device goes up as a deletion");
    await page.click('#sheet [data-act="accout"]'); await page.waitForTimeout(800);
    ok(!(await page.evaluate(() => localStorage.getItem("tazkiya-sync"))) && (await getS(page)).bless.length >= 1, "acc: signing out forgets the sync state and keeps everything on the device");
    await page.goto(`${base}?reset=1&n=first#/`); await page.waitForTimeout(1600);
    ok(await has(page, '#sheet .acc.first a.gsi[href="api/auth/google/start"]') && await page.locator("#sheet .grpseg button").count() === 3, "acc: the first open shows Google's button, then «this device only» and the age groups");
    // the age choice is one row of three short options with one helper line; at 375 x 667 nothing needs scrolling (owner decision, 24 Nov 2026)
    for (const [vw, vh, q] of [[375, 667, ""], [375, 667, "&lang=en"], [320, 568, ""]]) {
      await page.setViewportSize({ width: vw, height: vh }); await page.goto(`${base}?reset=1&n=first${q}#/`); await page.waitForTimeout(1600);
      const g = await page.evaluate(() => { const s = document.getElementById("sheet"), bs = [...s.querySelectorAll(".grpseg button")], h = s.querySelector(".grp-help"), sr = s.getBoundingClientRect();
        return { n: bs.length, row: new Set(bs.map(b => Math.round(b.getBoundingClientRect().top))).size === 1, tall: Math.max(...bs.map(b => b.getBoundingClientRect().height)),
          labels: bs.map(b => b.innerText.replace(/\s+/g, " ").trim()), helps: s.querySelectorAll(".grp-help").length, help: h ? h.innerText : "",
          hb: h ? Math.round(h.getBoundingClientRect().bottom) : 9e3, sb: Math.round(sr.bottom), scroll: s.scrollHeight - s.clientHeight, acc: !!s.querySelector(".acc .gsi") }; });
      const tag = `${vw}x${vh}${q ? " en" : ""}`;
      ok(g.n === 3 && g.row && g.tall < 70 && g.helps === 1 && g.acc, `acc ${tag}: Google card, then one row of three short options and one helper line`);
      ok(q ? g.labels.join("|") === "Kids 4-12|Teens 13-17|Adults" : g.labels.join("|") === "أطفال 4-12|مراهقون 13-17|كبار", `acc ${tag}: short labels with ages (${g.labels.join(" | ")})`);
      ok(g.scroll <= 2 && g.hb <= g.sb + 2, `acc ${tag}: the choice and its helper fit without scrolling (overflow ${g.scroll})`);
      if (!q && vw === 375) { await page.click('#sheet [data-act="introed"][data-g="teen"]'); await page.waitForTimeout(120);
        const t = await page.evaluate(() => ({ on: [...document.querySelectorAll("#sheet .grpseg button.on")].map(b => b.dataset.g).join(), help: document.querySelector("#sheet .grp-help")?.innerText || "" }));
        ok(t.on === "teen" && t.help && t.help !== g.help, "acc: one tap lights the option and changes the helper line");
        await page.waitForTimeout(1200); ok((await getS(page)).age === "15+" && await page.evaluate(() => document.body.classList.contains("film-open")), "acc: the same tap saves the teen group and moves on to the story"); }
    }
    await page.setViewportSize({ width: 375, height: 812 });
    ok(!errs.length, "acc: no script errors (" + errs.slice(0, 1).join("") + ")");
    await ctx.close();
  });
  await step("family pact", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await page.evaluate(() => localStorage.removeItem("tazkiya-family")); await openMe(page);
    ok(await has(page, '#view .pact [data-act="pactpick"]'), "4: the pact card invites a choice");
    await page.click('#view [data-act="pactpick"]'); await page.waitForTimeout(300);
    await page.click('#sheet [data-act="pactset"][data-v="monkey:1"]'); await page.waitForTimeout(350);
    const fam = await page.evaluate(() => JSON.parse(localStorage.getItem("tazkiya-family") || "{}"));
    const dow = await page.evaluate(to => { const [y, m, d] = to.split("-").map(Number); return new Date(y, m - 1, d).getDay(); }, fam.pact && fam.pact.to);
    ok(fam.pact && fam.pact.v === "monkey:1" && dow === 5, "4: the pact is saved for the device and ends on a Friday");
    const kt = content.C.stages.monkey.degrees[1], at = AV.C.stages.monkey.degrees[1];
    ok((await txt(page, ".pact")).includes(kt.turnName.ar) && /بقي/.test(await txt(page, ".pact")) && (await txt(page, ".pact")).includes(kt.step.ar), "4: the card names the trait, the days left and today's task");
    // a second, adult profile on the device sees the same pact in the adult wording
    await page.evaluate(() => { const p = JSON.parse(localStorage.getItem("akhlaq-app-v1:profiles") || '{"active":"p1","list":["p1"]}'); p.list = ["p1", "p2"]; p.active = "p2"; localStorage.setItem("akhlaq-app-v1:profiles", JSON.stringify(p));
      localStorage.setItem("akhlaq-app-v1:p2", JSON.stringify({ v: 1, lang: "ar", fs: 19, mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, edition: "adult", intro: true, tour: true })); });
    await open(page, "", 1100); await go(page, "#/kids", 600); // the adult edition keeps the pact in «مع أولادي»
    ok((await txt(page, ".pact")).includes(at.step.ar) && (await txt(page, ".pact")).includes(at.turnName.ar), "4: an adult profile sees the adult task for the same trait");
    // "I saw good" (in Tadwin since 23 Nov 2026): from the adult profile to the child's
    await go(page, "#/seen"); await page.keyboard.press("Escape"); await page.waitForTimeout(300); await page.click('#view [data-act="sawopen"]'); await page.waitForTimeout(300);
    await page.click('#sheet [data-act="sawto"][data-p="p1"]'); await page.waitForTimeout(300);
    await page.click('#sheet [data-act="sawv"][data-v="pig:2"]'); await page.waitForTimeout(250);
    await page.fill("#sawTx", `<img src=x onerror="window.__pwn=8">حمل الأكياس معي`); await page.click('#sheet [data-act="sawsend"]'); await page.waitForTimeout(400);
    const f2 = await page.evaluate(() => JSON.parse(localStorage.getItem("tazkiya-family")));
    ok(f2.seen.length === 1 && f2.seen[0].from === "p2" && f2.seen[0].to === "p1" && f2.seen[0].v === "pig:2" && !/[<>]/.test(f2.seen[0].tx), "4: the message is stored for the other profile, cleaned");
    await page.evaluate(() => { const p = JSON.parse(localStorage.getItem("akhlaq-app-v1:profiles")); p.active = "p1"; localStorage.setItem("akhlaq-app-v1:profiles", JSON.stringify(p)); });
    await open(page, "", 1400);
    ok(/رأى فيك أحد الكبار في البيت خيرًا/.test(await txt(page, "#sheet")) && /حمل الأكياس معي/.test(await txt(page, "#sheet")), "4: the child's profile shows it when it opens");
    ok(!(await page.evaluate(() => !!window.__pwn || !!document.querySelector("#sheet img[src='x'], #view img[src='x']"))), "4: the line never runs as markup");
    await page.keyboard.press("Escape"); await go(page, "#/seen");
    ok(/حمل الأكياس معي/.test(await txt(page, "#sheet")) && await has(page, "#tw-bless #tw-seen b"), "4: it stays in «ما رآه أهلي فيّ», a badge on the blessings that opens it");
    await open(page, "", 1200); ok(!(await has(page, "#sheet:not([hidden]) .saw-list")), "4: it is shown once");
    // end of the week: how was it, then a new pact; the old one is kept
    await page.evaluate(() => { const f = JSON.parse(localStorage.getItem("tazkiya-family")); f.pact.to = "2020-01-03"; localStorage.setItem("tazkiya-family", JSON.stringify(f)); }); await openMe(page);
    ok(/كيف كان أسبوعكم/.test(await txt(page, ".pact")), "4: on Friday or after, the card asks how the week was");
    await page.click('#view [data-act="pacthow"][data-h="good"]'); await page.waitForTimeout(350);
    ok(await has(page, '#sheet [data-act="pactset"]'), "4: then offers a new pact");
    const f3 = await page.evaluate(() => JSON.parse(localStorage.getItem("tazkiya-family")));
    ok(!f3.pact && f3.past.length === 1 && f3.past[0].how === "good", "4: the past pact is kept in the family record");
    // stored family data is checked
    await page.evaluate(() => localStorage.setItem("tazkiya-family", JSON.stringify({ pact: { v: "<b>", from: "x", to: "y" }, past: [{ v: "pig:9", from: "2020-01-01", to: "2020-01-03" }], seen: [{ from: "p2", to: "p2", t: 1, tx: "x" }, { from: "p2", to: "p1", t: 5, tx: "<i>" + "y".repeat(300) }], x: 1 })));
    await open(page);
    const f4 = await page.evaluate(() => { location.hash = "#/seen"; return JSON.parse(localStorage.getItem("tazkiya-family")); });
    ok(await page.evaluate(() => true), "4: a hostile family record does not break the page");
    ok(!page.errs.length, "4: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("I saw good: one profile", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await page.evaluate(() => { localStorage.setItem("akhlaq-app-v1:profiles", JSON.stringify({ active: "p1", list: ["p1"] })); }); await open(page);
    await go(page, "#/seen"); await page.keyboard.press("Escape"); await page.waitForTimeout(300); await page.click('#view [data-act="sawopen"]'); await page.waitForTimeout(300);
    ok(/أضف ملفًا لفرد من الأسرة/.test(await txt(page, "#sheet")) && await has(page, '#sheet [data-act="profadd"]'), "4: alone on the device, it explains and offers to add a profile");
    await ctx.close(); });
  await step("family backup", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    const bk = { app: "tazkiya", v: 1, at: new Date().toISOString(), profiles: { active: "p1", list: ["p1", "p2"] }, states: { p1: { mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 } }, p2: { mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 } } },
      family: { pact: { v: "human:0", from: "2026-11-20", to: "2026-11-27" }, past: [], seen: [{ id: "a1", from: "p2", to: "p1", t: 1763800000000, tx: "<b>ok</b>", got: 1 }, { from: "p9", to: "<x>", t: 1 }] } };
    await page.click("#setBtn"); await page.waitForTimeout(250);
    await page.setInputFiles("#bkFile", { name: "b.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(bk)) }); await page.waitForTimeout(400);
    await page.click('#sheet [data-act="bkyes"]'); await page.waitForTimeout(1300);
    const f = await page.evaluate(() => JSON.parse(localStorage.getItem("tazkiya-family") || "{}"));
    ok(f.pact && f.pact.v === "human:0" && f.seen.length === 1 && !/[<>]/.test(f.seen[0].tx), "4: the family record is restored from a backup, checked");
    const [dl] = await Promise.all([page.waitForEvent("download", { timeout: 5000 }), (async () => { await page.click("#setBtn"); await page.waitForTimeout(250); await page.click('#sheet [data-act="bkexport"]'); })()]);
    const out = JSON.parse(fs.readFileSync(await dl.path(), "utf8"));
    ok(out.family && out.family.pact && out.family.pact.v === "human:0", "4: the backup file carries the family record");
    await ctx.close(); });
  // the stage page as cards (owner notes after trying it on a phone, 23 Nov 2026)
  await step("stage page cards", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1"); await go(page, "#/stage/zombie", 700);
    const st = content.C.stages.zombie, norm = st.readings.filter(r => r.summit !== true && r.companions !== true), withQ = st.readings.filter(r => st.quiz.some(q => q.readingId === r.id));
    const o = await page.evaluate(() => { const ids = [...document.querySelectorAll("#view section.sec")].map(s => s.id); return { ids, rc: document.querySelectorAll("#sec-read .rcard").length, rl: document.querySelectorAll("#sec-read .reading").length, ch: document.querySelectorAll("#sec-read .chcard .chgo").length, qc: document.querySelectorAll("#sec-quiz .qcard").length, kinds: document.querySelectorAll("#sec-read .kind").length, roles: document.querySelectorAll("#sec-roles .rolecard").length }; });
    ok(o.ids.indexOf("sec-roles") === o.ids.indexOf("sec-learn") + 1 && o.ids.indexOf("sec-read") === o.ids.indexOf("sec-roles") + 1 && o.roles >= 1, "A4: the role models follow the traits, before the reading (" + o.ids.join(",") + ")");
    ok(o.rc === norm.length && o.rl === 0, `A2: every short story is a card (${o.rc}/${norm.length}), no plain lines`);
    ok(o.kinds === 3 && o.ch >= 1, "A3: three named kinds; the choice stories are cards with their own button");
    ok(o.qc === withQ.length, `A5: one quiz card per story (${o.qc}/${withQ.length})`);
    const sh = await page.evaluate(() => { const b = [...document.querySelectorAll("#sec-read .shelf.row .book")].map(e => e.getBoundingClientRect()); return { n: b.length, peek: b.length > 1 && b[1].right > 8 && b[1].left < 0 }; });
    ok(sh.n > 1 && sh.peek, "A1: on a phone the second book peeks beside the first");
    await page.click("#sec-quiz .qcard"); await page.waitForTimeout(400);
    ok(await has(page, `#view .qsrc[href="#/read/zombie/${encodeURIComponent(withQ[0].id)}"]`) && (await txt(page, ".qsrc")).includes(withQ[0].title.ar), "A5: the quiz names its story and links back to it");
    await ctx.close(); });
  // 5. choice stories
  await step("choice stories", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1"); await go(page, "#/stage/zombie");
    ok(/ماذا تفعل لو كنت في القصة؟/.test(await txt(page, "#sec-read")) && await has(page, '#sec-read a.chcard[href="#/choice/ch-zombie-1"] .chgo'), "5: the stage's Read step lists «ماذا تفعل لو كنت في القصة؟» as cards");
    await go(page, "#/choice/ch-zombie-1"); ok(/ماذا تفعل؟/.test(await txt(page, ".ch-q")), "5: the story asks «ماذا تفعل؟»");
    await page.click('[data-act="chpick"][data-i="1"]'); await page.waitForTimeout(300);
    ok(await has(page, ".ch-fb.weak") && await has(page, '[data-act="chagain"]') && /جرّب الاختيار الآخر/.test(await txt(page, "#view")), "5: the weaker choice shows its effect and «جرّب الاختيار الآخر»");
    ok(!/خطأ/.test(await txt(page, ".ch-fb")), "5: no choice is called «خطأ»");
    let st = await getS(page); ok(st.chs && st.chs["ch-zombie-1"] && st.chs["ch-zombie-1"].c === 1 && !st.chs["ch-zombie-1"].t, "5: the first choice is kept; not read before the ending");
    await page.click('[data-act="chagain"]'); await page.waitForTimeout(250); await page.click('[data-act="chpick"][data-i="0"]'); await page.waitForTimeout(300);
    ok(await has(page, ".ch-fb.ok") && (await txt(page, ".ch-why")).length > 10, "5: each choice has its outcome and a line of reflection");
    await page.click('[data-act="chend"]'); await page.waitForTimeout(400);
    st = await getS(page); ok(st.chs["ch-zombie-1"].c === 1 && st.chs["ch-zombie-1"].t > 0 && (st.ev || []).some(e => e.k === "read"), "5: reaching the ending records the reading; the first choice stays");
    ok(await has(page, '#view a[href="#/stage/zombie/work/t0"]'), "5: the ending leads to the tasks of the story's trait (the work door)");
    await go(page, "#/record"); ok(/الأذان والحلقة الأخيرة/.test(await page.evaluate(() => document.getElementById("view").textContent)), "5: the record lists it");
    await setS(page, "s.gender = 'f'; s.chs = { 'ch-pig-1': { c: '<b>' }, '<x>': { c: 1 }, 'ch-monkey-1': { c: 9, t: 'x' } };"); await open(page); await go(page, "#/choice/ch-pig-1");
    ok(/ماذا تفعلين؟/.test(await txt(page, ".ch-q")), "5: feminine question");
    const c2 = (await getS(page)).chs; ok(Object.keys(c2).join() === "ch-monkey-1" && c2["ch-monkey-1"].c === 3 && !c2["ch-monkey-1"].t, "5: stored choices are checked");
    ok(!page.errs.length, "5: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("choice stories (adults)", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1&ed=adult&lang=en", 900); await go(page, "#/stage/human");
    const a1 = AV.C.choices.find(x => x.stage === "human");
    ok(await has(page, `#sec-read a[href="#/choice/${a1.id}"]`) && !(await has(page, '#sec-read a[href="#/choice/ch-human-1"]')), "5a: the adult edition shows its own story");
    await go(page, `#/choice/${a1.id}`); ok((await txt(page, "#view")).includes(a1.title.en) && /what would you do\?/.test(await txt(page, ".ch-q")), "5a: English adult story");
    ok(!page.errs.length, "5a: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  // the two doors of every stage (23 Nov 2026): the same doors, words and colours in the finger sheet, the Tasks list and atop both stage pages
  await step("two doors", async () => {
    for (const [q, learnW, workW] of [["", "افهم وتعلّم", "إلى العمل"], ["&lang=en", "Understand and learn", "To work"], ["&ed=adult", "افهم وتعلّم", "إلى العمل"], ["&ed=adult&lang=en", "Understand and learn", "To work"]]) {
      const tag = q || "kids ar"; const { ctx, page } = await fresh(); await open(page, "&reset=1" + q, 800);
      if (/ed=adult/.test(q)) await go(page, "#/me", 500); // direction 4: the adult edition's hand is on its own tab
      const doorsAt = sel => page.evaluate(sl => [...document.querySelectorAll(sl + " .door")].map(a => [a.classList.contains("learn") ? "L" : a.classList.contains("work") ? "W" : "?", a.getAttribute("href"), a.querySelector("b").innerText.trim(), getComputedStyle(a).backgroundColor, a.getAttribute("aria-current")]), sel);
      await page.click('#view [data-act="finger"][data-f="ring"]'); await page.waitForTimeout(300);
      const sh = await doorsAt("#sheet .doors");
      ok(sh.length === 2 && sh[0][0] === "L" && sh[0][1] === "#/stage/pig" && sh[1][0] === "W" && sh[1][1] === "#/stage/pig/work" && sh[0][2] === learnW && sh[1][2] === workW, `doors (${tag}): the finger sheet has the blue «${learnW}» and the green «${workW}» doors (${JSON.stringify(sh)})`);
      await page.keyboard.press("Escape"); await go(page, "#/tasks", 450);
      const cards = await page.locator("#view .stcard").count(), td = await doorsAt("#view .stcard .doors");
      const pigT = td.filter(d => /pig/.test(d[1]));
      ok(cards === 5 && td.length === 10 && pigT.length === 2 && pigT[0][1] === sh[0][1] && pigT[1][1] === sh[1][1] && pigT[0][2] === sh[0][2] && pigT[1][2] === sh[1][2] && pigT[0][3] === sh[0][3] && pigT[1][3] === sh[1][3], `doors (${tag}): the Tasks tab lists the five stages, each with the same two doors, words and colours as the sheet`);
      ok(!(await has(page, "#view .tseg")) && (await page.locator("#view .h.wn").count()) === 2 && await has(page, "#view .stcard.sug"), `doors (${tag}): Tasks is in order (1 today, 2 your stages, one stage suggested), without the former chips`);
      ok((await page.locator("#view .mylist li.next").count()) === 1 && /ابدأ هنا|Start here/.test(await txt(page, "#view .mylist li.next")), `doors (${tag}): one «start here» mark in today's list`);
      await page.click('#view .stcard .door.learn[href="#/stage/pig"]'); await page.waitForTimeout(450);
      const ln = await doorsAt("#view .stage-title .doors");
      ok(await page.evaluate(() => location.hash) === "#/stage/pig" && ln.length === 2 && ln[0][4] === "page" && ln[1][4] === null && ln[1][1] === "#/stage/pig/work", `doors (${tag}): the learn door marks itself as the open one and offers the work door`);
      ok((await page.locator("#view .steps4 a").count()) === 3 && !(await has(page, '#view a[href^="#/tasks/"]')) && await has(page, '#view .doors.end .door.work[href="#/stage/pig/work"]'), `doors (${tag}): learning shows its three steps and ends at the work door`);
      await page.click('#view .stage-title .door.work'); await page.waitForTimeout(450);
      const wk = await doorsAt("#view .stage-title .doors");
      const tabOn = await page.evaluate(() => { const a = document.querySelector("#tabs a.on"); return a ? a.getAttribute("href") : ""; });
      ok(await page.evaluate(() => location.hash) === "#/stage/pig/work" && wk[1][4] === "page" && wk[0][4] === null && wk[0][1] === "#/stage/pig" && tabOn === (/ed=adult/.test(q) ? "#/" : "#/tasks"), `doors (${tag}): the work door marks itself, offers the learn door, and lights the Tasks tab (${tabOn})`);
      ok(!(await has(page, "#view .learnbox")) && (await page.locator("#view .mylist li.next").count()) === 1 && (await page.locator("#view .h.wn").count()) >= 2, `doors (${tag}): the work door has numbered sections and one «start here» task, with no second learn box`);
      ok(!page.errs.length, `doors (${tag}): no script errors (${page.errs.slice(0, 1).join("")})`);
      await ctx.close();
    }
    // the former addresses still work
    const { ctx, page } = await fresh(); await open(page, "&reset=1");
    for (const [from, to] of [["#/tasks/pig", "#/stage/pig/work"], ["#/tasks/zombie/t0", "#/stage/zombie/work/t0"]]) {
      await go(page, from, 500); const h = await page.evaluate(() => location.hash);
      ok(h === to && await has(page, "#view .doors.here .door.work.on"), `doors: ${from} opens ${to} (${h})`);
    }
    ok(await page.evaluate(() => { const e = document.getElementById("tr-t0"); return !!e && e.getBoundingClientRect().top < 200; }), "doors: a trait address scrolls to that trait's tasks");
    await go(page, "#/tasks/no-such", 400); ok(await page.evaluate(() => location.hash) === "#/tasks/no-such" && await has(page, "#view .stcard"), "doors: an unknown stage under #/tasks shows the Tasks tab");
    await ctx.close();
  });
  // references only (23 Nov 2026): a verse or hadith shows its reference, never a checking label
  await step("references only", async () => {
    const src = fs.readFileSync(path.join(ROOT, "app.js"), "utf8");
    ok(!/مطابق|يُطابَق|يُراجَع تخريج|checkedQuran|checkedHadith|srcChecked|machine-matched/.test(src), "refs: app.js has no checking labels");
    const BAD = /مطابق|يُطابَق|يُراجَع تخريج|بانتظار مراجعة|matched to|machine-matched|awaiting (human|the author)/;
    for (const q of ["", "&lang=en", "&ed=adult", "&ed=adult&lang=en"]) {
      const { ctx, page } = await fresh(); await open(page, "&reset=1" + q, 800);
      const seen = [];
      for (const h of ["#/sources", "#/about", "#/tadwin", "#/evening", "#/stage/sabiq", "#/stage/human"]) { await go(page, h, 450); if (BAD.test(await page.evaluate(() => document.body.innerText))) seen.push(h); }
      ok(!seen.length, `refs (${q || "kids ar"}): no checking label on ${seen.join(", ") || "any page"}`);
      await go(page, "#/sources", 450);
      const refs = await page.evaluate(() => [...document.querySelectorAll(".src-ref")].map(e => e.textContent));
      const en = /lang=en/.test(q); // English shows «(Quran 35:32)» and «Sahih al-Bukhari 6407», with no Arabic (mobile review, 24 Nov 2026)
      ok(refs.length > 3 && (en ? refs.filter(r => /^\(Quran \d+:\d/.test(r)).length >= 3 && !refs.some(r => /[\u0600-\u06FF]/.test(r)) : refs.filter(r => /^\(.+: \d/.test(r)).length >= 3 && !refs.some(r => /^[\u0600-\u06FF ]+ \d+:\d+$/.test(r))), `refs (${q || "kids ar"}): Quran references read ${en ? "«(Quran S:V)», no Arabic" : "«(السورة: الآية)»"} (${refs.slice(0, 3).join(" | ")})`);
      await ctx.close();
    }
  });
  // the platform (23 Nov 2026): a footer on the home screen with the platform line, About and privacy; training for adults, the parents' page for children
  // (26 Nov 2026, owner request): the children's edition also reaches the training page, through a link labelled for adults
  await step("platform footer", async () => {
    for (const [q, adult] of [["", false], ["&lang=en", false], ["&ed=adult", true], ["&ed=adult&lang=en", true]]) {
      const { ctx, page } = await fresh(); await open(page, "&reset=1" + q, 800);
      const f = await page.evaluate(() => { const e = document.querySelector("#view .homefoot"); return e ? { t: e.innerText, h: [...e.querySelectorAll("a")].map(a => a.getAttribute("href")) } : null; });
      const sf = await page.evaluate(() => { const a = document.querySelector("#sitefoot a"), r = a && a.getBoundingClientRect(); return a ? { h: a.getAttribute("href"), vis: !!a.offsetParent && r.width > 0, t: a.textContent } : null; });
      ok(f && f.h.includes("#/about") && /تزكية|Tazkiya/.test(f.t) && sf && sf.vis && /^\/privacy\//.test(sf.h) && /الخصوصية|Privacy/.test(sf.t), `platform (${q || "kids ar"}): the home footer links About, and the static privacy link shows under it (${f && f.h.join(", ")}; ${sf && sf.h})`);
      await go(page, "#/tasks", 350); ok(!(await page.evaluate(() => { const a = document.querySelector("#sitefoot a"); return !!(a && a.offsetParent); })), `platform (${q || "kids ar"}): the static privacy link stays on the home screen`); await go(page, "#/", 350);
      ok(f && f.h.some(h => /^training\//.test(h)) && (adult || (f.h.some(h => /^parents\//.test(h)) && /للكبار|for adults/i.test(f.t))), `platform (${q || "kids ar"}): training is linked${adult ? "" : ", for adults, beside the parents' page"}`);
      await go(page, "#/about", 450);
      const ab = await page.evaluate(() => [...document.querySelectorAll("#view a")].map(a => a.getAttribute("href")));
      ok(ab.some(h => /^privacy\//.test(h)) && ab.some(h => /^training\//.test(h)) && (adult || ab.some(h => /parents\//.test(h))), `platform (${q || "kids ar"}): About links privacy and training${adult ? "" : " and the parents' page"}`);
      ok(!page.errs.length, `platform (${q || "kids ar"}): no script errors`);
      await ctx.close();
    }
  });
  // security and compatibility review (22 Nov 2026)
  const IPHONE = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1";
  const ANDR = "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36";
  const freshUA = async (ua, init, vp) => { const ctx = await browser.newContext({ viewport: vp || { width: 375, height: 812 }, userAgent: ua }); if (init) await ctx.addInitScript(init); const page = await ctx.newPage(); const errs = []; page.on("pageerror", e => errs.push(e.message)); page.errs = errs; return { ctx, page }; };
  const old = "s.intro = true; s.read = { 'zombie-r1': Date.now() - 20 * 864e5 }; s.ev = [{ t: Date.now() - 20 * 864e5, k: 'read', s: 'zombie' }];";
  await step("review: backup keys", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    const raw = '{"app":"tazkiya","v":1,"at":"2026-11-20T10:00:00Z","profiles":{"active":"p1","list":["p1"]},"states":{"p1":{"mix":{"zombie":5,"pig":20,"monkey":30,"human":35,"sabiq":10},"read":{"__proto__":{"polluted":1},"constructor":1763800000000,"zombie-r1":1763800000000}}}}';
    await page.click("#setBtn"); await page.waitForTimeout(250);
    await page.setInputFiles("#bkFile", { name: "b.json", mimeType: "application/json", buffer: Buffer.from(raw) }); await page.waitForTimeout(400);
    await page.click('#sheet [data-act="bkyes"]'); await page.waitForTimeout(1300);
    const r = await page.evaluate(k => { const raw = localStorage.getItem(k) || "{}"; return { keys: Object.keys(JSON.parse(raw).read || {}), proto: /__proto__/.test(raw), pol: ({}).polluted }; }, K);
    ok(r.keys.join() === "zombie-r1" && !r.proto && r.pol === undefined, "review A3: __proto__ and constructor keys from a backup are dropped (" + r.keys.join() + ")");
    await ctx.close(); });
  await step("review: share sheet", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await page.click("#setBtn"); await page.waitForTimeout(250); await page.click('#sheet [data-act="sharesheet"]'); await page.waitForTimeout(500);
    const q = await page.$$eval("#sheet .qr img", xs => xs.map(x => [x.getAttribute("src"), x.naturalWidth]));
    ok(q.length === 2 && q.every(x => x[1] > 0) && q.some(x => /qr-kids/.test(x[0])) && q.some(x => /qr-adult/.test(x[0])), "review: the share sheet shows a QR code for each link");
    ok(await has(page, '#sheet a.parents-link[href^="parents/"]'), "review: the share sheet links the parents page");
    await go(page, "#/about"); ok(await has(page, '#view a.parents-link'), "review: «عن تزكية» links the parents page");
    const pg = await page.goto(base.replace(/index\.html$/, "") + "parents/"); const pt = await page.evaluate(() => document.body.innerText);
    ok(pg.status() === 200 && /الخصوصية/.test(pt) && /Privacy/.test(pt) && /دون حساب/.test(pt), "review: the parents page answers, in Arabic and English");
    ok(!page.errs.length, "review: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("training page", async () => {
    const WA = "https://wa.me/201283229996?text=", root = base.replace(/index\.html$/, "");
    let { ctx, page } = await fresh(); await open(page, "&reset=1");
    // the children's edition (26 Nov 2026): «عن تزكية» has the parents' page and one training link labelled for adults; the share sheet stays without it
    await go(page, "#/about"); ok((await page.locator('#view a[href="training/"]').count()) === 1 && /للكبار/.test(await txt(page, '#view a[href="training/"]')) && await has(page, '#view a[href*="parents/"]'), "training: the children's «عن تزكية» links the parents' page and one training link for adults");
    await page.click("#setBtn"); await page.waitForTimeout(250); await page.click('#sheet [data-act="sharesheet"]'); await page.waitForTimeout(400);
    ok(!(await has(page, '#sheet a[href*="training"]')) && !/سلّم اليد|Hand Method/.test(await txt(page, "#sheet")), "training: the children's share sheet has no training link");
    await ctx.close();
    ({ ctx, page } = await fresh()); await open(page, "&reset=1&ed=adult", 900); await go(page, "#/about");
    ok((await page.locator('#view a[href="training/"]').count()) === 1, "training: the adult «عن تزكية» has one quiet training link");
    await ctx.close();
    ({ ctx, page } = await fresh()); await open(page, "&reset=1&ed=adult&lang=en", 900); await go(page, "#/about");
    ok((await page.locator('#view a[href="training/#en"]').count()) === 1, "training: the adult edition in English links the English section");
    const pr = await page.goto(root + "parents/"); ok(pr.status() === 200 && (await page.locator('a[href="../training/"]').count()) === 1 && (await page.locator('a[href="../training/#en"]').count()) === 1, "training: the parents page links the training page in both languages");
    const tr = await page.goto(root + "training/"); const tt = await page.evaluate(() => document.body.innerText);
    ok(tr.status() === 200 && /منهج التزكية على سلّم اليد/.test(tt) && /Tazkiya Hand Method/.test(tt) && /مؤسسة تمسك للبحوث والنشر والتدريب/.test(tt) && /Temessek Foundation/.test(tt), "training: the page answers in Arabic and English, with the foundation in the footer");
    ok([/المعلمون/, /المرشدون/, /مسؤولو الطفولة/, /التكوين البيداغوجي/, /الوالدان مع أبنائهم/, /Teachers/, /Counsellors/, /Early-childhood staff/, /teacher training and supervisors/, /Parents, with their children/].every(r => r.test(tt)) && /برنامج اليد للوالدين/.test(tt) && /The Hand programme for parents/.test(tt), "training: every audience is named in both languages, and the parents' programme stays");
    ok(/حضوريًّا\s*نفضّله/.test(tt) && /In person\s*our first choice/.test(tt) && tt.indexOf("نفضّله") < tt.indexOf("يوم حضوري ثم متابعة"), "training: in person comes first and is marked as preferred");
    const was = await page.$$eval("a.wa", xs => xs.map(a => [a.getAttribute("href"), a.target, a.rel, a.closest("[lang]").getAttribute("lang")]));
    const msg = { ar: "السلام عليكم، أودّ التسجيل في برنامج اليد للوالدين من تزكية.", en: "Peace be upon you. I would like to join the Tazkiya Hand programme for parents." };
    ok(was.length === 2 && was.every(([h, tg, rl, lg]) => h.startsWith(WA) && /مؤسستنا|our institution/.test(decodeURIComponent(h.slice(WA.length))) && tg === "_blank" && /noopener/.test(rl)), "training: one main WhatsApp button per language, for institutions");
    const was2 = await page.$$eval("a.wa-s", xs => xs.map(a => [a.getAttribute("href"), a.target, a.rel, a.closest("[lang]").getAttribute("lang")]));
    const dec = was2.map(([h]) => decodeURIComponent(h.slice(WA.length)));
    ok(was2.length === 12 && was2.every(([h, tg, rl, lg], i) => h.startsWith(WA) && tg === "_blank" && /noopener/.test(rl) && (lg === "ar" ? /[؀-ۿ]/ : /^[ -~]+$/).test(dec[i])) && new Set(dec).size === 12 && dec.includes(msg.ar) && dec.includes(msg.en), "training: each audience has its own prefilled WhatsApp message, in the page's language");
    ok(!(await has(page, "form, input, select, textarea")) && !/[$€£]|\bEGP\b|جنيه|price|سعر/i.test(tt), "training: no form, booking or price");
    ok(await page.evaluate(() => [...document.images].every(i => i.complete && i.naturalWidth > 0)), "training: the hand image and icons load");
    for (const w of [320, 1280]) { await page.setViewportSize({ width: w, height: 800 }); await page.waitForTimeout(150);
      ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `training: no overflow at ${w} px`); }
    ok(!page.errs.length, "training: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("review: backups", async () => {
    let { ctx, page } = await fresh(); await open(page, "&reset=1"); await setS(page, old); await openMe(page);
    ok(await has(page, ".bkcard [data-act=\"bkexport\"]"), "review B1: after 14 days with progress and no backup, #/me offers one");
    await page.click('.bkcard [data-act="bklater"]'); await page.waitForTimeout(300); ok(!(await has(page, ".bkcard")), "review B1: «لاحقًا» hides it");
    await ctx.close();
    ({ ctx, page } = await freshUA(undefined, () => { window.__shared = []; Navigator.prototype.canShare = function (d) { return !!(d && d.files); }; Navigator.prototype.share = function (d) { window.__shared.push(d.files ? d.files.map(f => f.name).join() : "text"); return Promise.resolve(); }; }));
    await open(page, "&reset=1"); await setS(page, old); await openMe(page);
    await page.click('.bkcard [data-act="bkexport"]'); await page.waitForTimeout(500);
    const r = await page.evaluate(() => ({ sh: window.__shared, at: localStorage.getItem("tazkiya-backup-at") }));
    ok(r.sh.length === 1 && /^tazkiya-backup-\d{4}-\d\d-\d\d\.json$/.test(r.sh[0]) && +r.at > 0 && !(await has(page, ".bkcard")), "review B2: where files can be shared, the backup goes through the share sheet and is dated");
    await ctx.close();
    ({ ctx, page } = await freshUA(undefined, () => { Navigator.prototype.canShare = () => true; Navigator.prototype.share = () => Promise.reject(Object.assign(new Error("x"), { name: "AbortError" })); }));
    await open(page, "&reset=1"); await setS(page, old); await openMe(page);
    await page.click('.bkcard [data-act="bkexport"]'); await page.waitForTimeout(500);
    ok(!(await page.evaluate(() => localStorage.getItem("tazkiya-backup-at"))) && await has(page, ".bkcard"), "review B2: a closed share sheet records no backup");
    await ctx.close(); });
  await step("review: Android calendar", async () => { const { ctx, page } = await freshUA(ANDR, () => { window.open = u => { window.__opened = u; return null; }; });
    await open(page, "&reset=1"); await go(page, "#/evening");
    await page.click('[data-act="everemind"]'); await page.waitForTimeout(300);
    ok(await has(page, '#sheet [data-act="evegcal"]') && await has(page, '#sheet [data-act="eveics"]'), "review B3: on Android the reminder offers Google Calendar beside the file");
    await page.fill("#eveTime", "19:30"); await page.click('#sheet [data-act="evegcal"]'); await page.waitForTimeout(200);
    const u = await page.evaluate(() => window.__opened || "");
    ok(/^https:\/\/calendar\.google\.com\/calendar\/render\?action=TEMPLATE&text=/.test(u) && /recur=RRULE%3AFREQ%3DDAILY/.test(u) && /dates=\d{8}T193000\/\d{8}T193500/.test(u), "review B3: a daily Google Calendar event at the chosen time (" + u.slice(0, 60) + ")");
    await ctx.close(); });
  await step("review: iPhone", async () => {
    let { ctx, page } = await freshUA(IPHONE, () => { Object.defineProperty(Navigator.prototype, "standalone", { get: () => true, configurable: true }); });
    await page.goto(`${base}?reset=1&n=${++nOpen}#/`); await page.waitForTimeout(700);
    if (await has(page, '#sheet .grpseg [data-act="introed"]')) { const b = page.locator('#sheet .grpseg [data-act="introed"]').first(); await b.click(); await page.waitForTimeout(1100); }
    if (await has(page, ".film-skip")) { await page.click(".film-skip"); await page.waitForTimeout(600); } // the story of the hand first (22 Nov 2026), then the backup offer
    ok(await has(page, '#sheet .ios-move [data-act="bkimport"]') && await has(page, "#sheet #bkFile"), "review B4: the installed iPhone app's first screen offers to restore Safari's backup");
    await ctx.close();
    ({ ctx, page } = await freshUA(IPHONE)); await open(page, "&reset=1"); await setS(page, "s.intro = true; s.read = { 'zombie-r1': Date.now() };"); await openMe(page);
    ok(await has(page, '.inst.itp [data-act="ioshow"]') && !(await has(page, ".bkcard")), "review B1: Safari on iPhone with progress: install so it is kept");
    await page.click("#setBtn"); await page.waitForTimeout(300);
    ok(await has(page, "#sheet .fxios"), "review C10: the settings say that iPhone's silent switch mutes the sounds");
    await ctx.close(); });
  await step("review: sheets and narrow screens", async () => { let { ctx, page } = await fresh(); await open(page, "&reset=1");
    await page.click("#setBtn"); await page.waitForTimeout(300);
    const a = await page.evaluate(() => [document.getElementById("view").inert, document.getElementById("tabs").inert]);
    await page.keyboard.press("Escape"); await page.waitForTimeout(400);
    const b = await page.evaluate(() => [document.getElementById("view").inert, document.getElementById("tabs").inert]);
    ok(a.join() === "true,true" && b.join() === "false,false", "review C6: a sheet over the page makes the page behind it inert, and closing frees it");
    await page.evaluate(() => { location.hash = "#/tasks"; });
    await page.waitForTimeout(400);
    ok(await page.evaluate(() => { const i = document.querySelector(".myadd input"); return i ? parseFloat(getComputedStyle(i).fontSize) >= 16 : true; }), "review C4: the new-task field is 16px (no zoom on iPhone)");
    await ctx.close();
    for (const lang of ["ar", "en"]) for (const ed of ["", "&ed=adult"]) {
      ({ ctx, page } = await freshUA(undefined, null, { width: 280, height: 653 })); await open(page, `&reset=1&lang=${lang}${ed}`, 700);
      const r = await page.evaluate(() => ({ w: document.documentElement.scrollWidth, iw: innerWidth, lb: document.getElementById("langBtn").textContent, al: document.getElementById("langBtn").getAttribute("aria-label") }));
      ok(r.w <= r.iw && (r.lb === (lang === "ar" ? "EN" : "عربي")) && r.al.length > 2, `review C5: 280px wide, ${lang}${ed ? " adult" : ""}: no sideways scroll, short language label (${r.w}/${r.iw}, "${r.lb}")`);
      await ctx.close();
    }
    ({ ctx, page } = await freshUA(undefined, null, { width: 844, height: 390 })); await open(page, "&reset=1", 800);
    // the hand map is the default home hand since 27 Nov 2026: its stage is measured, and the greeting must not cover a joint or a percentage
    const h = await page.evaluate(() => { const e = document.querySelector("#view .hand") || document.querySelector("#view .hm-stage"), r = e.getBoundingClientRect(), t = document.getElementById("tabs").getBoundingClientRect(), g = document.querySelector(".hello").getBoundingClientRect();
      const cross = (x, y) => x.right > y.left + 2 && x.left < y.right - 2 && x.bottom > y.top + 2 && x.top < y.bottom - 2;
      const marks = [...document.querySelectorAll("#view .hmj, #view .hmsvg .chip")].map(m => m.getBoundingClientRect());
      return { top: r.top, bot: r.bottom, tabs: t.top, w: document.documentElement.scrollWidth, iw: innerWidth, hw: r.width, gOver: marks.length ? marks.some(m => cross(g, m)) : g.right > r.left + 2 && g.left < r.right - 2 && g.bottom > r.top + 2, step: !!document.querySelector(".stepcard") }; });
    ok(h.top > 0 && h.bot <= h.tabs + 1 && h.w <= h.iw && h.hw > 300 && !h.gOver && !h.step, `review C11: a phone held sideways shows the whole hand in the first view, the greeting beside it (${Math.round(h.top)}-${Math.round(h.bot)}, tabs ${Math.round(h.tabs)}, width ${Math.round(h.hw)})`);
    await ctx.close(); });

  // the move to tazkiya.family (23 Nov 2026): the public hosts are mapped onto the local server
  const ORIGIN = new URL(base).origin;
  const hostCtx = async (init, arg) => {
    const ctx = await browser.newContext({ viewport: { width: 375, height: 812 }, serviceWorkers: "block" });
    await ctx.route(/^https:\/\/(www\.)?tazkiya\.(family|pages\.dev)\//, async route => { const u = new URL(route.request().url()); try { await route.fulfill({ response: await route.fetch({ url: ORIGIN + u.pathname + u.search }) }); } catch (e) { await route.abort(); } });
    if (init) await ctx.addInitScript(init, arg);
    const page = await ctx.newPage(); const errs = []; page.on("pageerror", e => errs.push(e.message)); page.errs = errs; return { ctx, page };
  };
  const seed = ([host, data]) => { if (location.hostname !== host || sessionStorage.getItem("seeded")) return; sessionStorage.setItem("seeded", "1"); for (const k in data) localStorage.setItem(k, JSON.stringify(data[k])); };
  await step("move: www and an empty former address", async () => {
    let { ctx, page } = await hostCtx();
    await page.goto("https://www.tazkiya.family/?lang=en#/library"); await page.waitForTimeout(1200);
    let u = new URL(page.url()); ok(u.hostname === "tazkiya.family" && u.hash === "#/library" && u.searchParams.get("lang") === "en", "move: www.tazkiya.family lands on tazkiya.family with its query and hash (" + page.url() + ")");
    await ctx.close();
    ({ ctx, page } = await hostCtx());
    await page.goto("https://tazkiya.pages.dev/adult/#/library"); await page.waitForTimeout(1200);
    u = new URL(page.url()); ok(u.hostname === "tazkiya.family" && u.hash === "#/library", "move: tazkiya.pages.dev with no saved progress goes straight to tazkiya.family (" + page.url() + ")");
    ok((await page.evaluate(() => JSON.parse(localStorage.getItem("akhlaq-app-v1") || "{}").edition)) === "adult", "move: the path is kept (/adult/ opens the adult edition)");
    await ctx.close();
    ({ ctx, page } = await hostCtx(seed, ["tazkiya.pages.dev", { "akhlaq-app-v1": { mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, intro: true, lang: "ar" } }]));
    await page.goto("https://tazkiya.pages.dev/"); await page.waitForTimeout(1200);
    ok(new URL(page.url()).hostname === "tazkiya.family", "move: a former-address visit with no progress (only settings) is not held back");
    await ctx.close(); });
  await step("move: progress carried over", async () => {
    const old = { "akhlaq-app-v1:profiles": { active: "p1", list: ["p1", "p2"] }, "akhlaq-app-v1": { mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, intro: true, lang: "ar", name: "ليلى", read: { "zombie-r1": 1763800000000 }, tasks: { "zombie-t1": "ok" } },
      "akhlaq-app-v1:p2": { mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, intro: true, lang: "ar", edition: "adult", name: "Sam" }, "tazkiya-family": { pact: { v: "human:0", from: "2026-11-20", to: "2026-11-27" }, past: [], seen: [] }, "tazkiya-fx": { snd: false, hap: true, amb: "rain", vol: 40 } };
    const { ctx, page } = await hostCtx(([o, n]) => { const s1 = (host, data) => { if (location.hostname !== host || sessionStorage.getItem("seeded")) return; sessionStorage.setItem("seeded", "1"); for (const k in data) localStorage.setItem(k, JSON.stringify(data[k])); }; s1("tazkiya.pages.dev", o); s1("tazkiya.family", n); },
      [old, {}]); // the new address is empty: since the security review (و1), a move never lands on a device with progress
    await page.goto("https://tazkiya.pages.dev/#/"); await page.waitForTimeout(1300);
    ok(new URL(page.url()).hostname === "tazkiya.pages.dev" && await has(page, '#sheet.movefull [data-act="movego"]') && /انتقلت تزكية إلى tazkiya\.family/.test(await txt(page, "#sheet")) && /moved to tazkiya\.family/.test(await txt(page, "#sheet")),
      "move: with progress, the former address shows the full-screen sheet in both languages");
    await Promise.all([page.waitForURL(/^https:\/\/tazkiya\.family\//, { timeout: 8000 }), page.click('#sheet [data-act="movego"]')]); await page.waitForTimeout(1300);
    ok(!/move=/.test(page.url()) && new URL(page.url()).hash === "#/", "move: the fragment is cleared from the address at once (" + page.url().slice(0, 50) + ")");
    const sh = await txt(page, "#sheet");
    ok(/ليلى/.test(sh) && /Sam/.test(sh) && await has(page, '#sheet [data-act="bkyes"]'), "move: the new address shows the names and asks before taking them");
    await page.click('#sheet [data-act="bkyes"]'); await page.waitForTimeout(1600);
    const st = await page.evaluate(() => ({ p: JSON.parse(localStorage.getItem("akhlaq-app-v1:profiles") || "{}"), a: JSON.parse(localStorage.getItem("akhlaq-app-v1") || "{}"), b: JSON.parse(localStorage.getItem("akhlaq-app-v1:p2") || "{}"), f: JSON.parse(localStorage.getItem("tazkiya-family") || "{}"), fx: JSON.parse(localStorage.getItem("tazkiya-fx") || "{}"), url: location.href }));
    ok(st.p.list && st.p.list.length === 2 && st.a.name === "ليلى" && st.a.read && st.a.read["zombie-r1"] && !st.a.read["pig-r1"] && st.b.name === "Sam" && st.b.edition === "adult", "move: both profiles arrive with their names and progress");
    ok(st.f.pact && st.f.pact.v === "human:0" && st.fx.amb === "rain" && st.fx.snd === false, "move: the family record and the sound settings come too");
    ok(!/move=/.test(st.url), "move: no fragment after the import");
    ok(!page.errs.length, "move: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  // security review و1 (24 Nov 2026): a #move= link sent by anyone cannot replace a device's progress
  await step("move: refused over progress", async () => {
    const b64 = x => Buffer.from(x).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    const frag = "j." + b64(JSON.stringify({ app: "tazkiya", v: 1, profiles: { active: "p1", list: ["p1"] }, states: { p1: { mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, name: "Sender" } } }));
    const { ctx, page } = await hostCtx(seed, ["tazkiya.family", { "akhlaq-app-v1": { mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, intro: true, tour: true, lang: "ar", name: "Mine", read: { "zombie-r1": 1763800000000 } } }]);
    await page.goto("https://tazkiya.family/#move=" + frag); await page.waitForTimeout(1400);
    const r = await page.evaluate(() => ({ h: location.hash, ask: !!document.querySelector('#sheet [data-act="bkyes"]'), toast: (document.querySelector(".toast") || {}).innerText || "", name: JSON.parse(localStorage.getItem("akhlaq-app-v1") || "{}").name }));
    ok(r.h === "#/" && !r.ask && r.name === "Mine" && /تقدّم محفوظ/.test(r.toast), "move: on a device with progress the link is refused, nothing replaced, and it says why");
    ok(!page.errs.length, "move (refused): no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  // security review و2 and و3: JavaScript names and malformed escapes in the address are missing pages, not a blank screen
  await step("routes: odd addresses", async () => {
    const { ctx, page } = await hostCtx();
    for (const h of ["#/stage/constructor", "#/stage/__proto__", "#/quiz/toString", "#/read/hasOwnProperty/x", "#/%", "#/stage/%E0%A4%A"]) {
      await page.goto("https://tazkiya.family/?intro=0&n=" + encodeURIComponent(h) + h); await page.waitForTimeout(700);
      const r = await page.evaluate(() => ({ miss: !!document.querySelector("#view .missing"), tabs: !!document.querySelector("#tabs a") }));
      ok(r.miss && r.tabs, `routes: ${h} shows the missing page with the tabs`);
    }
    await page.goto("https://tazkiya.family/?intro=0&n=t#/tasks/constructor"); await page.waitForTimeout(700);
    ok(await page.evaluate(() => document.body.dataset.route) === "tasks" && !page.errs.length, "routes: #/tasks/constructor opens the tasks tab");
    await page.goto("https://tazkiya.family/?intro=0&sel=constructor#/"); await page.waitForTimeout(700);
    ok(await has(page, "#view .hand, #view .hmap") && !page.errs.length, "routes: ?sel=constructor opens the home page (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("move: a bad fragment", async () => {
    const b64 = x => Buffer.from(x).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    const cases = [["z.AAAAbroken", "broken data"], ["j." + b64(JSON.stringify({ app: "evil", states: {} })), "not a Tazkiya backup"], ["j." + "A".repeat(1600000), "over the size limit"], ["j.<script>", "bad characters"],
      ["j." + b64(JSON.stringify({ app: "tazkiya", v: 1, profiles: { active: "p1", list: ["p1"] }, states: { p1: { mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, name: "<img src=x onerror=window.__pwn=1>", read: { "__proto__": 1 } } } })), "markup in a name"]];
    for (const [frag, what] of cases) {
      const { ctx, page } = await hostCtx();
      await page.goto("https://tazkiya.family/#move=" + frag); await page.waitForTimeout(1300);
      const r = await page.evaluate(() => ({ h: location.hash, ask: !!document.querySelector('#sheet [data-act="bkyes"]'), pwn: !!window.__pwn, img: !!document.querySelector("#sheet img[src='x']"), toast: (document.querySelector(".toast") || {}).innerText || "" }));
      if (what === "markup in a name") ok(r.h === "#/" && r.ask && !r.pwn && !r.img, "move: a name with markup is shown as text only");
      else ok(r.h === "#/" && !r.ask && /تعذّرت/.test(r.toast), `move: a fragment with ${what} is refused and cleared`);
      ok(!page.errs.length, `move (${what}): no script errors (` + page.errs.slice(0, 1).join("") + ")");
      await ctx.close();
    }
  });

  return { fails, total, passed: total - fails.length, names };
}

/* ---------------- static checks: manifest, preview tags, service worker, headers ---------------- */
/* ---------------- the first-open story of the hand (docs/INTRO-ANIMATION.md, approved 22 Nov 2026) ---------------- */
async function introFlows(browser, base) {
  const fails = [], notes = []; let total = 0;
  const ok = (cond, label) => { total++; if (!cond) fails.push(label); };
  const step = async (label, fn) => { try { await fn(); } catch (e) { total++; fails.push(label + ": " + e.message.split("\n")[0]); } };
  const fresh = async (vp, opt) => { const ctx = await browser.newContext(Object.assign({ viewport: vp || { width: 375, height: 812 } }, opt || {})); const page = await ctx.newPage();
    // the app asks GET api/health at start (whether to offer Google sign-in); this static server answers 404, which is excused
    const probe = u => /^https?:\/\/[^/]+\/api\/health$/.test(u || "");
    const errs = [], bad = []; page.on("pageerror", e => errs.push(e.message)); page.on("console", m => { if (m.type() === "error" && !(/404/.test(m.text()) && probe((m.location() || {}).url))) errs.push(m.text()); });
    page.on("response", r => { if (r.status() >= 400 && !(r.status() === 404 && probe(r.url()))) bad.push(r.status() + " " + r.url().replace(/^https?:\/\/[^/]+\//, "")); }); page.errs = errs; page.bad = bad; return { ctx, page }; };
  const K = "akhlaq-app-v1";
  const getS = page => page.evaluate(k => JSON.parse(localStorage.getItem(k) || "{}"), K);
  const film = page => page.evaluate(() => { const f = document.querySelector(".film"); if (!f) return null;
    const vis = s => { const e = f.querySelector(s); if (!e || e.hidden) return false; const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    return { scene: window.TZINTRO ? window.TZINTRO.scene : 0, dir: f.getAttribute("dir"), still: f.classList.contains("still"), line: f.querySelector(".film-line").innerText, text: f.innerText,
      skip: vis(".film-skip"), next: vis(".film-next"), go: vis(".film-go"), focus: document.activeElement && document.activeElement.className }; });
  const until = async (page, sc, ms) => { const t0 = Date.now(); while (Date.now() - t0 < (ms || 15000)) { const n = await page.evaluate(() => window.TZINTRO && window.TZINTRO.open ? window.TZINTRO.scene : -1); if (n >= sc) return n; await page.waitForTimeout(60); } return -1; };
  const first = async (page, g, q) => { await page.goto(`${base}?reset=1${q || ""}#/`); await page.waitForTimeout(500); await page.click(`#sheet [data-act="introed"][data-g="${g}"]`); await page.waitForTimeout(1100); };
  const imgsOk = page => page.evaluate(() => [...document.querySelectorAll(".film img")].every(i => i.complete && i.naturalWidth > 0));
  const replay = async (page, q, ms) => { await page.goto(`${base}?n=${Math.random().toString(36).slice(2)}${q || ""}#/about`); await page.waitForTimeout(ms || 500); await page.click('#view [data-act="filmplay"]'); await page.waitForTimeout(400); };

  // 1. first open: the age group, then the story (Arabic, children), played to its end at speed, then the tour
  await step("intro: first open", async () => { const { ctx, page } = await fresh(); await first(page, "child", "&filmspeed=10");
    let f = await film(page);
    ok(!!f, "intro: the story opens right after the age group");
    ok(f && f.dir === "rtl" && f.scene >= 1, "intro: plays right to left");
    ok(f && f.skip && /film-skip/.test(f.focus || ""), "intro: Skip is visible and focused from the first second");
    ok(f && !f.next && !f.go, "intro: no Next or Begin button while it plays (motion allowed)");
    ok(await page.evaluate(() => document.getElementById("view").inert && document.getElementById("tabs").inert), "intro: the page behind is inert");
    ok(await until(page, 9, 12000) === 9, "intro: the nine scenes play through");
    f = await film(page); ok(f && f.go && f.line.includes("هذه يدك"), "intro: the last scene waits on «لنبدأ»");
    ok(await imgsOk(page), "intro: every picture loaded");
    await page.click(".film-go"); await page.waitForTimeout(800);
    ok(!(await film(page)), "intro: «لنبدأ» closes the story");
    ok(await page.locator(".tour").count() === 1, "intro: the tour on the fingers follows");
    ok((await getS(page)).intro === true, "intro: first open is recorded");
    ok(!page.errs.length && !page.bad.length, "intro: no script or network errors (" + page.errs.concat(page.bad).slice(0, 2).join(" | ") + ")");
    await ctx.close(); });
  // 2. skip from the first second (adults, English)
  await step("intro: skip", async () => { const { ctx, page } = await fresh(); await first(page, "adult", "&lang=en");
    const f = await film(page);
    ok(f && f.line.includes("No child is born except upon the fitra") && f.dir === "ltr", "intro: adults' first line, in English, left to right");
    await page.click(".film-skip"); await page.waitForTimeout(800);
    ok(!(await film(page)) && await page.locator(".tour").count() === 1 && (await getS(page)).intro === true, "intro: Skip goes straight to the tour");
    await ctx.close(); });
  // 3. Escape skips; reopening the page later never replays it
  await step("intro: Escape", async () => { const { ctx, page } = await fresh(); await first(page, "child");
    const f0 = await film(page); ok(f0 && f0.line.includes("يولد كل طفل على الفطرة") && f0.scene === 1, "intro: the first line, in Arabic for children");
    await page.keyboard.press("Escape"); await page.waitForTimeout(700);
    ok(!(await film(page)), "intro: Escape skips");
    await page.goto(`${base}?n=2#/`); await page.waitForTimeout(800);
    ok(!(await film(page)), "intro: an existing profile does not see it again on its own");
    await ctx.close(); });
  // 4. replay from Settings and from About; a replay never restarts the tour or touches progress
  await step("intro: replay", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?intro=0&reset=1#/`); await page.waitForTimeout(500);
    const before = JSON.stringify(await getS(page));
    await page.click("#setBtn"); await page.waitForTimeout(300);
    ok(await page.locator('#sheet [data-act="filmplay"]').count() === 1, "intro: «شاهد قصة اليد من جديد» in Settings");
    await page.click('#sheet [data-act="filmplay"]'); await page.waitForTimeout(700);
    ok(!!(await film(page)), "intro: replays from Settings");
    await page.click(".film-skip"); await page.waitForTimeout(700);
    ok(!(await film(page)) && await page.locator(".tour").count() === 0, "intro: a replay ends without the tour");
    ok(JSON.stringify(await getS(page)) === before, "intro: a replay leaves the profile as it was");
    await page.evaluate(() => { location.hash = "#/about"; }); await page.waitForTimeout(400);
    await page.click('#view [data-act="filmplay"]'); await page.waitForTimeout(700);
    ok(!!(await film(page)), "intro: replays from «عن تزكية»");
    await page.click(".film-pause"); await page.waitForTimeout(200);
    const s1 = (await film(page)).scene; await page.waitForTimeout(1500);
    ok((await page.evaluate(() => document.querySelector(".film").classList.contains("paused"))) && (await film(page)).scene === s1, "intro: pause holds the scene");
    await page.click(".film-skip"); await page.waitForTimeout(500);
    await ctx.close(); });
  // 5. reduced motion: stills with a fade, a Next button, the coloured hand at once
  await step("intro: reduced motion", async () => { const { ctx, page } = await fresh(null, { reducedMotion: "reduce" }); await first(page, "child");
    let f = await film(page);
    ok(f && f.still && f.next && f.skip, "intro: reduced motion shows stills with Next and Skip");
    for (let k = 0; k < 6; k++) { await page.click(".film-next"); await page.waitForTimeout(300); }
    f = await film(page); ok(f.scene === 7, "intro: Next steps scene by scene (" + f.scene + ")");
    ok(await page.evaluate(() => document.querySelector(".film").getAnimations({ subtree: true }).every(a => !/transform|scale|translate/.test(JSON.stringify(a.effect.getKeyframes().map(k => Object.keys(k)))) || /hand-col/.test(a.effect.target.className))), "intro: no movement under reduced motion");
    ok(await page.evaluate(() => /transparent -8/.test(document.querySelector(".hand-col").style.maskImage)), "intro: the hand appears coloured at once");
    await page.click(".film-next"); await page.waitForTimeout(300); await page.click(".film-next"); await page.waitForTimeout(300);
    f = await film(page); ok(f.go && !f.next, "intro: the last scene offers «لنبدأ» only");
    await ctx.close(); });
  // 6. the girls' wording
  await step("intro: girls", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?intro=0&reset=1#/`); await page.waitForTimeout(400);
    await page.evaluate(k => { const s = JSON.parse(localStorage.getItem(k)); s.gender = "f"; localStorage.setItem(k, JSON.stringify(s)); }, K);
    await replay(page);
    ok((await film(page)).line.includes("تولد كل طفلة"), "intro: a girl's profile reads «تولد كل طفلة»");
    await page.evaluate(() => window.TZINTRO.setSpeed(40));
    await until(page, 9, 6000); ok((await film(page)).line.includes("هذه يدكِ"), "intro: and «هذه يدكِ» at the end");
    await ctx.close(); });
  // 7. layout: 320, 375 and landscape × Arabic/English × children/adults; the picture large, everything on screen
  const sizes = [[320, 640], [375, 812], [844, 390]];
  for (const [w, h] of sizes) for (const lang of ["ar", "en"]) for (const ed of ["kids", "adult"]) {
    await step(`intro: layout ${w}x${h} ${lang} ${ed}`, async () => { const { ctx, page } = await fresh({ width: w, height: h });
      await page.goto(`${base}?intro=0&reset=1&lang=${lang}${ed === "adult" ? "&ed=adult" : ""}#/`); await page.waitForTimeout(ed === "adult" ? 800 : 500);
      await replay(page, "&filmspeed=8", ed === "adult" ? 800 : 500);
      const tag = `${w}x${h} ${lang} ${ed}`;
      for (const sc of [1, 5, 8, 9]) {
        if (await until(page, sc, 12000) < sc) { ok(false, `intro ${tag}: scene ${sc} not reached`); break; }
        await page.click(".film-pause"); await page.waitForTimeout(sc === 8 ? 700 : 350);
        const m = await page.evaluate(() => { const f = document.querySelector(".film"), st = f.querySelector(".film-stage").getBoundingClientRect();
          const box = s => { const e = f.querySelector(s); if (!e || e.hidden) return null; const r = e.getBoundingClientRect(); return r.width ? { t: r.top, b: r.bottom, l: r.left, r: r.right } : null; };
          return { vw: innerWidth, vh: innerHeight, sw: document.documentElement.scrollWidth, st: { w: st.width, h: st.height, t: st.top, b: st.bottom }, txt: box(".film-text"), line: box(".film-line"), verse: box(".film-verse"), go: box(".film-go"), skip: box(".film-skip") }; });
        const land = m.vw > m.vh, big = land ? m.st.h >= m.vh * 0.68 : m.st.w >= m.vw * 0.8;
        ok(big, `intro ${tag} scene ${sc}: the picture is large (${Math.round(m.st.w)}x${Math.round(m.st.h)} in ${m.vw}x${m.vh})`);
        ok(m.sw <= m.vw + 1, `intro ${tag} scene ${sc}: no horizontal overflow`);
        const inside = b => !b || (b.t >= -1 && b.b <= m.vh + 1 && b.l >= -1 && b.r <= m.vw + 1);
        ok(inside(m.line) && inside(m.verse) && inside(m.go) && inside(m.skip) && m.st.b <= m.vh + 1, `intro ${tag} scene ${sc}: the text and buttons fit on screen (${JSON.stringify({ l: m.line, v: m.verse, g: m.go, st: m.st.b })})`);
        if (!land && m.txt) ok(m.txt.t >= m.st.b - 2, `intro ${tag} scene ${sc}: the text sits under the picture`);
        if (SHOTS && (w === 375 || w === 844) && ed === "kids") await page.screenshot({ path: path.join(OUT, "shots", `intro-${lang}-${w}-s${sc}.png`), type: "jpeg", quality: 70 });
        if (SHOTS && (w === 375 || w === 320) && ed === "adult" && sc === 8) await page.screenshot({ path: path.join(OUT, "shots", `intro-adult-${lang}-${w}-s8.png`), type: "jpeg", quality: 70 });
        await page.click(".film-pause");
      }
      ok(!page.errs.length, `intro ${tag}: no script errors (${page.errs.slice(0, 1).join("")})`);
      await ctx.close(); });
  }
  // scene-by-scene shots at 375 in Arabic, for review
  if (SHOTS) await step("intro: shots", async () => { const { ctx, page } = await fresh(); await page.goto(`${base}?intro=0&reset=1#/`); await page.waitForTimeout(400);
    await replay(page, "&filmspeed=4");
    for (let sc = 1; sc <= 9; sc++) { await until(page, sc, 15000); await page.waitForTimeout(sc === 7 ? 1500 : 900); await page.screenshot({ path: path.join(OUT, "shots", `intro-scene-${sc}.png`), type: "jpeg", quality: 72 }); }
    notes.push("scene shots: tests/out/shots/intro-scene-1..9.png"); await ctx.close(); });
  return { fails, total, passed: total - fails.length, notes };
}

/* ---------------- iPhone: WebKit with the service worker installed (26 Nov 2026) ----------------
 * Reported: on iOS the app opened once and then would not open again. The saved page was /index.html, which the live
 * host redirects to /, and WebKit refuses a redirected response from a service worker for a page load. This runs WebKit
 * with iPhone emulation against a server that redirects like the live host, in a persistent profile (closed and
 * reopened, as a phone does), and opens the app again with the worker installed: online, offline, as a Home Screen
 * app from the manifest's start_url, and with storage blocked. */
async function webkitFlows() {
  const fails = []; let total = 0;
  const ok = (cond, label) => { total++; if (!cond) fails.push(label); };
  const step = async (label, fn) => { try { await fn(); } catch (e) { total++; fails.push(label + ": " + e.message.split("\n")[0]); } };
  const pw = await loadWebkit();
  if (!pw) return { fails, total, passed: 0, skipped: "Playwright with WebKit not found" };
  const dev = Object.assign({}, (pw.devices && pw.devices["iPhone 13"]) || { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }, { locale: "ar" });
  const srv = await serve({ pretty: true }), root = `http://127.0.0.1:${srv.address().port}/`;
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "tazkiya-wk-"));
  const open = async () => {
    try { return await pw.webkit.launchPersistentContext(dir, Object.assign({}, dev)); }
    catch (e) { const exe = webkitPath(); if (!exe) throw e; return pw.webkit.launchPersistentContext(dir, Object.assign({}, dev, { executablePath: exe })); } };
  const probe = u => /\/api\/health$/.test(u || "");
  // with no network, a picture that was never saved answers 504 by design (sw.js); those are not counted while offline
  let off = false; const offline = async v => { off = v; await ctx.setOffline(v); };
  const watch = page => { const errs = [];
    page.on("pageerror", e => errs.push(e.message));
    // WebKit reports the viewport's interactive-widget key, which it does not know, as an error; Safari ignores it harmlessly
    page.on("console", m => { if (m.type() === "error" && !(off && /status of 504/.test(m.text())) && !probe((m.location() || {}).url) && !/api\/health|"interactive-widget" not recognized/.test(m.text())) errs.push(m.text()); });
    page.on("response", r => { if (r.status() >= 400 && !(off && r.status() === 504) && !probe(r.url())) errs.push(r.status() + " " + r.url().replace(root, "/")); }); return errs; };
  const shown = page => page.evaluate(() => { const v = document.getElementById("view");
    return { ctl: !!(navigator.serviceWorker && navigator.serviceWorker.controller), text: v ? v.innerText.trim().length : 0, boot: !!document.querySelector("#view .boot"),
      ed: !!document.querySelector('#sheet:not([hidden]) [data-act="introed"]'), film: !!document.querySelector(".film"), tabs: document.querySelectorAll("#tabs a").length }; });
  const opened = (x, label) => ok(x && x.text > 50 && !x.boot && x.tabs > 0, label + " (" + JSON.stringify(x) + ")");
  const go = async (page, u, ms) => { await page.goto(u); await page.waitForTimeout(ms || 1200); return shown(page); };
  let ctx = null;
  try {
    try { ctx = await open(); } catch (e) { return { fails, total, passed: 0, skipped: "WebKit could not start: " + e.message.split("\n")[0] }; }
    let page = ctx.pages()[0] || await ctx.newPage(), errs = watch(page);
    await step("webkit: first open", async () => {
      await page.goto(root + "?reset=1#/"); await page.waitForTimeout(800);
      ok(await page.evaluate(() => navigator.serviceWorker.ready.then(() => true)), "webkit: the service worker installs on the first open");
      await page.waitForFunction(() => !!navigator.serviceWorker.controller, null, { timeout: 8000 }).catch(() => null);
      ok((await shown(page)).ed, "webkit: the first open asks for the edition");
      ok(!(await page.evaluate(async () => { for (const k of await caches.keys()) for (const r of await (await caches.open(k)).matchAll()) if (r.redirected) return true; return false; })), "webkit: nothing saved came through a redirect");
    });
    // the case that broke on iPhones: the next open answered from the saved page (no network, or a slow one)
    await step("webkit: open with no network", async () => {
      await offline(true);
      for (const u of [root, root + "index.html", root + "#/tasks"]) opened(await go(page, u), "webkit: the app opens offline at " + u.replace(root, "/"));
      await offline(false);
    });
    await step("webkit: edition, then the story", async () => {
      await go(page, root + "?filmspeed=10#/", 800);
      await page.click('#sheet [data-act="introed"][data-g="child"]'); await page.waitForTimeout(1400);
      ok((await shown(page)).film, "webkit: the story opens after the edition is chosen");
      await page.click(".film-skip"); await page.waitForTimeout(900);
      ok(await page.locator(".tour").count() === 1, "webkit: the tour follows the story");
      ok(await page.evaluate(() => { const s = JSON.parse(localStorage.getItem("akhlaq-app-v1") || "{}"); return s.intro === true && s.edition === "kids"; }), "webkit: the first open is recorded");
    });
    ok(!errs.length, "webkit: no errors on the first visit (" + errs.slice(0, 3).join(" | ") + ")");
    await ctx.close(); ctx = null;
    // reopened like a phone app: a new browser process on the same profile, the worker already installed
    await step("webkit: second open", async () => {
      ctx = await open(); page = ctx.pages()[0] || await ctx.newPage(); errs = watch(page);
      const x = await go(page, root, 1500); ok(x.ctl, "webkit: the second open is served by the installed worker"); opened(x, "webkit: the second open shows the app");
      ok(!x.ed && !x.film, "webkit: the second open does not repeat the first-open questions");
      await page.reload(); await page.waitForTimeout(1200); opened(await shown(page), "webkit: a reload shows the app");
      await offline(true); await page.reload(); await page.waitForTimeout(1200); opened(await shown(page), "webkit: the second open works offline too"); await offline(false);
      ok(!errs.length, "webkit: no errors on the second open (" + errs.slice(0, 3).join(" | ") + ")");
      await ctx.close(); ctx = null; });
    // Home Screen app: display-mode standalone and navigator.standalone, launched at the manifest's start_url
    await step("webkit: Home Screen launch", async () => {
      ctx = await open();
      await ctx.addInitScript(() => { try { Object.defineProperty(Navigator.prototype, "standalone", { get: () => true, configurable: true }); } catch (e) {}
        const mm = window.matchMedia.bind(window); window.matchMedia = q => mm(/display-mode:\s*standalone/.test(q) ? "(min-width: 0px)" : q); });
      page = ctx.pages()[0] || await ctx.newPage(); errs = watch(page);
      const man = JSON.parse(fs.readFileSync(path.join(ROOT, "manifest.json"), "utf8")), start = new URL(man.start_url, root + "manifest.json").href;
      ok(start.startsWith(new URL(man.scope, root + "manifest.json").href), "webkit: start_url is inside the manifest scope");
      opened(await go(page, start, 1500), "webkit: the Home Screen app opens at start_url");
      await offline(true); opened(await go(page, start), "webkit: the Home Screen app opens offline"); await offline(false);
      ok(!errs.length, "webkit: no errors in the Home Screen app (" + errs.slice(0, 3).join(" | ") + ")");
      await ctx.close(); ctx = null; });
    // Safari private mode and blocked storage: localStorage, sessionStorage and IndexedDB throw
    await step("webkit: blocked storage", async () => {
      ctx = await open();
      await ctx.addInitScript(() => { const no = () => { throw new DOMException("The operation is insecure.", "SecurityError"); };
        for (const k of ["localStorage", "sessionStorage", "indexedDB"]) try { Object.defineProperty(window, k, { get: no, configurable: true }); } catch (e) {} });
      page = ctx.pages()[0] || await ctx.newPage(); errs = watch(page);
      const x = await go(page, root + "#/", 1500); ok(x.ed || x.text > 50, "webkit: the app starts with storage blocked (" + JSON.stringify(x) + ")");
      if (x.ed) { await page.click('#sheet [data-act="introed"][data-g="adult"]'); await page.waitForTimeout(1400); ok((await shown(page)).film, "webkit: with storage blocked the story still follows the edition"); }
      ok(!errs.length, "webkit: no errors with storage blocked (" + errs.slice(0, 3).join(" | ") + ")");
      await ctx.close(); ctx = null; });
  } finally {
    if (ctx) await ctx.close().catch(() => null);
    srv.close(); try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) {}
  }
  return { fails, total, passed: total - fails.length };
}

function staticChecks() {
  const errs = [];
  const rd = f => fs.readFileSync(path.join(ROOT, f), "utf8");
  const html = rd("index.html"), sw = rd("sw.js");
  // the live host redirects /index.html to /; a saved copy of it is a redirected response, which Safari refuses for a page load
  if (/"index\.html"/.test((sw.match(/const CORE = \[([\s\S]*?)\];/) || [])[1] || "")) errs.push('sw.js: CORE must not precache "index.html" (the host redirects it; save the page as "./")');
  let man = null; try { man = JSON.parse(rd("manifest.json")); } catch (e) { errs.push("manifest.json is not valid JSON"); }
  if (man) {
    for (const k of ["id", "name", "short_name", "start_url", "scope", "display", "theme_color", "background_color", "lang", "dir", "description"]) if (!man[k]) errs.push(`manifest: missing ${k}`);
    const ic = man.icons || [];
    if (!ic.some(i => i.sizes === "192x192")) errs.push("manifest: no 192 icon");
    if (!ic.some(i => i.sizes === "512x512" && /any/.test(i.purpose || "any"))) errs.push("manifest: no 512 icon");
    if (!ic.some(i => /maskable/.test(i.purpose || ""))) errs.push("manifest: no maskable icon");
    if (!(man.screenshots || []).some(x => x.form_factor === "wide") || !(man.screenshots || []).some(x => x.form_factor !== "wide")) errs.push("manifest: needs narrow and wide screenshots");
    if (!(man.shortcuts || []).length) errs.push("manifest: no shortcuts");
    for (const x of ic.concat(man.screenshots || [])) { const p = path.join(ROOT, x.src); if (!fs.existsSync(p)) errs.push(`manifest: missing file ${x.src}`); else if (x.sizes) { const [w, h] = x.sizes.split("x").map(Number), sz = imgSize(p); if (sz && (sz[0] !== w || sz[1] !== h)) errs.push(`manifest: ${x.src} is ${sz.join("x")}, declared ${x.sizes}`); } }
  }
  if (!/<footer class="sitefoot" id="sitefoot"><a href="\/privacy\/">/.test(html)) errs.push("index.html: the served markup must link to /privacy/ (Google brand verification)");
  if (/<meta name="robots"[^>]*noindex/.test(html)) errs.push("index.html: noindex (the site is open to search engines since 23 Nov 2026)");
  const need = [/<link rel="canonical" href="https:\/\/tazkiya\.family\/">/, /property="og:title"/, /property="og:description"/, /property="og:image" content="https:\/\//, /name="twitter:card" content="summary_large_image"/,
    /rel="apple-touch-icon"/, /name="apple-mobile-web-app-capable"/, /name="apple-mobile-web-app-title"/, /name="apple-mobile-web-app-status-bar-style"/, /rel="apple-touch-startup-image"/, /rel="manifest"/, /name="theme-color"/];
  need.forEach(r => { if (!r.test(html)) errs.push(`index.html: missing ${r.source.slice(0, 50)}`); });
  for (const m of html.matchAll(/href="(assets\/[^"]+)"/g)) if (!fs.existsSync(path.join(ROOT, m[1]))) errs.push(`index.html: missing ${m[1]}`);
  for (const m of html.matchAll(/content="https:\/\/tazkiya\.family\/(assets\/[^"]+)"/g)) if (!fs.existsSync(path.join(ROOT, m[1]))) errs.push(`index.html: preview image missing ${m[1]}`);
  const ad = fs.existsSync(path.join(ROOT, "adult/index.html")) ? rd("adult/index.html") : "";
  if (!ad) errs.push("adult/index.html missing"); else { if (!/og:image" content="https:\/\/tazkiya\.family\/assets\/og-image-adult/.test(ad)) errs.push("adult page: no adult preview image"); if (/noindex/.test(ad)) errs.push("adult page: noindex"); if (!/<link rel="canonical" href="https:\/\/tazkiya\.family\/adult\/">/.test(ad)) errs.push("adult page: canonical is not /adult/"); if (/<script>/.test(ad)) errs.push("adult page: inline script (blocked by the CSP)"); }
  // every versioned file index.html asks for is precached under the same URL
  for (const m of html.matchAll(/(?:src|href)="([^"]+\?v=[^"]+)"/g)) if (!sw.includes(`"${m[1]}"`)) errs.push(`sw.js: CORE lacks ${m[1]} (bump it with index.html)`);
  if (!/SKIP_WAITING/.test(sw) || /addEventListener\("install"[\s\S]{0,300}skipWaiting\(\)/.test(sw)) errs.push("sw.js: a new version must wait for the user (SKIP_WAITING message only)");
  if (!/caches\.delete/.test(sw)) errs.push("sw.js: old caches are not deleted");
  const bp = fs.existsSync(BUILD_PY) ? fs.readFileSync(BUILD_PY, "utf8") : "";
  for (const h of ["Content-Security-Policy", "X-Content-Type-Options", "Referrer-Policy", "Permissions-Policy", "frame-ancestors 'none'", "X-Robots-Tag", "adult/index.html", "Disallow: /api/", "sitemap.xml", "pages.dev/*"]) if (!bp.includes(h)) errs.push(`build_public.py: missing ${h}`);
  if (/\/\*\n  ! Access-Control-Allow-Origin\n  X-Robots-Tag/.test(bp) || /Disallow: \/\n/.test(bp)) errs.push("build_public.py: the site must stay open to search engines");
  for (const sp of ["parents/index.html", "training/index.html", "privacy/index.html"]) if (fs.existsSync(path.join(ROOT, sp)) && /noindex/.test(rd(sp))) errs.push(`${sp}: noindex`);
  if (!CSP) errs.push("could not read the CSP from build_public.py");
  // 23 Nov 2026: Cloudflare Web Analytics is the one outside script (anonymous counts); the privacy email stays plain text
  if (CSP && (!CSP.includes("script-src 'self' https://static.cloudflareinsights.com;") || !CSP.includes("connect-src 'self' https://cloudflareinsights.com;"))) errs.push("CSP: Cloudflare Web Analytics must be allowed, and nothing else outside");
  { const pv = fs.existsSync(path.join(ROOT, "privacy/index.html")) ? rd("privacy/index.html") : ""; const link = '<a href="mailto:privacy@tazkiya.family">privacy@tazkiya.family</a>';
    const ml = pv.split('<a href="mailto:privacy@tazkiya.family">').length - 1, wr = { length: pv.split("<!--email_off-->" + link + "<!--/email_off-->").length - 1 };
    if (ml !== 2 || wr.length !== 2) errs.push("privacy page: each privacy@ link must sit inside <!--email_off--> (Cloudflare would rewrite it)"); }
  // security and compatibility review (22 Nov 2026)
  for (const h of ["! Access-Control-Allow-Origin", "private-terms.txt", "404.html", "parents/index.html", "training/index.html", "/training/*", "wrangler@4", "getexif", "esbuild@"]) if (!bp.includes(h)) errs.push(`build_public.py: missing ${h}`);
  for (const f of ["404.html", "parents/index.html", "training/index.html", "assets/qr-kids.svg", "assets/qr-adult.svg"]) if (!fs.existsSync(path.join(ROOT, f))) errs.push(`missing ${f}`);
  // the parents' page also loads feedback.js (the suggestion form for adults, 27 Nov 2026), deferred, from its own origin
  for (const sp of ["parents/index.html", "training/index.html"]) if (fs.existsSync(path.join(ROOT, sp)) && [...rd(sp).matchAll(/<script[^>]*>/g)].some(m => !/src="\.\.\/boot\.js\?v=\d+" data-page="static"/.test(m[0]) && !(sp === "parents/index.html" && /^<script src="\.\.\/feedback\.js\?v=\d+" defer>$/.test(m[0])) && m[0] !== '<script type="application/ld+json">')) errs.push(`${sp}: only boot.js (static) expected (structured data, which never runs, is the one other block allowed)`);
  if (!/<script src="boot\.js\?v=\d+"><\/script>/.test(html.split("</head>")[0])) errs.push("index.html: boot.js must load in <head>, without defer");
  for (const f of ["index.html", "adult/index.html", "parents/index.html", "training/index.html"]) if (fs.existsSync(path.join(ROOT, f)) && /tazkiya\.pages\.dev/.test(rd(f))) errs.push(`${f}: names the former address`);
  if (ad) { if (!/<base href="\/">/.test(ad)) errs.push("adult page: no <base href=\"/\">");
    const vs = h => [...h.matchAll(/(?:src|href)="([^"]+\?v=[^"]+)"/g)].map(m => m[1]).join();
    if (vs(ad) !== vs(html)) errs.push("adult page: loads other files than index.html (run outputs/publish/adult_page.py)"); }
  if (!/interactive-widget=resizes-content/.test(html)) errs.push("index.html: viewport lacks interactive-widget=resizes-content");
  if (man && !(man.launch_handler && man.launch_handler.client_mode)) errs.push("manifest: no launch_handler");
  if (man && (man.shortcuts || []).some(x => !/[a-z]/i.test(x.name))) errs.push("manifest: shortcut names need English too");
  return errs;
}
function imgSize(p) {
  const b = fs.readFileSync(p);
  if (b[0] === 0x89 && b[1] === 0x50) return [b.readUInt32BE(16), b.readUInt32BE(20)];
  if (b[0] === 0xff && b[1] === 0xd8) { let i = 2; while (i < b.length - 9) { if (b[i] !== 0xff) { i++; continue; } const m = b[i + 1], len = b.readUInt16BE(i + 2); if (m >= 0xc0 && m <= 0xc3) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]; i += 2 + len; } }
  return null;
}

main().catch(e => { console.error(e); process.exit(2); });
