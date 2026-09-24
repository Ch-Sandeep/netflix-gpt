// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJgSzpTreblNXc5Xy4Z81io6pxEBUWt9s",
  authDomain: "netflixgpt-9eead.firebaseapp.com",
  projectId: "netflixgpt-9eead",
  storageBucket: "netflixgpt-9eead.firebasestorage.app",
  messagingSenderId: "70845190412",
  appId: "1:70845190412:web:5dbb5cdec3d25c44c93929",
  measurementId: "G-HR3RWEP2Q8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
