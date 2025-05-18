
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASeFWq3gspUSB2dn1VYmA3eydOzfq7km0",
  authDomain: "crud-user-92204.firebaseapp.com",
  projectId: "crud-user-92204",
  storageBucket: "crud-user-92204.firebasestorage.app",
  messagingSenderId: "271906470806",
  appId: "1:271906470806:web:442aba6410ee3f8ba83bb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;