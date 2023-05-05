import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAtAv8VVIGEQizmG6xQaZFwSm6ByvA9uXI",
  authDomain: "ecoryde-57f08.firebaseapp.com",
  projectId: "ecoryde-57f08",
  storageBucket: "ecoryde-57f08.appspot.com",
  messagingSenderId: "414054055518",
  appId: "1:414054055518:web:e7b29450a5d2374f10fecf"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);