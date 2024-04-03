// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD-E6guiSyWoawCMjZVEKgL5UQrch9t0A",
  authDomain: "auth-moha-milon-33417.firebaseapp.com",
  projectId: "auth-moha-milon-33417",
  storageBucket: "auth-moha-milon-33417.appspot.com",
  messagingSenderId: "379709956079",
  appId: "1:379709956079:web:cfd8038f1bf832b63da01a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;