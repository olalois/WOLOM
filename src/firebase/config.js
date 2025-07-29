import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCZw1IeIBU4creKCxiHpDi-88m_TYOVbQ",
  authDomain: "church-c42ec.firebaseapp.com",
  projectId: "church-c42ec",
  storageBucket: "church-c42ec.appspot.com",
  messagingSenderId: "856465869196",
  appId: "1:856465869196:web:edb6e40a7437249e76aea9",
  measurementId: "G-WC0ZKJ3N6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };