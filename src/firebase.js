// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhxQgyGx2zBNv3vKqeEEEw209hkC2SS1E",
  authDomain: "sparta-react-basic-afb8f.firebaseapp.com",
  projectId: "sparta-react-basic-afb8f",
  storageBucket: "sparta-react-basic-afb8f.appspot.com",
  messagingSenderId: "957274670240",
  appId: "1:957274670240:web:b859dc69693081805af5c5",
  measurementId: "G-KV652L3WKV"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();