const CACHE_NAME = 'bobines-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Installation du Service Worker et mise en cache des fichiers
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Distribution des fichiers même sans connexion
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
