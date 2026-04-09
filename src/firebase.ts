import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAO13jCShWGNF5VoHhIdWU0wt3gkJvvjYU",
  authDomain: "blynticfinal.firebaseapp.com",
  projectId: "blynticfinal",
  storageBucket: "blynticfinal.firebasestorage.app",
  messagingSenderId: "751465388587",
  appId: "1:751465388587:web:3c092a582dc2f94d41686e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
