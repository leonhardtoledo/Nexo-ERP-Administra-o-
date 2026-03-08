const CACHE_NAME = 'nexo-erp-v1';

// Instala o Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Ativa e limpa caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Intercepta as requisições (Necessário para o Chrome liberar o botão de Instalar)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});