/* The app moved to https://tazkiya.pages.dev. Retire the old offline copy and send open windows there. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: "window" })) c.navigate("https://tazkiya.pages.dev/");
  })());
});
