/* Play Passei — handlers de Web Push (importado pelo service worker do Workbox).
   NUNCA interceptar fetch aqui: áudio não pode passar pelo SW. */
self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    /* payload não-JSON: usa defaults */
  }
  const title = data.title || 'Play Passei 🎧';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: data.body || 'Sua meta de hoje ainda está aberta. Bora manter a sequência?',
      icon: './icons/icon-192x192.png',
      badge: './icons/icon-96x96.png',
      tag: data.tag || 'pp-lembrete',
      data: { url: data.url || './' },
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((wins) => {
      for (const win of wins) {
        if ('focus' in win) return win.focus();
      }
      return clients.openWindow(url);
    })
  );
});
