// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "eatguru-31a23.firebaseapp.com",
  projectId: "eatguru-31a23",
  storageBucket: "eatguru-31a23.firebasestorage.app",
  messagingSenderId: "1089568920465",
  appId: "1:1089568920465:web:c0e3a3c54c79d71635c030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth} 