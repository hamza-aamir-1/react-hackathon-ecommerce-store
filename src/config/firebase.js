// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2lM7LrZedgpebwzkTp_wW5A4EYSxdQ2Y",
  authDomain: "react-hackathon-4cf77.firebaseapp.com",
  projectId: "react-hackathon-4cf77",
  storageBucket: "react-hackathon-4cf77.appspot.com",
  messagingSenderId: "97838000876",
  appId: "1:97838000876:web:1ea51c45d6249d42e193c9",
  measurementId: "G-BG1E5SYR64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);