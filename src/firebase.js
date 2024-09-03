// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, signInWithCredential } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFAoDDI-0Et2yRYQbHWIH9tBK4mfz9q-Q",
  authDomain: "cap2point1.firebaseapp.com",
  projectId: "cap2point1",
  storageBucket: "cap2point1.appspot.com",
  messagingSenderId: "732557883166",
  appId: "1:732557883166:web:010e69eec14ffe23e3bb0f",
  measurementId: "G-PCYJR8KDWP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const handleLogin = (username, password) => {
    signInWithCredential(auth, {username, password})
}

export const createUserAccount = (email, username, password, confirmPassword) => {
    if(password.length < 7){
        console.log("Passowrd must be longer than 7 characters")
    }
    if(password !== confirmPassword){
        console.log("Password does not match")
    }
    createUserAccount(auth, email, username, password)
    console.log("Create Account succcessful")
}