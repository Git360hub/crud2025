// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp4pN4fPnEfTAwXOR-tw4wgVF23VcuPNA",
  authDomain: "crud2025-388c0.firebaseapp.com",
  projectId: "crud2025-388c0",
  storageBucket: "crud2025-388c0.firebasestorage.app",
  messagingSenderId: "826812935022",
  appId: "1:826812935022:web:d870b64b6c8455dc10af7f",
  measurementId: "G-VBQ0Y33BY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app); 
