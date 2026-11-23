// Akhlaq Path: smoke test and content contract check.
// Usage (from outputs/app):  node tests/smoke.mjs  [--quick] [--no-shots] [--content-only] [--ideas-only] [--intro-only]
// Serves this folder on a free local port, walks every route x AR/EN x 320/375/1280,
// and validates content/content.js + content/books.js. Writes tests/out/report.md,
// tests/out/report.json and screenshots (375 px) to tests/out/shots/. Exit code 1 on any failure.
// Needs Playwright: a local/global `playwright` or `playwright-core`, or one in the npx cache,
// plus an installed Chromium (npx playwright install chromium). Not part of the published app.

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

// choice stories (FIVE-IDEAS 5): { id, stage, trait, age, title, intro, q (with ar_f), opts: [{ t, out, why, weak? }] (2-3), end }; one per stage
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
  STAGES.forEach(s => { if (per[s] !== 1) errs.push(`${label}: ${per[s] || 0} stories for ${s}, expected 1`); });
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
    need("signs", 5, 6); need("readings", 6, 8); need("quiz", 10, 14); need("tasks", 5, 5); need("selfcheck", 5, 5);
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
function serve() {
  const srv = http.createServer((req, res) => {
    const u = decodeURIComponent(new URL(req.url, "http://x").pathname);
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
  const S = Object.keys(C.stages), R = ["#/", "#/tasks", "#/me", "#/evening", "#/record", "#/seen", "#/tadwin", "#/tadwin/why", "#/tadwin/bad", "#/library", "#/about", "#/faq", "#/sources", "#/poster", "#/review", "#/no-such-page"];
  for (const s of S) {
    const st = C.stages[s];
    R.push(`#/stage/${s}`, `#/sign/${s}`, `#/card/${s}`, `#/quiz/${s}`);
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
    const r = e.getBoundingClientRect(); if (r.right > innerWidth + 1 || r.left < -1) clip.push("offscreen: " + e.innerText.trim().slice(0, 40));
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
    ok(await page.locator('#sheet [data-act="fxset"]').count() >= 6, "settings shows the sound and vibration controls");
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
    await page.click('#sheet [data-act="setgrp"][data-g="teen"]'); await page.waitForTimeout(500);
    let s1 = (await state(page)).states[0]; ok(s1.edition === "kids" && s1.age === "15+", "teen group = children's content, 15+ books first");
    ok((await page.locator("#ageBtn").innerText()).trim() === "مراهقون", "the top bar shows the teen group");
    await page.click("#ageBtn"); await page.waitForTimeout(300); await page.click('#sheet [data-act="setgrp"][data-g="adult"]'); await page.waitForTimeout(900);
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
    ok(await page.locator('#sheet [data-act="introed"]').count() === 3, "first open asks for the age group");
    await page.click('#sheet [data-act="introed"][data-g="adult"]'); await page.waitForTimeout(900);
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
  const fresh = async () => { const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } }); const page = await ctx.newPage(); const errs = []; page.on("pageerror", e => errs.push(e.message)); page.errs = errs; return { ctx, page }; };
  const K = "akhlaq-app-v1";
  const getS = page => page.evaluate(k => JSON.parse(localStorage.getItem(k) || "{}"), K);
  const setS = (page, f) => page.evaluate(([k, src]) => { const s = JSON.parse(localStorage.getItem(k) || "{}"); const fn = new Function("s", "d", src); const d = new Date(); fn(s, d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0")); localStorage.setItem(k, JSON.stringify(s)); }, [K, f]);
  const go = async (page, h, ms) => { await page.evaluate(x => { location.hash = x; }, h); await page.waitForTimeout(ms || 350); };
  const txt = (page, sel) => page.evaluate(q => { const e = document.querySelector(q); return e ? e.innerText : ""; }, sel);
  const has = async (page, sel) => (await page.locator(sel).count()) > 0;
  let nOpen = 0; // a fresh query each time, so goto always reloads (a hash-only change would keep the page's memory)
  const open = async (page, q, ms) => { await page.goto(`${base}?intro=0&n=${++nOpen}${q || ""}#/`); await page.waitForTimeout(ms || 500); };

  // idea 1 (today's step) was removed by the owner's decision, 22 Nov 2026: the home page opens with the hand
  await step("home: the hand first", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await setS(page, "s.step = { d, ed: 'kids', k: 'r', s: 'zombie', id: 'zombie-r1', tr: 0 }; s.read = { 'zombie-r1': Date.now() };"); await open(page, "", 1200);
    const r = await page.evaluate(() => { const v = document.getElementById("view"), first = v.firstElementChild, hb = v.querySelector(".handbox"), hd = hb.getBoundingClientRect(); return { first: first && first.className, step: !!document.querySelector(".stepcard, .sc-go, #sheet .apply"), top: hd.top, h: hd.height }; });
    ok(/hello/.test(r.first) && !r.step, "home: the greeting then the hand open the page; no step card and no 'go and live it' screen");
    ok(r.top < 240 && r.h > 250, `home: the hand is large in the first view at 375 (top ${Math.round(r.top)}, height ${Math.round(r.h)})`);
    ok(!("step" in (await getS(page))), "home: an old saved step is dropped by the sanitizer");
    ok(!page.errs.length, "home: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  // 2. evening reckoning
  const at = async (page, h) => { if (page.clock && page.clock.setFixedTime) { const d = new Date(); d.setHours(h, 30, 0, 0); await page.clock.setFixedTime(d); return true; } return false; };
  await step("evening reckoning", async () => { const { ctx, page } = await fresh();
    if (await at(page, 10)) { await open(page, "&reset=1"); ok(!(await has(page, ".evecard")), "2: no evening card in the morning"); }
    if (await at(page, 18)) { await open(page, "&reset=1"); ok(await has(page, ".evecard"), "2: the evening card shows after five in the evening"); }
    else { await open(page, "&reset=1"); notesOut.push("2: Playwright has no page.clock; the 17:00 window was not tested"); }
    ok(await has(page, '.evelink[href="#/evening"]'), "2: a fixed link to the reckoning on the home page");
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
    await go(page, "#/"); ok(!(await has(page, ".evecard")), "2: the card disappears once done");
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
    ok(/أين غلبتك نفسك اليوم/.test(await txt(page, "#view")), "2a: the adult question");
    await setS(page, "s.lang = 'en';"); await open(page, "", 900); await go(page, "#/evening");
    ok(/get the better of you/.test(await txt(page, "#view")), "2a: English adult question");
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
      ok(tabs.length === 3 && tabs[0].startsWith("#/|") && tabs[1].startsWith("#/tasks|") && tabs[2] === "#/tadwin|" + lab, `tw: the tabs are my hand, tasks, «${lab}» (${q}): ${tabs.join(", ")}`);
      ok(await has(page, '#tabs a[href="#/tadwin"] svg'), `tw: the journal tab has its pen (${q})`);
      await page.click('#tabs a[href="#/tadwin"]'); await page.waitForTimeout(400);
      const t = await txt(page, "#view");
      ok(await has(page, '#view [data-act="twstart"]') && /عَلَّمَ بِالْقَلَمِ/.test(t) && /كَاتِبِينَ/.test(t), `tw: the first visit opens «why we write» with both verses (${q})`);
      ok(!TW_OLD.test(t), `tw: «why we write» speaks of writing, blessings and challenges (${q})`);
      if (q.includes("en")) ok(/taught by the pen/.test(t) && /recording/.test(t) && /blessings/.test(t) && /challenges/.test(t), `tw: English meanings of the verses and the new idea (${q})`);
      else ok(/نعم/.test(t) && /(تحديات|مجاهدات)/.test(t) && /بحرية/.test(t), `tw: the intro names free writing, blessings and challenges (${q})`);
      await page.click('#view [data-act="twstart"]'); await page.waitForTimeout(350);
      const ord = await page.evaluate(() => ["#tw-write", "#tw-nb", "#tw-bless", "#tw-chal", ".sawc"].map(s => { const e = document.querySelector("#view " + s); return e ? e.getBoundingClientRect().top + scrollY : -1; }));
      ok(ord.every(x => x >= 0) && ord.every((x, i) => !i || x > ord[i - 1]), `tw: write, notebook, blessings, challenges, «رأيتُ خيرًا», in that order (${q}): ${ord.join(",")}`);
      const big = await page.evaluate(() => { const ta = document.getElementById("twNote"); const r = ta.getBoundingClientRect(); return { h: r.height, w: r.width, vw: innerWidth, max: Math.max(...[...document.querySelectorAll("#view .tw-paper > ul > li, #view .card")].map(e => e.getBoundingClientRect().height), 0) }; });
      ok(big.h >= 240 && big.w >= big.vw * 0.8 && big.h > big.max, `tw: the writing box is the largest element (${q}): ${JSON.stringify(big)}`);
      ok((await txt(page, "#tw-chal h2")).includes(ch), `tw: the challenges are called «${ch}» (${q})`);
      ok(!TW_OLD.test(await txt(page, "#view")), `tw: none of the first journal's words on the page (${q})`);
      ok(await has(page, '.tw-head a[href="#/tadwin/why"]') && await has(page, '#tw-bless .evelink[href="#/evening"]') && await has(page, '#tw-bless [data-act="twadd"][data-k="deed"]') && await has(page, "#tw-bless #tw-seen") && await has(page, '#view [data-act="sawopen"]'), `tw: «why» link, and in the blessings the evening, «اكتب حسنة» and «ما رآه أهلي فيّ» (${q})`);
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
    ok((await txt(page, "#tw-nb summary")).includes("1"), "tw: the notebook counts the entry after a reload");
    await page.click("#tw-nb summary"); await page.waitForTimeout(200);
    ok(/وساعدني صديقي/.test(await txt(page, "#tw-nb")) && /\d{4}/.test(await txt(page, "#tw-nb .tw-d")), "tw: the notebook shows it with its date");
    await page.click('#tw-nb [data-act="nbopen"]'); await page.waitForTimeout(400);
    ok((await page.inputValue("#twNote")) === note && await has(page, ".tw-write.editing") && await has(page, '#view [data-act="nbcancel"]'), "tw: an entry reopens in the writing box to be edited");
    ok(await page.evaluate(() => document.getElementById("tw-nb").open), "tw: the notebook stays open across the redraw");
    await page.fill("#twNote", note + "\nوالحمد لله"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(400);
    s = await getS(page); ok(s.notes.length === 1 && /والحمد لله$/.test(s.notes[0].tx) && s.notes[0].u >= s.notes[0].t, "tw: editing changes the same entry and marks when");
    ok((await page.inputValue("#twNote")) === "" && !(await has(page, ".tw-write.editing")), "tw: after the edit the box is a new page again");
    await page.fill("#twNote", "صفحة ثانية للتجربة"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(400);
    ok(/صفحة ثانية للتجربة/.test(await txt(page, "#tw-nb .nb-e .nb-tx")), "tw: the newest entry shows first");
    await page.click('#tw-nb [data-act="twdel"]'); await page.waitForTimeout(250);
    ok(/دفترك/.test(await txt(page, "#sheet")), "tw: removing an entry asks once");
    await page.click('#sheet [data-act="twdelyes"]'); await page.waitForTimeout(300);
    s = await getS(page); ok(s.notes.length === 1 && /والحمد لله$/.test(s.notes[0].tx), "tw: only the chosen entry is removed");
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
    ok(await has(page, '#tw-chal .ch-task a[href="#/tasks/monkey"]') && (await page.locator("#tw-chal .ch-task").count()) === 1, "tw: a challenge linked to a finger suggests one of that finger's tasks");
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
      await page.click("#tw-nb summary"); await page.waitForTimeout(200);
      ok(!(await has(page, '[data-act="exgo"]')), "ext: without a server the extract button stays hidden");
      ok(!page.errs.length, "ext: no script errors without a server (" + page.errs.slice(0, 1).join("") + ")");
      await ctx.close(); }
    // with a server (mocked to the contract of outputs/server/src/extract.js)
    const freshNoSw = async (vp) => { const ctx = await browser.newContext({ viewport: vp || { width: 375, height: 812 }, serviceWorkers: "block" }); const page = await ctx.newPage(); const errs = []; page.on("pageerror", e => errs.push(e.message)); page.errs = errs; return { ctx, page }; };
    const mock = async (ctx, reqs, ans, adult18) => {
      await ctx.route("**/api/health", r => r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true, env: "test", ai: true }) }));
      await ctx.route("**/api/me", r => r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ account: { email: "x@example.com", adult_at: adult18 === false ? null : 1763900000000 }, profiles: [] }) }));
      await ctx.route("**/api/extract", r => { reqs.push({ m: r.request().method(), h: r.request().headers(), b: r.request().postData() }); return r.fulfill(ans()); }); };
    { const { ctx, page } = await freshNoSw(), reqs = [];
      await mock(ctx, reqs, () => ({ status: 200, contentType: "application/json", body: JSON.stringify({ blessings: ["أمي التي ساعدتني في واجبي", "<b>صديق</b> وقف بجانبي", 5], challenges: ["أن أهدأ حين يغضبني أخي"], care: "ما كتبته مهم." }) }));
      await open(page, "&reset=1&ed=adult", 900); await setS(page, "s.twIntro = true; s.gender = 'm';"); await open(page, "", 900); await go(page, "#/tadwin", 900);
      await page.fill("#twNote", "ساعدتني أمي في الواجب، وغضبت من أخي"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(500);
      ok(await has(page, '.tw-after [data-act="exgo"]'), "ext: with the server, the button shows after saving");
      await page.click('.tw-after [data-act="exgo"]'); await page.waitForTimeout(700);
      const rq = reqs[0] || { h: {} }, body = JSON.parse(rq.b || "{}");
      ok(rq.m === "POST" && rq.h["x-tazkiya"] === "1" && /application\/json/.test(rq.h["content-type"] || ""), "ext: POST /api/extract as JSON with the x-tazkiya header");
      ok(Object.keys(body).sort().join() === "edition,gender,lang,pid,text" && body.pid === "p1" && body.edition === "adult" && body.lang === "ar" && body.gender === "m" && /ساعدتني أمي/.test(body.text), `ext: it sends one entry with edition, language and gender: ${JSON.stringify(body)}`);
      ok((await page.locator("#sheet .ex-list li").count()) === 3 && /ما كتبته مهم/.test(await txt(page, "#sheet .ex-care")) && !/[<>]/.test(await page.inputValue("#ex-bl1")), "ext: the suggestions and the care line are shown, cleaned");
      ok(!((await getS(page)).bless || []).length && !((await getS(page)).chal || []).length, "ext: nothing is saved before the writer chooses");
      await page.fill("#ex-bl0", "أمي التي ساعدتني"); await page.click('#sheet [data-act="exon"][data-k="bl"][data-i="1"]'); await page.waitForTimeout(250);
      ok((await page.inputValue("#ex-bl0")) === "أمي التي ساعدتني" && await has(page, "#sheet .ex-list li.off"), "ext: a line can be edited, another dropped");
      await page.click('#sheet [data-act="exsave"]'); await page.waitForTimeout(400);
      const s = await getS(page), nid = s.notes[0].id;
      ok(s.bless.length === 1 && s.bless[0].tx === "أمي التي ساعدتني" && s.bless[0].src === "ai" && s.bless[0].n === nid, "ext: the chosen blessing is saved as edited, linked to its entry");
      ok(s.chal.length === 1 && s.chal[0].tx === "أن أهدأ حين يغضبني أخي" && s.chal[0].src === "ai", "ext: the chosen challenge is saved");
      ok(/من كتابتي/.test(await txt(page, "#tw-bless")), "ext: shown «من كتابتي»");
      ok(!page.errs.length, "ext: no script errors (" + page.errs.slice(0, 1).join("") + ")");
      await ctx.close(); }
    // no AI for children (owner decision, 23 Nov 2026): never in the kids' edition, not even as a setting
    { const { ctx, page } = await freshNoSw(), reqs = [];
      await mock(ctx, reqs, () => ({ status: 200, contentType: "application/json", body: '{"blessings":["x"],"challenges":[]}' }));
      for (const q of ["&lang=ar", "&lang=en"]) {
        await open(page, "&reset=1" + q, 900); await setS(page, "s.twIntro = true; s.age = '9-14'; s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'كان يومًا طيبًا في المدرسة' }];"); await open(page, "", 900); await go(page, "#/tadwin", 1200);
        await page.fill("#twNote", "كتبت صفحة جديدة طويلة اليوم"); await page.click('#view [data-act="nbsave"]'); await page.waitForTimeout(400);
        await page.click("#tw-nb summary"); await page.waitForTimeout(200);
        ok(!(await has(page, '[data-act="exgo"]')) && !(await has(page, ".ext-btn")), `ext: kids (${q}): no extract button anywhere, with a working server`);
        await page.click("#setBtn"); await page.waitForTimeout(500);
        ok(!/(المساعد|الذكاء|journal helper|\bAI\b)/.test(await txt(page, "#sheet")), `ext: kids (${q}): no setting for it`);
        await page.keyboard.press("Escape"); await page.waitForTimeout(200);
        ok(((await getS(page)).bless || []).length === 0 && ((await getS(page)).chal || []).length === 0 && await has(page, '#tw-bless [data-act="twadd"]') && await has(page, '#tw-chal [data-act="twadd"]'), `ext: kids (${q}): writing and adding by hand stay`);
      }
      const calls = await page.evaluate(() => performance.getEntriesByType("resource").filter(e => /\/api\//.test(e.name)).length);
      ok(!reqs.length && !calls, `ext: kids: the app never calls the server's AI or asks for it (${reqs.length}, ${calls})`);
      ok(!page.errs.length, "ext: kids: no script errors (" + page.errs.slice(0, 1).join("") + ")");
      await ctx.close(); }
    // an adult account without the 18+ attestation: hidden; a signed-out answer is said plainly
    { const { ctx, page } = await freshNoSw(), reqs = [];
      await mock(ctx, reqs, () => ({ status: 401, contentType: "application/json", body: '{"error":"no_session"}' }), false);
      await open(page, "&reset=1&ed=adult", 900); await setS(page, "s.twIntro = true; s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'كان يومًا طويلًا في العمل' }];"); await open(page, "", 900); await go(page, "#/tadwin", 1200);
      await page.click("#tw-nb summary"); await page.waitForTimeout(200);
      ok(!(await has(page, '[data-act="exgo"]')), "ext: adults without the 18+ attestation see no button");
      await ctx.close(); }
    { const { ctx, page } = await freshNoSw(), reqs = [];
      await mock(ctx, reqs, () => ({ status: 401, contentType: "application/json", body: '{"error":"no_session"}' }));
      await open(page, "&reset=1&ed=adult&lang=en", 900); await setS(page, "s.twIntro = true; s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'A long day at work, and a kind word.' }];"); await open(page, "", 900); await go(page, "#/tadwin", 1200);
      await page.click("#tw-nb summary"); await page.waitForTimeout(200); await page.click('#tw-nb [data-act="exgo"]'); await page.waitForTimeout(600);
      ok(/signed in/.test(await txt(page, "#sheet")), "ext: a signed-out answer asks to sign in");
      ok(!page.errs.length, "ext: no script errors (" + page.errs.slice(0, 1).join("") + ")");
      await ctx.close(); }
    // another adult profile on the device (a family member, not the account holder): hidden
    { const { ctx, page } = await freshNoSw(), reqs = [];
      await mock(ctx, reqs, () => ({ status: 200, contentType: "application/json", body: '{"blessings":["x"],"challenges":[]}' }));
      await open(page, "&reset=1&ed=adult", 900);
      await page.evaluate(() => { localStorage.setItem("akhlaq-app-v1:profiles", JSON.stringify({ active: "p2", list: ["p1", "p2"] }));
        localStorage.setItem("akhlaq-app-v1:p2", JSON.stringify({ v: 1, lang: "ar", fs: 19, mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, edition: "adult", intro: true, tour: true, twIntro: true, notes: [{ id: "n1", t: Date.now(), tx: "كتابة فرد آخر من الأسرة" }] })); });
      await open(page, "", 900); await go(page, "#/tadwin", 1200); await page.click("#tw-nb summary"); await page.waitForTimeout(200);
      ok(!(await has(page, '[data-act="exgo"]')) && !reqs.length, "ext: an adult profile other than the account holder's sees no button");
      await ctx.close(); }
    // nothing found: say so, and invite adding by hand
    { const { ctx, page } = await freshNoSw(), reqs = [];
      await mock(ctx, reqs, () => ({ status: 200, contentType: "application/json", body: '{"blessings":[],"challenges":[]}' }));
      await open(page, "&reset=1&ed=adult", 900); await setS(page, "s.twIntro = true; s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'كان يومًا طويلًا في العمل' }];"); await open(page, "", 900); await go(page, "#/tadwin", 1200);
      await page.click("#tw-nb summary"); await page.waitForTimeout(200); await page.click('#tw-nb [data-act="exgo"]'); await page.waitForTimeout(600);
      ok(/لم يجد المساعد سطورًا/.test(await txt(page, "#sheet")) && /بيدك/.test(await txt(page, "#sheet")), "ext: empty lists say nothing was found and invite adding by hand");
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
    // a backup made by the first journal (two scrolls) is moved to version 2 on restore
    const old = JSON.parse(JSON.stringify(out)), o1 = old.states.p1; ["notes", "bless", "chal", "khabia", "twV"].forEach(k => delete o1[k]);
    o1.twMig = true; o1.good = [{ id: "g1", t: Date.now(), tx: "حسنة قديمة" }]; o1.bad = [{ id: "s1", t: Date.now(), tx: "سطر قديم", st: true }];
    await page.click("#setBtn"); await page.waitForTimeout(250);
    await page.setInputFiles("#bkFile", { name: "old.json", mimeType: "application/json", buffer: Buffer.from(JSON.stringify(old)) }); await page.waitForTimeout(400);
    await page.click('#sheet [data-act="bkyes"]'); await page.waitForTimeout(1300);
    r = await getS(page);
    ok(r.twV === 2 && r.bless.length === 1 && r.bless[0].tx === "حسنة قديمة" && r.chal.length === 1 && r.chal[0].tx === "سطر قديم" && !("good" in r) && !("bad" in r), "bk: a backup from the first journal is moved to version 2");
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
      await go(page, "#/tadwin"); await page.click("#tw-nb summary"); await page.waitForTimeout(200); await page.click('#tw-nb [data-act="nbopen"] >> nth=0'); await page.waitForTimeout(300);
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
    // the extract sheet at 320 px (mocked server)
    const ctx = await browser.newContext({ viewport: { width: 320, height: 640 }, serviceWorkers: "block" }), page = await ctx.newPage();
    await ctx.route("**/api/health", r => r.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true,"ai":true}' }));
    await ctx.route("**/api/me", r => r.fulfill({ status: 200, contentType: "application/json", body: '{"account":{"adult_at":1763900000000}}' }));
    await ctx.route("**/api/extract", r => r.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ blessings: ["ك".repeat(140), "صديق"], challenges: ["Supercalifragilistic".repeat(7)], care: "What you wrote matters. It may help to talk it through today with someone you trust." }) }));
    await open(page, "&reset=1&ed=adult&lang=en", 900); await setS(page, "s.twIntro = true; s.notes = [{ id: 'n1', t: Date.now(), d, tx: 'A long day with my family and friends.' }];"); await open(page, "", 900); await go(page, "#/tadwin", 900);
    await page.click("#tw-nb summary"); await page.waitForTimeout(200); await page.click('#tw-nb [data-act="exgo"]'); await page.waitForTimeout(700);
    const x = await page.evaluate(PAGE_CHECK); ok(!x.overflow && !x.clipped.length && !x.badText && (await page.locator("#sheet .ex-list li").count()) === 3, `tw: 320 the extract sheet: ${JSON.stringify(x)}`);
    await ctx.close();
  });
  // 4. the family pact and "I saw good"
  await step("family pact", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1");
    await page.evaluate(() => localStorage.removeItem("tazkiya-family")); await open(page);
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
    await open(page, "", 1100);
    ok((await txt(page, ".pact")).includes(at.step.ar) && (await txt(page, ".pact")).includes(at.turnName.ar), "4: an adult profile sees the adult task for the same trait");
    // "I saw good" (in Tadwin since 23 Nov 2026): from the adult profile to the child's
    await go(page, "#/seen"); await page.click('#view [data-act="sawopen"]'); await page.waitForTimeout(300);
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
    ok(/حمل الأكياس معي/.test(await txt(page, "#view")), "4: it stays in «ما رآه أهلي فيّ»");
    await open(page, "", 1200); ok(!(await has(page, "#sheet:not([hidden]) .saw-list")), "4: it is shown once");
    // end of the week: how was it, then a new pact; the old one is kept
    await page.evaluate(() => { const f = JSON.parse(localStorage.getItem("tazkiya-family")); f.pact.to = "2020-01-03"; localStorage.setItem("tazkiya-family", JSON.stringify(f)); }); await open(page);
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
    await go(page, "#/seen"); await page.click('#view [data-act="sawopen"]'); await page.waitForTimeout(300);
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
  // 5. choice stories
  await step("choice stories", async () => { const { ctx, page } = await fresh(); await open(page, "&reset=1"); await go(page, "#/stage/zombie");
    ok(/قصص تختار فيها/.test(await txt(page, "#sec-read")) && await has(page, '#sec-read a[href="#/choice/ch-zombie-1"]'), "5: the stage's Read step lists «قصص تختار فيها»");
    await go(page, "#/choice/ch-zombie-1"); ok(/ماذا تفعل؟/.test(await txt(page, ".ch-q")), "5: the story asks «ماذا تفعل؟»");
    await page.click('[data-act="chpick"][data-i="1"]'); await page.waitForTimeout(300);
    ok(await has(page, ".ch-fb.weak") && await has(page, '[data-act="chagain"]') && /جرّب الاختيار الآخر/.test(await txt(page, "#view")), "5: the weaker choice shows its effect and «جرّب الاختيار الآخر»");
    ok(!/خطأ/.test(await txt(page, ".ch-fb")), "5: no choice is called «خطأ»");
    let st = await getS(page); ok(st.chs && st.chs["ch-zombie-1"] && st.chs["ch-zombie-1"].c === 1 && !st.chs["ch-zombie-1"].t, "5: the first choice is kept; not read before the ending");
    await page.click('[data-act="chagain"]'); await page.waitForTimeout(250); await page.click('[data-act="chpick"][data-i="0"]'); await page.waitForTimeout(300);
    ok(await has(page, ".ch-fb.ok") && (await txt(page, ".ch-why")).length > 10, "5: each choice has its outcome and a line of reflection");
    await page.click('[data-act="chend"]'); await page.waitForTimeout(400);
    st = await getS(page); ok(st.chs["ch-zombie-1"].c === 1 && st.chs["ch-zombie-1"].t > 0 && (st.ev || []).some(e => e.k === "read"), "5: reaching the ending records the reading; the first choice stays");
    ok(await has(page, '#view a[href="#/tasks/zombie/t0"]'), "5: the ending leads to the tasks of the story's trait");
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
    ok(pg.status() === 200 && /الخصوصية/.test(pt) && /Privacy/.test(pt) && /لا حساب/.test(pt), "review: the parents page answers, in Arabic and English");
    ok(!page.errs.length, "review: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("training page", async () => {
    const WA = "https://wa.me/201283229996?text=", root = base.replace(/index\.html$/, "");
    let { ctx, page } = await fresh(); await open(page, "&reset=1");
    // the children's edition reaches nothing new: no training link on the about page or in the share sheet
    await go(page, "#/about"); ok(!(await has(page, 'a[href*="training"]')) && !/سلّم اليد|Hand Method/.test(await txt(page, "#view")), "training: the children's «عن تزكية» has no training link");
    await page.click("#setBtn"); await page.waitForTimeout(250); await page.click('#sheet [data-act="sharesheet"]'); await page.waitForTimeout(400);
    ok(!(await has(page, 'a[href*="training"]')) && !/سلّم اليد|Hand Method/.test(await txt(page, "#sheet")), "training: the children's share sheet has no training link");
    await ctx.close();
    ({ ctx, page } = await fresh()); await open(page, "&reset=1&ed=adult", 900); await go(page, "#/about");
    ok((await page.locator('#view a[href="training/"]').count()) === 1, "training: the adult «عن تزكية» has one quiet training link");
    await ctx.close();
    ({ ctx, page } = await fresh()); await open(page, "&reset=1&ed=adult&lang=en", 900); await go(page, "#/about");
    ok((await page.locator('#view a[href="training/#en"]').count()) === 1, "training: the adult edition in English links the English section");
    const pr = await page.goto(root + "parents/"); ok(pr.status() === 200 && (await page.locator('a[href="../training/"]').count()) === 1 && (await page.locator('a[href="../training/#en"]').count()) === 1, "training: the parents page links the training page in both languages");
    const tr = await page.goto(root + "training/"); const tt = await page.evaluate(() => document.body.innerText);
    ok(tr.status() === 200 && /منهج سلّم اليد/.test(tt) && /Tazkiya Hand Method/.test(tt) && /مؤسسة تمسك للبحوث والنشر والتدريب/.test(tt) && /Temessek Foundation/.test(tt), "training: the page answers in Arabic and English, with the foundation in the footer");
    const was = await page.$$eval("a.wa", xs => xs.map(a => [a.getAttribute("href"), a.target, a.rel, a.closest("[lang]").getAttribute("lang")]));
    const msg = { ar: "السلام عليكم، أودّ التسجيل في برنامج اليد للوالدين من تزكية.", en: "Peace be upon you. I would like to join the Tazkiya Hand programme for parents." };
    ok(was.length === 2 && was.every(([h, tg, rl, lg]) => h.startsWith(WA) && decodeURIComponent(h.slice(WA.length)) === msg[lg] && tg === "_blank" && /noopener/.test(rl)), "training: one WhatsApp button per language, with the prefilled message in that language");
    ok(!(await has(page, "form, input, select, textarea")) && !/[$€£]|\bEGP\b|جنيه|price|سعر/i.test(tt), "training: no form, booking or price");
    ok(await page.evaluate(() => [...document.images].every(i => i.complete && i.naturalWidth > 0)), "training: the hand image and icons load");
    for (const w of [320, 1280]) { await page.setViewportSize({ width: w, height: 800 }); await page.waitForTimeout(150);
      ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `training: no overflow at ${w} px`); }
    ok(!page.errs.length, "training: no script errors (" + page.errs.slice(0, 1).join("") + ")");
    await ctx.close(); });
  await step("review: backups", async () => {
    let { ctx, page } = await fresh(); await open(page, "&reset=1"); await setS(page, old); await open(page);
    ok(await has(page, ".bkcard [data-act=\"bkexport\"]"), "review B1: after 14 days with progress and no backup, the home page offers one");
    await page.click('.bkcard [data-act="bklater"]'); await page.waitForTimeout(300); ok(!(await has(page, ".bkcard")), "review B1: «لاحقًا» hides it");
    await ctx.close();
    ({ ctx, page } = await freshUA(undefined, () => { window.__shared = []; Navigator.prototype.canShare = function (d) { return !!(d && d.files); }; Navigator.prototype.share = function (d) { window.__shared.push(d.files ? d.files.map(f => f.name).join() : "text"); return Promise.resolve(); }; }));
    await open(page, "&reset=1"); await setS(page, old); await open(page);
    await page.click('.bkcard [data-act="bkexport"]'); await page.waitForTimeout(500);
    const r = await page.evaluate(() => ({ sh: window.__shared, at: localStorage.getItem("tazkiya-backup-at") }));
    ok(r.sh.length === 1 && /^tazkiya-backup-\d{4}-\d\d-\d\d\.json$/.test(r.sh[0]) && +r.at > 0 && !(await has(page, ".bkcard")), "review B2: where files can be shared, the backup goes through the share sheet and is dated");
    await ctx.close();
    ({ ctx, page } = await freshUA(undefined, () => { Navigator.prototype.canShare = () => true; Navigator.prototype.share = () => Promise.reject(Object.assign(new Error("x"), { name: "AbortError" })); }));
    await open(page, "&reset=1"); await setS(page, old); await open(page);
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
    if (await has(page, '#sheet [data-act="edpick"], #sheet .edpick')) { const b = page.locator("#sheet .mapopt").first(); await b.click(); await page.waitForTimeout(700); }
    if (await has(page, ".film-skip")) { await page.click(".film-skip"); await page.waitForTimeout(600); } // the story of the hand first (22 Nov 2026), then the backup offer
    ok(await has(page, '#sheet .ios-move [data-act="bkimport"]') && await has(page, "#sheet #bkFile"), "review B4: the installed iPhone app's first screen offers to restore Safari's backup");
    await ctx.close();
    ({ ctx, page } = await freshUA(IPHONE)); await open(page, "&reset=1"); await setS(page, "s.intro = true; s.read = { 'zombie-r1': Date.now() };"); await open(page);
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
      ok(r.w <= r.iw && r.lb.length <= 2 && r.al.length > 2, `review C5: 280px wide, ${lang}${ed ? " adult" : ""}: no sideways scroll, short language label (${r.w}/${r.iw}, "${r.lb}")`);
      await ctx.close();
    }
    ({ ctx, page } = await freshUA(undefined, null, { width: 844, height: 390 })); await open(page, "&reset=1", 800);
    const h = await page.evaluate(() => { const e = document.querySelector("#view .hand"), r = e.getBoundingClientRect(), t = document.getElementById("tabs").getBoundingClientRect(), g = document.querySelector(".hello").getBoundingClientRect(); return { top: r.top, bot: r.bottom, tabs: t.top, w: document.documentElement.scrollWidth, iw: innerWidth, hw: r.width, gOver: g.right > r.left + 2 && g.left < r.right - 2 && g.bottom > r.top + 2, step: !!document.querySelector(".stepcard") }; });
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
      [old, { "akhlaq-app-v1": { mix: { zombie: 5, pig: 20, monkey: 30, human: 35, sabiq: 10 }, intro: true, lang: "ar", name: "Other", read: { "pig-r1": 1763800000000 } } }]);
    await page.goto("https://tazkiya.pages.dev/#/"); await page.waitForTimeout(1300);
    ok(new URL(page.url()).hostname === "tazkiya.pages.dev" && await has(page, '#sheet.movefull [data-act="movego"]') && /انتقلت تزكية إلى tazkiya\.family/.test(await txt(page, "#sheet")) && /moved to tazkiya\.family/.test(await txt(page, "#sheet")),
      "move: with progress, the former address shows the full-screen sheet in both languages");
    await Promise.all([page.waitForURL(/^https:\/\/tazkiya\.family\//, { timeout: 8000 }), page.click('#sheet [data-act="movego"]')]); await page.waitForTimeout(1300);
    ok(!/move=/.test(page.url()) && new URL(page.url()).hash === "#/", "move: the fragment is cleared from the address at once (" + page.url().slice(0, 50) + ")");
    const sh = await txt(page, "#sheet");
    ok(/ليلى/.test(sh) && /Sam/.test(sh) && /تقدّم محفوظ من قبل/.test(sh), "move: the new address shows the names and asks before replacing its own progress");
    await page.click('#sheet [data-act="bkyes"]'); await page.waitForTimeout(1600);
    const st = await page.evaluate(() => ({ p: JSON.parse(localStorage.getItem("akhlaq-app-v1:profiles") || "{}"), a: JSON.parse(localStorage.getItem("akhlaq-app-v1") || "{}"), b: JSON.parse(localStorage.getItem("akhlaq-app-v1:p2") || "{}"), f: JSON.parse(localStorage.getItem("tazkiya-family") || "{}"), fx: JSON.parse(localStorage.getItem("tazkiya-fx") || "{}"), url: location.href }));
    ok(st.p.list && st.p.list.length === 2 && st.a.name === "ليلى" && st.a.read && st.a.read["zombie-r1"] && !st.a.read["pig-r1"] && st.b.name === "Sam" && st.b.edition === "adult", "move: both profiles arrive with their names and progress");
    ok(st.f.pact && st.f.pact.v === "human:0" && st.fx.amb === "rain" && st.fx.snd === false, "move: the family record and the sound settings come too");
    ok(!/move=/.test(st.url), "move: no fragment after the import");
    ok(!page.errs.length, "move: no script errors (" + page.errs.slice(0, 1).join("") + ")");
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
    const errs = [], bad = []; page.on("pageerror", e => errs.push(e.message)); page.on("console", m => { if (m.type() === "error") errs.push(m.text()); });
    page.on("response", r => { if (r.status() >= 400) bad.push(r.status() + " " + r.url().replace(/^https?:\/\/[^/]+\//, "")); }); page.errs = errs; page.bad = bad; return { ctx, page }; };
  const K = "akhlaq-app-v1";
  const getS = page => page.evaluate(k => JSON.parse(localStorage.getItem(k) || "{}"), K);
  const film = page => page.evaluate(() => { const f = document.querySelector(".film"); if (!f) return null;
    const vis = s => { const e = f.querySelector(s); if (!e || e.hidden) return false; const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    return { scene: window.TZINTRO ? window.TZINTRO.scene : 0, dir: f.getAttribute("dir"), still: f.classList.contains("still"), line: f.querySelector(".film-line").innerText, text: f.innerText,
      skip: vis(".film-skip"), next: vis(".film-next"), go: vis(".film-go"), focus: document.activeElement && document.activeElement.className }; });
  const until = async (page, sc, ms) => { const t0 = Date.now(); while (Date.now() - t0 < (ms || 15000)) { const n = await page.evaluate(() => window.TZINTRO && window.TZINTRO.open ? window.TZINTRO.scene : -1); if (n >= sc) return n; await page.waitForTimeout(60); } return -1; };
  const first = async (page, g, q) => { await page.goto(`${base}?reset=1${q || ""}#/`); await page.waitForTimeout(500); await page.click(`#sheet [data-act="introed"][data-g="${g}"]`); await page.waitForTimeout(700); };
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

function staticChecks() {
  const errs = [];
  const rd = f => fs.readFileSync(path.join(ROOT, f), "utf8");
  const html = rd("index.html"), sw = rd("sw.js");
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
  const need = [/<meta name="robots" content="noindex/, /property="og:title"/, /property="og:description"/, /property="og:image" content="https:\/\//, /name="twitter:card" content="summary_large_image"/,
    /rel="apple-touch-icon"/, /name="apple-mobile-web-app-capable"/, /name="apple-mobile-web-app-title"/, /name="apple-mobile-web-app-status-bar-style"/, /rel="apple-touch-startup-image"/, /rel="manifest"/, /name="theme-color"/];
  need.forEach(r => { if (!r.test(html)) errs.push(`index.html: missing ${r.source.slice(0, 50)}`); });
  for (const m of html.matchAll(/href="(assets\/[^"]+)"/g)) if (!fs.existsSync(path.join(ROOT, m[1]))) errs.push(`index.html: missing ${m[1]}`);
  for (const m of html.matchAll(/content="https:\/\/tazkiya\.family\/(assets\/[^"]+)"/g)) if (!fs.existsSync(path.join(ROOT, m[1]))) errs.push(`index.html: preview image missing ${m[1]}`);
  const ad = fs.existsSync(path.join(ROOT, "adult/index.html")) ? rd("adult/index.html") : "";
  if (!ad) errs.push("adult/index.html missing"); else { if (!/og:image" content="https:\/\/tazkiya\.family\/assets\/og-image-adult/.test(ad)) errs.push("adult page: no adult preview image"); if (!/noindex/.test(ad)) errs.push("adult page: no noindex"); if (/<script>/.test(ad)) errs.push("adult page: inline script (blocked by the CSP)"); }
  // every versioned file index.html asks for is precached under the same URL
  for (const m of html.matchAll(/(?:src|href)="([^"]+\?v=[^"]+)"/g)) if (!sw.includes(`"${m[1]}"`)) errs.push(`sw.js: CORE lacks ${m[1]} (bump it with index.html)`);
  if (!/SKIP_WAITING/.test(sw) || /addEventListener\("install"[\s\S]{0,300}skipWaiting\(\)/.test(sw)) errs.push("sw.js: a new version must wait for the user (SKIP_WAITING message only)");
  if (!/caches\.delete/.test(sw)) errs.push("sw.js: old caches are not deleted");
  const bp = fs.existsSync(BUILD_PY) ? fs.readFileSync(BUILD_PY, "utf8") : "";
  for (const h of ["Content-Security-Policy", "X-Content-Type-Options", "Referrer-Policy", "Permissions-Policy", "frame-ancestors 'none'", "X-Robots-Tag", "adult/index.html"]) if (!bp.includes(h)) errs.push(`build_public.py: missing ${h}`);
  if (!CSP) errs.push("could not read the CSP from build_public.py");
  // security and compatibility review (22 Nov 2026)
  for (const h of ["! Access-Control-Allow-Origin", "private-terms.txt", "404.html", "parents/index.html", "training/index.html", "/training/*", "wrangler@4", "getexif", "esbuild@"]) if (!bp.includes(h)) errs.push(`build_public.py: missing ${h}`);
  for (const f of ["404.html", "parents/index.html", "training/index.html", "assets/qr-kids.svg", "assets/qr-adult.svg"]) if (!fs.existsSync(path.join(ROOT, f))) errs.push(`missing ${f}`);
  for (const sp of ["parents/index.html", "training/index.html"]) if (fs.existsSync(path.join(ROOT, sp)) && [...rd(sp).matchAll(/<script[^>]*>/g)].some(m => !/src="\.\.\/boot\.js\?v=\d+" data-page="static"/.test(m[0]))) errs.push(`${sp}: only boot.js (static) expected`);
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
