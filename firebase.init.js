// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMHEavwSHbSpFVs1JXK3dtj65DUzi0uR4",
    authDomain: "portfolio-1f229.firebaseapp.com",
    projectId: "portfolio-1f229",
    storageBucket: "portfolio-1f229.appspot.com",
    messagingSenderId: "197703189859",
    appId: "1:197703189859:web:3f870aa0aab1e30c3f3f56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;