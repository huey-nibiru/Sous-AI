// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkDfZB-B8RvrDdMVm_z6qmPRCxua55U9w",
  authDomain: "sous-777.firebaseapp.com",
  projectId: "sous-777",
  storageBucket: "sous-777.appspot.com",
  messagingSenderId: "265196357931",
  appId: "1:265196357931:web:76ba4bb6abb3c8578f1d6e",
  measurementId: "G-P1KL4M955T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);