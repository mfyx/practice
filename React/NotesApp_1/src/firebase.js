// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhPIoacrNowU-4npA3Okv3TDwitHoWfOw",
  authDomain: "reactnotes-26ed7.firebaseapp.com",
  projectId: "reactnotes-26ed7",
  storageBucket: "reactnotes-26ed7.appspot.com",
  messagingSenderId: "824003484655",
  appId: "1:824003484655:web:988b0f2f074f84923ef41a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
