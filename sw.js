self.addEventListener('install', event => {
  function onInstall() {
    return caches.open('static').then(cache => cache.addAll([
      '/access/js/xhr.js',
      '/access/js/loader.js',
      '/index.html',
      '/views/home.html',
      '/views/catalog.html',
      '/views/basket.html',
      '/views/staff.html'
    ]));
  }
  event.waitUntil(onInstall(event));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => {
    if (response) {
      return response;
    } 
    else {
      return fetch(event.request).then(res => {
        return caches.open('dynamic').then(cache => {
          cache.put(event.request.url, res.clone());
          return res;
        })
      });
    }
  }));
});