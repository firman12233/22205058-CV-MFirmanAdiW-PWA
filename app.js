let db;

const request = indexedDB.open("UserProfileDB", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    db.createObjectStore("users", { keyPath: "id" });
};

request.onsuccess = function(event) {
    db = event.target.result;
};

function saveUserProfile(user) {
    const transaction = db.transaction(["users"], "readwrite");
    const store = transaction.objectStore("users");
    store.add(user);
}