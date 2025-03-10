// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCxfMQnGd4CGy9Ird-wu2lKtUHteHv8s0",
  authDomain: "app-auth-next-bb3a8.firebaseapp.com",
  projectId: "app-auth-next-bb3a8",
  storageBucket: "app-auth-next-bb3a8.firebasestorage.app",
  messagingSenderId: "153917847001",
  appId: "1:153917847001:web:6f3d19c4dbb97188e6d5c8",
  measurementId: "G-78X0L469M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };