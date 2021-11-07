// Files to cache
const cacheName = 'vedicMaths-v1';

const appShellFiles = ['https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.1.2/zephyr/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap',
    'https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/qs/6.10.1/qs.min.js',
    '/manifest.webmanifest',
    '/icon-192x192.png',
    '/icon-256x256.png',
    '/icon-384x384.png',
    '/icon-512x512.png',
    '/index.html',
    '/shishu.html',
    '/bal.html',
    '/kishor.html',
    '/favicon.ico',
    '/q.js', '/app.js',
    '/question.html']

// Installing Service Worker
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(appShellFiles);
    })());
});

// Fetching content using Service Worker
self.addEventListener('fetch', (e) => {
    e.respondWith((async () => {
        const r = await caches.match(e.request);
        console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
        if (r) return r;
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
    })());
});