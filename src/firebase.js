import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "chat-app-d6369.firebaseapp.com",
  projectId: "chat-app-d6369",
  storageBucket: "chat-app-d6369.appspot.com",
  messagingSenderId: "572525721190",
  appId: "1:572525721190:web:c7f5ecdf938be70df89fa7",
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
