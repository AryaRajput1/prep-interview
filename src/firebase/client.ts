// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQMi8gzcqYnhaq5XZY63as5f93e-GDtW4",
  authDomain: "prep-interview-8d681.firebaseapp.com",
  projectId: "prep-interview-8d681",
  storageBucket: "prep-interview-8d681.firebasestorage.app",
  messagingSenderId: "126847319624",
  appId: "1:126847319624:web:ae4edabe6d0a017201a27d"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth = getAuth(app)
export const db = getFirestore(app)
