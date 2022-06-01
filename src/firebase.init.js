// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjVQgrCyFh92tcXBISwwp03TYFmGy0mnk",
  authDomain: "emajhon-auth-152a7.firebaseapp.com",
  projectId: "emajhon-auth-152a7",
  storageBucket: "emajhon-auth-152a7.appspot.com",
  messagingSenderId: "773813962597",
  appId: "1:773813962597:web:4970db6551c58f67bb038c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;