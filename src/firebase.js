import { initializeApp } from "firebase/app";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBXJqAR0qq-JqqwC6ERGOXj1M0UC1AypdQ",
  authDomain: "pw-erp.firebaseapp.com",
  projectId: "pw-erp",
  storageBucket: "pw-erp.firebasestorage.app",
  messagingSenderId: "967938596615",
  appId: "1:967938596615:web:8589786c3b116121526fa2",
  measurementId: "G-VE8LE5KKNV"

};

const app =
  initializeApp(firebaseConfig);

export const db =
  getFirestore(app);