// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyACr9U6fd3aeaz21gy-UFV2MzjOUPGatoI",
  authDomain: "manager-notify-test.firebaseapp.com",
  projectId: "manager-notify-test",
  storageBucket: "manager-notify-test.appspot.com",
  messagingSenderId: "930188761326",
  appId: "1:930188761326:web:484eb055eaf3269d573bff",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
