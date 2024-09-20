import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAsqwqh-G5hZyHnVWlg7U6P1mQNrkWMaiQ",
  authDomain: "login-auth-f5dc6.firebaseapp.com",
  projectId: "login-auth-f5dc6",
  storageBucket: "login-auth-f5dc6.appspot.com",
  messagingSenderId: "895408293015",
  appId: "1:895408293015:web:93f8f042b8801908f715d2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app; 