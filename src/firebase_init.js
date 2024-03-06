import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

import { getMessaging, onMessage } from "firebase/messaging";

import { getToken } from "firebase/messaging";

import { FIREBASE_PUSH_CERT } from 'utils/constants';
import { addNewToken } from "services/notifyTokenService";
import { notification } from "antd";

const firebaseConfig = {

  apiKey: "AIzaSyB9lv-cHwuqcIgLC0kiRaMc7WwyKSarQ8w",

  authDomain: "artwork-56ea5.firebaseapp.com",

  projectId: "artwork-56ea5",

  storageBucket: "artwork-56ea5.appspot.com",

  messagingSenderId: "239288492557",

  appId: "1:239288492557:web:da48b37605996d1a92eb44",

  measurementId: "G-8VLK56NGSQ"

};


// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig)

export const messageApp = getMessaging(firebaseApp)

export const storage = getStorage(firebaseApp)


onMessage(messageApp, (payload) => {
  console.log('got payload from firebase ', payload)
  notification.info({ message: payload.notification.title, description: payload.notification.body})
})

export const getOrRegisterServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    return window.navigator.serviceWorker
      .getRegistration()
      .then((serviceWorker) => {
        if (serviceWorker) return serviceWorker;
        return window.navigator.serviceWorker.register('/firebase-messaging-sw.js');
      });
  }
  throw new Error('The browser doesn`t support service worker.');
};

export const getFCMToken = () => getOrRegisterServiceWorker()
  .then((serviceWorkerRegistration) =>
    getToken(messageApp, { vapidKey: FIREBASE_PUSH_CERT, serviceWorkerRegistration }))
  .then(token => addNewToken(token))
  .catch(error => console.log(error))

