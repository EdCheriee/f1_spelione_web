'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7d980e6be82dd33893f39d652d8a99a1",
".git/config": "e2a140dd07868bd05411cf7f26943e81",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a10948faecbe9bb23493658e06737d8e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a7b6660ef5664dbf819f24d241a08c5e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "345446d7a1d30b9a38c725ca2610359a",
".git/logs/refs/heads/master": "3418f5a8f18ec17bbba55e7d8beeb27c",
".git/logs/refs/remotes/web_origin/master": "c8bf1dee688c4d22398b73b3d1a1477d",
".git/objects/05/46335c917af30f309c6c7927e417dd035fe71f": "df2f5ce2a1726ad846c827631c578b7c",
".git/objects/07/92271a2d9bf20cb7ec8a233640c1638fbd6226": "3f8dc8bcef57eab8f16dce81df592834",
".git/objects/0c/5fe286c96dde618eb54a115cd1042e2b741aae": "a96c1246210fed10f227b1ba0bbbdea1",
".git/objects/16/08e241a538cb56d8d48c3032d10f1e91f2fae8": "fbe7ba889a1df663cb3b29aa3a478ff2",
".git/objects/17/1de8d812d2df7493017a480b6700eac6f2bba0": "e6a8162e61981ff8024b251b9699dd2f",
".git/objects/1a/651fc6b57e19dad3892d8b05bce87e751235db": "986cae668cca69494c31a23ae9be15e1",
".git/objects/1c/dc2818020dd499abf376f5bcde8e810c23114f": "13607b9ca8b298e47931e52153c637bf",
".git/objects/1e/d0ada506245b40f07d7c65db18c77933cc271a": "1d30c0b7fddfbdaaaa72b93c38cbd8bc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/36560efa227773456338a400a773ee5da5f4fb": "840637b3df5fbb328b155358234b9ac5",
".git/objects/29/459ad349ca1ee84e2b16396f1781236e854b23": "9600664a915d581f8e5145f3287d6c65",
".git/objects/2d/e3e83a53aa8af3f4edfaa91ee8462d8025a017": "07dd1cdca6117c3270d4c87f8916b3fb",
".git/objects/2e/df07f32bd8d1a80f074f9aa0c8a0019a0a0cbf": "20943c3cbede15b5e745923f2f70d0de",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/30/b13c891111f2302cc5e0694678da9558e22a3c": "d31ae0e3a63628e16075286220d710fa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/ea21e7cf43ce3c8fd73b8b9a6139b1650d3f5d": "77a84a83b7b88d3bd586e5ed7b3b7cca",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/c4d05d3ae50f8028109bd6e4ef78a5ea151e4a": "32f8796f8e72c3440757ed627e8f0ce7",
".git/objects/5d/23861ba3e741a5078ca507141bf56e0392f48d": "2b1ec0ed679295e0c6a3849923aa7d85",
".git/objects/5e/0aa539f58e33294c16dc7c9fe81375d514fdc6": "19d69ede5f265e5bac7493c89602280f",
".git/objects/69/cf4ab346fe838807159a89cf89b40ade333395": "04d030f67c76348e7c3bc395fcb9c0c5",
".git/objects/70/6d22ea46a36413c221d32593371d8374dd66bf": "8c4604221257e7aa4b6f449f86280aef",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/75/93353b5ec84ad9da56fb39ffcd35f8a7a85b42": "60d2af5c4988682e139bd67c343baaa9",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/7a/8eefb724683684554f3a4b595f437dd026bd9e": "95cb044136d26611759288164b1c5291",
".git/objects/7c/5ab57801c8a3ec97f8ad3cff92b64c9e4ca0b2": "e55f41154924d22b238a477e418f1615",
".git/objects/7e/6b886e6af708ad58370d04900d5e8bbc8eb771": "c3263f15abafeb09caa5d0d9c96e1ef4",
".git/objects/86/4f13fef22a5a65dcd998fd4840fc8c2626a717": "2902d838615f8fbf44ffac1797955e53",
".git/objects/86/db499074d67e35e4598c5c88d2d8aa1d5304af": "9a00b2c6c6035fdc1b7f6802d6167c90",
".git/objects/87/d979dff280b6c52793b9c383028dd89414a13d": "745889889868f20a1bd0245455bcdb54",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b292b6e4383e10fbb051447b6f93dc73f5cbe2": "ba8eca1c3e4ebd4eb3220374aff12500",
".git/objects/8c/bac2243b0e3de305f7b57feeb8c3c74c5dfbf0": "a03e22326e85350659498e209877ce59",
".git/objects/8f/7b17d0bb5940a7f2d4f74d2dfbaf980f0fb625": "a794a459cb9731b2e7af6f8dc075759e",
".git/objects/95/e5a98538be5c37d6873596decc51af2d0810ec": "b34c979cd5e7445a5b6693f242d71fe0",
".git/objects/a4/6a865229b54f45abc94ad0b185f26388815b31": "d9fcb1ed3bedd49cb74c5cff4df2505d",
".git/objects/a4/d33887506cb4bc891abfe0186cb86fb8c65375": "5e3d9049965da053222bb1dd37370468",
".git/objects/a8/ca12810d2523be80c2c01ae16ebed33dd7811f": "5ca1d944108277981f92e257d847db66",
".git/objects/aa/4b891e0dabb66a2abe40d0b1f8b1eeb6c093fb": "bb51c6d773be0d641ba409c4a481cb75",
".git/objects/aa/f7c88e19c104440fb007def9ce30d53b7429a3": "d76ce05946ac88aeb06c8f707d493fa7",
".git/objects/ac/2ffa4df638854648068176d75a34635f0eddad": "2ff85039c2f92455a2ad8fb22bbf3f15",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/0329522c59bc5732142ed5e95cdb5bec7e1d29": "4aea169ddc10f3d61181f5dff36324f5",
".git/objects/c0/8f996a0248fe86d0ba932da6adb7234c596061": "ecf717ab7e4123558d25eeb40f95056f",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/ce/95064a0bd530fee2336135c4ff4d9d38a91a27": "4c327f197e3ed5d50fcd9869730b31e3",
".git/objects/d3/e721c2875d80f3a847bb7e87dbc62715811ade": "171c6993bedfcd990ffecb4ed0cd49cb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ac6a3aeded0f4a083be0906e520f24d6d214ee": "8202426f29fdaa4e82e96fd974453a86",
".git/objects/d4/e9041c7084637212e37109352bd70862b49d48": "43089817024090e1212976dec2873869",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c8de318837e8bff1410b4d7283bbc5fa23261c": "fad15ae9db3b125064176f22df0ee8a1",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/737b6dd052ce09558a930e76a7ea0a17985ee4": "13006fe5458f32be31ac5dcb82d38634",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/203b4c93d655e114a2ef083a3cf10a1ae15ad1": "c61b0476a90de33a425be43a3811be15",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9b61e74a3009499a4b1ed3a933baee07b1d382": "4eb234e768aa046ce65da48c3cd55074",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/9a4e5ac8ab2dba88615c51bf42070c0019bac5": "5781b9ef90b1a687261d969986d359cd",
".git/objects/f8/194721e3cdaf00bceaf904feef1802c9a5ece1": "6afb4fe7013f9455a83af1c2a8bc1819",
".git/objects/fa/c2052a06fb0911a4cffc5e16342b18935f09e6": "9fd9e10ab015b0e3371624a2d6ed02a0",
".git/objects/fe/7f499735f8054e1dd502fcfd49dfde52234448": "041355f4b4d9076ab9d64df69090feb2",
".git/ORIG_HEAD": "302267f38392a3e8da52f98a0d79d03a",
".git/refs/heads/master": "7a0d721f95b294cff95aad1be367834c",
".git/refs/remotes/web_origin/master": "7a0d721f95b294cff95aad1be367834c",
"assets/AssetManifest.bin": "6a58ae66b3f1aba375f5afabb21d7b50",
"assets/AssetManifest.bin.json": "2cd98232555faeec9109c45d0becf5d2",
"assets/AssetManifest.json": "a33cc121ea81d0026e26978cf7e77122",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "562ae3d75a0407005ecc2c67d61697a4",
"assets/images/avatars/finish_flag.png": "a0778166f41f94481448e7b4cd68dcfa",
"assets/images/avatars/gaptolead.png": "b31ac36ec501e938a2a95a9febfe3fb5",
"assets/images/avatars/gaptolead.png~": "3995bfacba80304d08b8fc37f9317d4a",
"assets/images/avatars/graph.png": "cc6a1cabd3b03aa02823afdfca03b326",
"assets/images/avatars/leaderboard.png": "c227ac870dc62d9cfa137412269a4da4",
"assets/images/avatars/racetrack.png": "ab68b5463971576ad7390146fc8b2eab",
"assets/images/avatars/racetrack.png~": "2eb660e61a9c9a04d7a5cec01e67ad4d",
"assets/images/avatars/total_graph.png": "0d0f8ee828d342f3efc07cdc3de803c9",
"assets/NOTICES": "4c9d5704724a6d17a324528b1e74eeea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "417b16784edc4de3188725641c0d97ea",
"canvaskit/canvaskit.wasm": "8344472898c4104e4e502a142af64d0c",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "6972871f73f0272328299523b4eedc3d",
"canvaskit/chromium/canvaskit.wasm": "f83d3e290ee46fa59f0c88b38e065b50",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "fc20255ed74d86dc536182a2e90871cc",
"canvaskit/skwasm.wasm": "7bfff61f673c54dc91ad1015cedb43eb",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "fb1e5435e0aca4da4b0c89ead17e412f",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/android-icon-144x144.png": "c2a7e98c577e2da643afd72aaf6938f4",
"icons/android-icon-192x192.png": "5cd7ed8c4cdbc8e2856792d19866fab7",
"icons/android-icon-36x36.png": "56630d35223308a405e61ce4b56a89ec",
"icons/android-icon-48x48.png": "833d993127fcf987c7638e90ccbe33dc",
"icons/android-icon-72x72.png": "6159b576ef92edc9c1b05098eb72175b",
"icons/android-icon-96x96.png": "fb627cf84d03d7beae779bdf0bc11fc8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5dc3fdb63923ef53abd57cdeed85e9a8",
"/": "5dc3fdb63923ef53abd57cdeed85e9a8",
"main.dart.js": "671fbb83dc2b5dcd4ff954a1774626c9",
"manifest.json": "c6ccd48440b18c77869c79835efcca6b",
"version.json": "efed13efb1a694816a03db454930bc4d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
