// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBsQAB9l80xQ_REOIrXpWDnRjZtjiuf3c",
  authDomain: "ai-travel-planner-6bc12.firebaseapp.com",
  projectId: "ai-travel-planner-6bc12",
  storageBucket: "ai-travel-planner-6bc12.firebasestorage.app",
  messagingSenderId: "428236012999",
  appId: "1:428236012999:web:db1ce50cc63748e14cede2",
  measurementId: "G-Z2FLZPWDXD"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
