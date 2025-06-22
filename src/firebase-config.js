// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAoJbcPE6iToRgqc6qCe3QTMqWGhTBN_HM",
  authDomain: "chat-app-b476f.firebaseapp.com",
  projectId: "chat-app-b476f",
  storageBucket: "chat-app-b476f.appspot.com",
  messagingSenderId: "69784998980",
  appId: "1:69784998980:web:fdb0aac3f2d60a36115811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();