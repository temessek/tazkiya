/* تزكية: عامل الخدمة للعمل دون اتصال والتثبيت (PWA).
 * Pages: network first (with a time limit), falling back to the saved copy offline.
 * Files: served from the cache, refreshed in the background; offline, a file asked for with a newer ?v= falls back
 * to the saved copy of the same file. A new version installs quietly and waits: the app shows "a new version is
 * ready" and the user chooses when to switch (SKIP_WAITING), so a page never changes under a reader.
 * Release: bump CACHE, and keep the ?v= numbers below equal to those in index.html (the smoke test checks this). */
const CACHE = "tazkiya-2026-11-24l";
const CORE = [
  "./", "index.html", "manifest.json", "boot.js?v=1", "styles.css?v=95", "app.js?v=102", "fx.js?v=2", "fallback.js?v=5", "content/content.js?v=34",
  "content/content-adult.js", "content/books.js",
  "assets/hand.webp", "assets/right-hand-virtues.webp", "intro.js?v=1",
  "assets/intro/s1-fitra.webp", "assets/intro/s2-toddler.webp", "assets/intro/s3-child.webp", "assets/intro/s4-guide.webp",
  "assets/intro/ov-mist.webp", "assets/intro/ov-plate.webp", "assets/intro/ov-knot.webp",
  "assets/icon-180.png", "assets/icon-192.png", "assets/icon-512.png", "assets/icon-maskable-512.png",
  "assets/fonts/plex-400-ar.woff2", "assets/fonts/plex-600-ar.woff2", "assets/fonts/plex-400-la.woff2",
  "assets/fonts/plex-600-la.woff2", "assets/fonts/amiri-400.woff2", "assets/fonts/amiri-700.woff2", "assets/fonts/cormorant-var.woff2",
  "assets/vignettes/book-zombie.webp", "assets/vignettes/book-zombie-2.webp", "assets/vignettes/book-pig.webp", "assets/vignettes/book-pig-2.webp",
  "assets/vignettes/book-monkey.webp", "assets/vignettes/book-monkey-2.webp", "assets/vignettes/book-human.webp", "assets/vignettes/book-human-2.webp",
  "assets/vignettes/book-sabiq.webp", "assets/vignettes/book-sabiq-2.webp"
];
const PAGE_WAIT = 5000; // ms before a slow network gives way to the saved page

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(CORE.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => null)))));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("message", e => { if (e.data && e.data.type === "SKIP_WAITING") self.skipWaiting(); });

const scopeUrl = p => new URL(p, self.registration.scope).href;

function pageFromNetwork(req) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("slow")), PAGE_WAIT);
    fetch(req).then(r => { clearTimeout(timer); resolve(r); }, err => { clearTimeout(timer); reject(err); });
  });
}

self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== self.location.origin) return;
  if (url.pathname.startsWith(new URL(self.registration.scope).pathname + "api/")) return; // the server's answers are never cached
  if (req.mode === "navigate") {
    // the adult page is the app with the adult edition's preview tags; offline, open the app in that edition
    if (/\/adult\/(index\.html)?$/.test(url.pathname)) {
      e.respondWith(pageFromNetwork(req).catch(() => Response.redirect(scopeUrl("./?ed=adult"), 302)));
      return;
    }
    // other pages beside the app (the parents page, a missing address): from the network, never saved as the app's page
    const root = new URL(self.registration.scope).pathname;
    if (url.pathname !== root && url.pathname !== root + "index.html") {
      e.respondWith(fetch(req).then(r => { if (r && r.ok && r.type === "basic") { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); } return r; })
        .catch(() => caches.match(req, { cacheName: CACHE }).then(r => r || new Response("offline", { status: 503, headers: { "content-type": "text/plain; charset=utf-8" } }))));
      return;
    }
    e.respondWith(pageFromNetwork(req).then(r => {
      if (r && r.ok && r.type === "basic") { const cp = r.clone(); caches.open(CACHE).then(c => c.put("index.html", cp)); }
      return r;
    }).catch(() => caches.match("index.html", { cacheName: CACHE }).then(r => r || caches.match("./")).then(r => r || new Response("offline", { status: 503, headers: { "content-type": "text/plain; charset=utf-8" } }))));
    return;
  }
  e.respondWith(caches.open(CACHE).then(c => c.match(req).then(hit => {
    const net = fetch(req).then(r => { if (r && r.ok && r.type === "basic") c.put(req, r.clone()); return r; });
    if (hit) { e.waitUntil(net.catch(() => null)); return hit; }
    return net.catch(() => c.match(req, { ignoreSearch: true }).then(r => r || new Response("", { status: 504 })));
  })));
});
