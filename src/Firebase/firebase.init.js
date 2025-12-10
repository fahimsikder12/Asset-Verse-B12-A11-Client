// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1gHs5DfbmD1I2fi_peg2UGarq3khKIEU",
  authDomain: "asset-verse-b12-a11-client.firebaseapp.com",
  projectId: "asset-verse-b12-a11-client",
  storageBucket: "asset-verse-b12-a11-client.firebasestorage.app",
  messagingSenderId: "339926423716",
  appId: "1:339926423716:web:381449c9cc1d89da616e31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();