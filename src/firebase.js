// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-clone-423806.firebaseapp.com",
  projectId: "x-clone-423806",
  storageBucket: "x-clone-423806.appspot.com",
  messagingSenderId: "722314862203",
  appId: "1:722314862203:web:a773069c380b094162ccde"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);