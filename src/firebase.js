// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { createUserWithEmailAndPassword, getAuth, signInWithCredential, signInWithEmailAndPassword, signOut } from "firebase/auth";



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

export const LoginUser = (email, password) => {
    try{
        signInWithEmailAndPassword(auth, email, password)
    }catch(error){
        console.log('Error in:', error.message)
    }
}

export const createUserAccount = (username, email, password, confirmPassword) => {
    if(password.length > 7){
        console.log("Passowrd must be longer than 7 characters")
    
    if(password === confirmPassword){
        try{
            createUserWithEmailAndPassword(auth, email, password)
            console.log("Create Account succcessful")
        }catch(error){
            console.log(error)
        }
    } else {
        console.log("Password does not match")
    }
}
    
}

export const logoutUser = () => {
    try{
        if(auth.currentUser){
            auth.signOut()
        }
    }catch(error){
        console.log("Error in: ", error)
    }
}