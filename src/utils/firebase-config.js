import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYSTvFOhMgb5BaWcq2z-XedF0dl2lu20E",
  authDomain: "netflix-clone-504cf.firebaseapp.com",
  projectId: "netflix-clone-504cf",
  storageBucket: "netflix-clone-504cf.appspot.com",
  messagingSenderId: "792862957255",
  appId: "1:792862957255:web:aecf95db94dc42a83be8e2",
  measurementId: "G-JH02Z4SNS8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)