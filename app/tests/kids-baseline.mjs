// Dumps the visible text of every children's-edition route (AR/EN, 375 px) to a JSON file,
// to prove an app change leaves the children's edition unchanged. Usage: node tests/kids-baseline.mjs <out.json>
import http from "node:http"; import fs from "node:fs"; import path from "node:path"; import os from "node:os"; import vm from "node:vm";
import { fileURLToPath, pathToFileURL } from "node:url"; import { createRequire } from "node:module";
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sb = { window: {} }; vm.createContext(sb);
for (const f of ["content/content.js", "content/books.js"]) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), sb);
const C = sb.window.AKHLAQ_CONTENT, B = sb.window.AKHLAQ_BOOKS;
const R = ["#/", "#/tasks", "#/library", "#/about", "#/record", "#/sources"];
for (const s of Object.keys(C.stages)) { const st = C.stages[s]; R.push(`#/stage/${s}`, `#/tasks/${s}`, `#/quiz/${s}`); st.readings.forEach(r => R.push(`#/read/${s}/${encodeURIComponent(r.id)}`)); st.degrees.forEach((d, i) => d.story && R.push(`#/deg/${s}/${i}`)); }
B.forEach(b => R.push(`#/book/${b.id}`, `#/book/${b.id}/1`));
const srv = http.createServer((q, res) => { let p = path.join(ROOT, decodeURIComponent(new URL(q.url, "http://x").pathname)); if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, "index.html"); if (!fs.existsSync(p)) { res.writeHead(404).end(); return; } res.writeHead(200, { "content-type": { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css", ".webp": "image/webp", ".png": "image/png", ".woff2": "font/woff2", ".json": "application/json" }[path.extname(p)] || "application/octet-stream" }); fs.createReadStream(p).pipe(res); });
await new Promise(r => srv.listen(0, "127.0.0.1", r));
const req = createRequire(import.meta.url); let chromium;
for (const n of ["playwright", "playwright-core"]) { try { chromium = (await import(pathToFileURL(req.resolve(n)).href)).chromium; break; } catch (e) {} }
if (!chromium) { const npx = path.join(process.env.LOCALAPPDATA, "npm-cache/_npx"); const found = []; for (const d of fs.readdirSync(npx)) for (const n of ["playwright", "playwright-core"]) { const p = path.join(npx, d, "node_modules", n, "package.json"); if (fs.existsSync(p)) found.push({ dir: path.dirname(p), t: fs.statSync(p).mtimeMs }); } found.sort((a, b) => b.t - a.t); for (const f of found) { try { const m = createRequire(path.join(f.dir, "package.json"))(f.dir); if (m.chromium) { chromium = m.chromium; break; } } catch (e) {} } }
function chromePath() { const base = path.join(process.env.LOCALAPPDATA, "ms-playwright"); const dirs = fs.readdirSync(base).filter(d => /^chromium-\d+$/.test(d)).sort((a, b) => +b.split("-")[1] - +a.split("-")[1]); for (const d of dirs) { const p = path.join(base, d, "chrome-win64/chrome.exe"); if (fs.existsSync(p)) return p; } }
let browser; try { browser = await chromium.launch(); } catch (e) { browser = await chromium.launch({ executablePath: chromePath() }); } const out = {};
for (const lang of ["ar", "en"]) {
  const page = await (await browser.newContext({ viewport: { width: 375, height: 812 } })).newPage();
  await page.goto(`http://127.0.0.1:${srv.address().port}/index.html?intro=0&reset=1&lang=${lang}#/`); await page.waitForTimeout(500);
  for (const r of R) { await page.evaluate(h => { location.hash = h; }, r); await page.waitForTimeout(r.includes("book") || r.includes("library") || r.includes("stage") ? 260 : 120); out[lang + " " + r] = await page.evaluate(() => document.getElementById("view").innerText + "\n#TABS " + document.getElementById("tabs").innerText); }
}
await browser.close(); srv.close();
fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 1), "utf8"); console.log("routes", Object.keys(out).length);
