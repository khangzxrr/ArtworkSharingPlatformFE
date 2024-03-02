import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

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

export const storage = getStorage(firebaseApp)