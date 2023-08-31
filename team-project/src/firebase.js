// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPPvdapxQP4n4Z9swPwOW8WMXSD4bm5o8",
  authDomain: "login-register-7399e.firebaseapp.com",
  projectId: "login-register-7399e",
  storageBucket: "login-register-7399e.appspot.com",
  messagingSenderId: "625317274630",
  appId: "1:625317274630:web:f3c99d5beef615f185cf87",
  measurementId: "G-J36Q0PTSXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);