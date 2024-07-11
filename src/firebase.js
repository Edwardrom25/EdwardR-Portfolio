
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCVZoAw9Q97nu4skvUCQtT9Ag0le-T-qVQ",
  authDomain: "react-portfolio-6c6ba.firebaseapp.com",
  projectId: "react-portfolio-6c6ba",
  storageBucket: "react-portfolio-6c6ba.appspot.com",
  messagingSenderId: "536612449302",
  appId: "1:536612449302:web:a48e8ac80ea6095fda5937"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);