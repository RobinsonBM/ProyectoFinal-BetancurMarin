// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMkZovt-t3WQXalchq5mDKmf1ZRajlOtw",
  authDomain: "restaurante-la-44.firebaseapp.com",
  projectId: "restaurante-la-44",
  storageBucket: "restaurante-la-44.appspot.com",
  messagingSenderId: "913787391456",
  appId: "1:913787391456:web:e4787e0f88504a51f4ef85",
  measurementId: "G-XE9ZQ7RL8H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
