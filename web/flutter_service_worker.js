'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2f52e4c6e6a4971aff93a6aeeb3ea5e7",
"assets/AssetManifest.bin.json": "126a50f6149da3720379caf93554b9cd",
"assets/AssetManifest.json": "070ae6f143cf495f2d9acba48bbaadf6",
"assets/assets/icons/app_logo.png": "11b2eae164be13aed5c108c42a59d870",
"assets/assets/icons/dein_roll.svg": "ada1688d0b879c8a3b3ff19b02ca41bd",
"assets/assets/icons/document.svg": "cd791b3531958512bb7d9bcb4eee5c0a",
"assets/assets/icons/dropdown.svg": "48f41e0f918ffd064e63c27f75ac916b",
"assets/assets/icons/label.svg": "72442704e6ac9794b4dd49e3b750adc8",
"assets/assets/icons/light_bulb.svg": "6622cd5de176200479ce706fd15de7d6",
"assets/assets/icons/mindestan.svg": "8ff3d6916867e82715bfc2665d7950eb",
"assets/assets/icons/more.svg": "1b798480293669a05212284b16eb49ee",
"assets/assets/icons/pen.svg": "c0e623006f39a9e76aee36f6f3e32a89",
"assets/assets/icons/proceed.svg": "89cca4a591a8a69ecf590c63f0a195b4",
"assets/assets/icons/trash.svg": "84756d550c641fcc29b135edff868b20",
"assets/assets/images/app-store-badge.png": "6fc6b9412e271f1cf7a640202f8fab37",
"assets/assets/images/document.png": "8f2411fd08112f1d680fbfd3ec0af07a",
"assets/assets/images/google-play-badge.png": "ad59e1ae38eff2df6f80a48bf1a318d8",
"assets/assets/images/google_logo.png": "906a0e294ed92a7ba8a9fd79f3c1000f",
"assets/assets/images/logo.png": "0b63ae130d2794ea23465951625c2048",
"assets/assets/images/splash.png": "889ec30e3ea4b7f05c497ebc84b84f83",
"assets/assets/locale/en.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "d4276c01db65c5b124dc2c09e8324b91",
"assets/NOTICES": "7595855e5d7a2650849e76a744c1d404",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "119a2f9a386597dbb32a6b1132e29d5b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "cdff2824b5af81e4190f4e5db19de039",
"icons/android-icon-192x192.png": "ad7c74564dbddc2dabac90d8ddde54e7",
"icons/android-icon-512x512.png": "47c7823dc042624d46bb68a835190811",
"icons/apple-touch-icon.png": "8cefdb54f388f0ac63c891d951c0139c",
"icons/app_logo.png": "11b2eae164be13aed5c108c42a59d870",
"icons/favicon-16x16.png": "a7ceb73cf079dd703da6a2a5a65ab1f0",
"icons/favicon-32x32.png": "ed3b83a3c001f493a2d3feb47c61387b",
"icons/favicon.ico": "119a2f9a386597dbb32a6b1132e29d5b",
"index.html": "226fd220b9866a2b72137883b8f432f9",
"/": "226fd220b9866a2b72137883b8f432f9",
"main.dart.js": "3d1e9d9701be4edf438a06c78015a545",
"manifest.json": "99ea8ddae0d43b8b2f66920441ddfa1a",
"splash/img/dark-1x.png": "1b4b7c3f94f3dfcc1c5502b3eaa3d2a4",
"splash/img/dark-2x.png": "110cb5bbf1a3e6bfa32ee40fb0cf6f5b",
"splash/img/dark-3x.png": "638aab95db2ee0011072d3f533125c24",
"splash/img/dark-4x.png": "9b781128884631040c856b013808d352",
"splash/img/light-1x.png": "1b4b7c3f94f3dfcc1c5502b3eaa3d2a4",
"splash/img/light-2x.png": "110cb5bbf1a3e6bfa32ee40fb0cf6f5b",
"splash/img/light-3x.png": "638aab95db2ee0011072d3f533125c24",
"splash/img/light-4x.png": "9b781128884631040c856b013808d352",
"version.json": "350de417e55ba152c0678f726acebf29"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
