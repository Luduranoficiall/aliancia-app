self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.open("aliancia-cache").then(async (cache) => {
      const cached = await cache.match(e.request);
      if (cached) return cached;

      const response = await fetch(e.request);
      cache.put(e.request, response.clone());
      return response;
    })
  );
});
