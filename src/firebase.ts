import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyBTJJSaNyFwh2KJjXi9YC2Vfaaiot5IY",
  authDomain: "blynticfinal.firebaseapp.com",
  projectId: "blynticfinal",
  storageBucket: "blynticfinal.firebasestorage.app",
  messagingSenderId: "751465388587",
  appId: "1:751465388587:web:3c092a582dc2f94d41686e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
