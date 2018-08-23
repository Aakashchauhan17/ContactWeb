// importScripts('/cache-polyfill.js');

// const version = "1.0";
// const cacheName = `ContactWeb-${version}`;
// self.addEventListener('install', e => {
//   const timeStamp = Date.now();
//   e.waitUntil(
//     caches.open(cacheName).then(cache => {
//       return cache.addAll([
//         `/`,
//         `/index.html`,
//         `/styles/main.css`
//       ])
//           .then(() => self.skipWaiting());
//     })
//   );
// });

// self.addEventListener('activate', event => {
//   event.waitUntil(self.clients.claim());
// });

// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.open(cacheName)
//       .then(cache => cache.match(event.request, {ignoreSearch: true}))
//       .then(response => {
//       return response || fetch(event.request);
//     })
//   );
// });
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