import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9DpWaT6iiFya_epshzu1QMdEWdrYzGdE",
  authDomain: "fb-productos-ecommerce.firebaseapp.com",
  projectId: "fb-productos-ecommerce",
  storageBucket: "fb-productos-ecommerce.appspot.com",
  messagingSenderId: "916423170133",
  appId: "1:916423170133:web:805951e44d34fdc8669cdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);