// @ts-nocheck
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.1/firebase-messaging-compat.js');


const firebaseConfig = {
    apiKey: "AIzaSyB9lv-cHwuqcIgLC0kiRaMc7WwyKSarQ8w",
    authDomain: "artwork-56ea5.firebaseapp.com",
    projectId: "artwork-56ea5",
    storageBucket: "artwork-56ea5.appspot.com",
    messagingSenderId: "239288492557",
    appId: "1:239288492557:web:da48b37605996d1a92eb44",
    measurementId: "G-8VLK56NGSQ"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
  
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });