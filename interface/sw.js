// Service Worker for Ambience - Practical Records (GitHub Pages Interface)
const CACHE_NAME = 'ambience-interface-v1.0.0';
const STATIC_CACHE = 'ambience-interface-static-v1.0.0';
const DYNAMIC_CACHE = 'ambience-interface-dynamic-v1.0.0';

// Detect if running on GitHub Pages
const isGitHubPages = self.location.hostname.includes('github.io');
const baseUrl = '..';
const interfaceUrl = '.';

// Files to cache immediately
const STATIC_FILES = [
    `${interfaceUrl}/`,
    `${interfaceUrl}/index.html`,
    `${interfaceUrl}/styles.css`,
    `${interfaceUrl}/script.js`,
    `${interfaceUrl}/manifest.json`,
    `${baseUrl}/README.md`,
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.4.0/github-markdown-dark.min.css',
    'https://cdn.jsdelivr.net/npm/marked@9.1.2/marked.min.js',
    'https://cdn.jsdelivr.net/npm/dompurify@3.0.5/dist/purify.min.js'
];

// Files to cache dynamically
const CACHE_PATTERNS = [
    /.*\/record\/.*\.md$/,  // All markdown files in record directory
    /.*\.css$/,             // All CSS files
    /.*\.js$/,              // All JavaScript files
    /.*\.json$/             // All JSON files
];

// Install event - cache static files
self.addEventListener('install', event => {
    console.log('[SW] Installing service worker...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('[SW] Caching static files');
                return cache.addAll(STATIC_FILES);
            })
            .then(() => {
                console.log('[SW] Static files cached successfully');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('[SW] Failed to cache static files:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('[SW] Activating service worker...');
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[SW] Service worker activated');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve cached content with network fallback
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip chrome-extension requests
    if (url.protocol === 'chrome-extension:') {
        return;
    }
    
    event.respondWith(
        caches.match(request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    console.log('[SW] Serving from cache:', request.url);
                    return cachedResponse;
                }
                
                // Fetch from network
                return fetch(request)
                    .then(response => {
                        // Check if we should cache this response
                        if (shouldCache(request.url)) {
                            const responseClone = response.clone();
                            caches.open(DYNAMIC_CACHE)
                                .then(cache => {
                                    console.log('[SW] Caching dynamic content:', request.url);
                                    cache.put(request, responseClone);
                                });
                        }
                        
                        return response;
                    })
                    .catch(error => {
                        console.error('[SW] Fetch failed:', error);
                        
                        // Serve offline fallback for HTML requests
                        if (request.headers.get('accept').includes('text/html')) {
                            return caches.match('/index.html');
                        }
                        
                        throw error;
                    });
            })
    );
});

// Helper function to determine if a URL should be cached
function shouldCache(url) {
    // Cache local content (GitHub Pages aware)
    if (url.includes(self.location.origin)) {
        return true;
    }
    
    // Cache markdown files
    if (CACHE_PATTERNS.some(pattern => pattern.test(url))) {
        return true;
    }
    
    // Cache CDN resources
    if (url.includes('cdnjs.cloudflare.com') || 
        url.includes('fonts.googleapis.com') ||
        url.includes('cdn.jsdelivr.net')) {
        return true;
    }
    
    return false;
}

// Message event - handle messages from main thread
self.addEventListener('message', event => {
    const { data } = event;
    
    switch (data.action) {
        case 'skipWaiting':
            self.skipWaiting();
            break;
            
        case 'clearCache':
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => caches.delete(cacheName))
                );
            }).then(() => {
                console.log('[SW] All caches cleared');
                event.ports[0].postMessage({ success: true });
            });
            break;
            
        case 'getCacheStatus':
            caches.keys().then(cacheNames => {
                event.ports[0].postMessage({ 
                    caches: cacheNames,
                    version: CACHE_NAME
                });
            });
            break;
            
        default:
            console.log('[SW] Unknown message:', data);
    }
});

// Background sync for offline content updates
self.addEventListener('sync', event => {
    if (event.tag === 'content-update') {
        event.waitUntil(updateContent());
    }
});

// Update content when back online
async function updateContent() {
    try {
        console.log('[SW] Updating content in background...');
        
        // Update main content files (GitHub Pages paths)
        const cache = await caches.open(DYNAMIC_CACHE);
        const requests = [
            `${baseUrl}/README.md`,
            `${baseUrl}/record/cpp/README.md`,
            `${baseUrl}/record/dsa/README.md`, 
            `${baseUrl}/record/de/README.md`
        ];
        
        for (const url of requests) {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    await cache.put(url, response);
                    console.log('[SW] Updated cache for:', url);
                }
            } catch (error) {
                console.warn('[SW] Failed to update:', url, error);
            }
        }
        
        console.log('[SW] Content update completed');
    } catch (error) {
        console.error('[SW] Content update failed:', error);
    }
}

// Push notification handler (for future enhancements)
self.addEventListener('push', event => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/icon-192.png',
            badge: '/icon-72.png',
            tag: 'ambience-update',
            actions: [
                {
                    action: 'view',
                    title: 'View Updates'
                },
                {
                    action: 'dismiss', 
                    title: 'Dismiss'
                }
            ]
        };
        
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});

// Notification click handler
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    if (event.action === 'view') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

console.log('[SW] Service worker loaded successfully');