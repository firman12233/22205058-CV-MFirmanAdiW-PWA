self.addEventListener('push', function(event) {
    let options = {
        body: event.data.text(),
        icon: 'images/icon.png',
        badge: 'images/badge.png'
    };
    event.waitUntil(
        self.registration.showNotification('Notifikasi Baru!', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://web-profil-firman.vercel.app/') 
    );
});
