// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAelN1cPn7NX18AmSv4OYE2sHmKv6XHZKA",
  authDomain: "miniproject-598ee.firebaseapp.com",
  projectId: "miniproject-598ee",
  storageBucket: "miniproject-598ee.appspot.com",
  messagingSenderId: "142627219962",
  appId: "1:142627219962:web:9be9f1eddb051e34f95c43"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
export const storage = getStorage(Firebase);