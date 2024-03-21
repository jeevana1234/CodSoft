// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB634F2dM1-uZ3gGfbdX_vuGr2TtHz2SiE",
  authDomain: "online-job-portal-f001a.firebaseapp.com",
  projectId: "online-job-portal-f001a",
  storageBucket: "online-job-portal-f001a.appspot.com",
  messagingSenderId: "352561319767",
  appId: "1:352561319767:web:2f15947e69f664030cf812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore with your Firebase app

export { db };
