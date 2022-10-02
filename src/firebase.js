
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "em-system-61dc4.firebaseapp.com",
    projectId: "em-system-61dc4",
    storageBucket: "em-system-61dc4.appspot.com",
    messagingSenderId: "307740537368",
    appId: "1:307740537368:web:3d6061872e7f54b85b896d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage(app);
