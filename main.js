document.getElementById('subscribe-btn').addEventListener('click', function () {
    if ('Notification' in window && 'serviceWorker' in navigator) {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                console.log('Permission granted for notifications.');
                
                
                navigator.serviceWorker.ready.then(function(registration) {
                    registration.pushManager.subscribe({
                        userVisibleOnly: true, 
                        applicationServerKey: urlBase64ToUint8Array('BB-JrdDRA7vDoyVPZtfHqwZet49SH3QH3xoEXzq6u-TDa4kHh1wwuIOqqJibqzpC3b-ad0fDT3MmHhzs5japQtQ') // Ganti dengan VAPID key Anda
                    })
                    .then(function(subscription) {
                        console.log('User is subscribed:', subscription);
                        
                    })
                    .catch(function(error) {
                        console.error('Subscription failed:', error);
                    });
                });
            } else {
                console.log('Notification permission denied.');
            }
        });
    }
});


function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
