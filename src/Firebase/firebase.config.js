// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Ao9-OKK2EjLS3vc9OGuuEUG4J9oB6uE",
  authDomain: "mobile-hub-43c75.firebaseapp.com",
  projectId: "mobile-hub-43c75",
  storageBucket: "mobile-hub-43c75.appspot.com",
  messagingSenderId: "1028151023636",
  appId: "1:1028151023636:web:8d655760d287abf8196f01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;