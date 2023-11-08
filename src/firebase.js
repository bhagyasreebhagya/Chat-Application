import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4Qb-APibdeuhkdLHY4c0X_otgaSChkBU",
  authDomain: "multi-chat-app-59587.firebaseapp.com",
  projectId: "multi-chat-app-59587",
  storageBucket: "multi-chat-app-59587.appspot.com",
  messagingSenderId: "916808516351",
  appId: "1:916808516351:web:fa50e8e34c003bf9b942ca",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
