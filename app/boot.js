/* تزكية: runs first, before any storage is read or written (index.html loads it in <head>, without defer).
 * www.tazkiya.family goes to https://tazkiya.family (same path, query and hash).
 * tazkiya.pages.dev (the former address): every origin has its own storage, so a visitor
 * with no saved progress goes straight to the new address, and a visitor with progress stays: app.js then opens the
 * sheet that carries the progress over inside the URL fragment (#move=…), which is never sent to any server.
 * A static page (data-page="static", the parents and training pages) always goes straight to the new address. */
(function () {
  var NEW = "https://tazkiya.family", h = location.hostname, rest = location.pathname + location.search + location.hash;
  if (h === "www.tazkiya.family") { location.replace(NEW + rest); return; }
  // only the former address itself moves: preview hosts (server-preview.tazkiya.pages.dev, <hash>.tazkiya.pages.dev) stay testable
  if (h !== "tazkiya.pages.dev") return;
  var me = document.currentScript, stat = !!(me && me.getAttribute("data-page") === "static"), has = false;
  var full = function (v) { return Array.isArray(v) ? v.length > 0 : !!v && typeof v === "object" && Object.keys(v).length > 0; };
  if (!stat) {
    try {
      for (var i = 0; i < localStorage.length && !has; i++) {
        var k = localStorage.key(i);
        if (/^akhlaq-app-v1(:p[1-9])?$/.test(k)) {
          var s = JSON.parse(localStorage.getItem(k) || "{}") || {};
          has = ["read", "answered", "tasks", "bookRead", "my", "tr", "eve", "chs", "khab"].some(function (f) { return full(s[f]); }) || (typeof s.name === "string" && s.name.trim() !== "");
        } else if (k === "tazkiya-family") {
          var f = JSON.parse(localStorage.getItem(k) || "{}") || {};
          has = !!f.pact || full(f.seen) || full(f.past);
        }
      }
    } catch (e) { has = false; }
  }
  if (!has) { location.replace(NEW + rest); return; }
  window.TZ_MOVE = true; // app.js: moveSheet()
})();
