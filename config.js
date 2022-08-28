import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-A8S9-k1a5QwHl-G1ZuGe1Zi7io1HQac",
  authDomain: "e-ride-stage-4-f9d40.firebaseapp.com",
  projectId: "e-ride-stage-4-f9d40",
  storageBucket: "e-ride-stage-4-f9d40.appspot.com",
  messagingSenderId: "472991216616",
  appId: "1:472991216616:web:4f6d0ee41df1a2eca82a5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
