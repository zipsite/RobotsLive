self.addEventListener('install', event => {
    
    function onInstall () {
        return caches.open('static')
          .then(cache => cache.addAll([
            '/index.html',
            '/catalog.html',
            '/access/config/android-icon-144x144.png',
            '/access/config/android-icon-192x192.png',
            '/access/config/android-icon-36x36.png',
            '/access/config/android-icon-48x48.png',
            '/access/config/android-icon-72x72.png',
            '/access/config/android-icon-96x96.png',
            '/access/config/apple-icon-114x114.png',
            '/access/config/apple-icon-120x120.png',
            '/access/config/apple-icon-144x144.png',
            '/access/config/apple-icon-152x152.png',
            '/access/config/apple-icon-180x180.png',
            '/access/config/apple-icon-57x57.png',
            '/access/config/apple-icon-60x60.png',
            '/access/config/apple-icon-72x72.png',
            '/access/config/apple-icon-76x76.png',
            '/access/config/apple-icon-precomposed.png',
            '/access/config/apple-icon.png',
            '/access/config/browserconfig.xml',
            '/access/config/favicon-16x16.png',
            '/access/config/favicon-32x32.png',
            '/access/config/favicon-96x96.png',
            '/access/config/favicon.ico',
            '/access/config/logosqr256.png',
            '/access/config/logosqr512.png',
            '/access/config/manifest.json',
            '/access/config/ms-icon-144x144.png',
            '/access/config/ms-icon-150x150.png',
            '/access/config/ms-icon-310x310.png',
            '/access/config/ms-icon-70x70.png',
            '/access/css/elements.css',
            '/access/css/fonts.css',
            '/access/css/global-params.css',
            '/access/css/main.css',
            '/access/css/media-query.css',
            '/access/css/normalise.css',
            '/access/css/params.css',
            '/access/css/skelet.css',
            '/access/css/var.css',
            '/access/fonts/JetBrainsMono-Bold.ttf',
            '/access/fonts/JetBrainsMono-ExtraBold.ttf',
            '/access/fonts/JetBrainsMono-Medium.ttf',
            '/access/fonts/JetBrainsMono-MediumItalic.ttf',
            '/access/icon/arrow-down.svg',
            '/access/icon/arrow-right.svg',
            '/access/icon/nav-burger.svg',
            '/access/img/Frame 5.png',
            '/access/img/banner1.jpg',
            '/access/img/image 1.png',
            '/access/img/image 2.png',
            '/access/img/robo_const.png',
            '/access/img/robo_cook.png',
            '/access/img/spot.png',
            '/access/js/main.js',
            '/access/js/nav-menu.js',
            '/access/js/resize-view.js',
            '/access/js/toggle-theme.js',
          ])
        );
      }
    
      event.waitUntil(onInstall(event));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(res => {
              return caches.open('dynamic')
                .then(cache => {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            });
        }
      })
    );
});