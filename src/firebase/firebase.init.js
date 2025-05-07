// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFgFqTMcTiAdqn_S0OnVwzi5fhl52X_fM",
  authDomain: "fresh-harvest-be692.firebaseapp.com",
  projectId: "fresh-harvest-be692",
  storageBucket: "fresh-harvest-be692.firebasestorage.app",
  messagingSenderId: "798296841739",
  appId: "1:798296841739:web:677d382cc47e1a7494b10e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
