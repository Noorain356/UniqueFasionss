import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginuniquefashionss.firebaseapp.com",
  projectId: "loginuniquefashionss",
  storageBucket: "loginuniquefashionss.firebasestorage.app",
  messagingSenderId: "473248019857",
  appId: "1:473248019857:web:319c1e5363897b82c11630"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };