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

// Menangani klik pada notifikasi
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://your-website-url.com') // Arahkan ke URL atau halaman yang sesuai
    );
});
