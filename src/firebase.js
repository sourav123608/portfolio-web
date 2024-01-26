import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTcddRyuAMSuKBkhAoVHrhZ_MvA257cKU",
  authDomain: "portfolio-80626.firebaseapp.com",
  projectId: "portfolio-80626",
  storageBucket: "portfolio-80626.appspot.com",
  messagingSenderId: "645912807544",
  appId: "1:645912807544:web:104b8616028833d9ee458d",
  measurementId: "G-8GK5D0G6DD",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
