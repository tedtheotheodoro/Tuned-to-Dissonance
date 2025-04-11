// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAv7JrrxNhLNu7q1J6wW31H9HLQddbSmg",
    authDomain: "tuned-to-dissonance.firebaseapp.com",
    projectId: "tuned-to-dissonance",
    storageBucket: "tuned-to-dissonance.appspot.com",
    messagingSenderId: "332227416013",
    appId: "1:332227416013:web:8a57aaa61c82defda3be84"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
