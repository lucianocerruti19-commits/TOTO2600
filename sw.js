self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("toto-cache").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "styles.css",
        "admin.html",
        "cliente.html",
        "cocina.html",
        "mozo.html"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});