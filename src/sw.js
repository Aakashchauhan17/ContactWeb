const version = "1"
var cacheName = 'ContactWeb';
var filesToCache = [
  './',
  './index.html',
  './app/app.component.ts',
  './app/app.component.html',
  './app/app.component.css' 
  // '/main.ts',
  // '/styles.css'
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});