// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvier } from "firebase/auth";
import { firstore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOCWp5qtMmHgy5WeF8h8TqRkbIL2ICWzY",
  authDomain: "find-tutor-bits.firebaseapp.com",
  projectId: "find-tutor-bits",
  storageBucket: "find-tutor-bits.appspot.com",
  messagingSenderId: "545414867496",
  appId: "1:545414867496:web:bcc0db620a79b47844a31d",
  measurementId: "G-PC3JETHDF3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
