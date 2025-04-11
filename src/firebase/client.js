import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwX8tmqqEF1qBCv1fqc3XgN_hiXU2z7G0",
  authDomain: "coderhouse-ecommerce-rea-a3241.firebaseapp.com",
  projectId: "coderhouse-ecommerce-rea-a3241",
  storageBucket: "coderhouse-ecommerce-rea-a3241.firebasestorage.app",
  messagingSenderId: "1001695664150",
  appId: "1:1001695664150:web:c988234753d1312b4a7d37"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);