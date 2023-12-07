import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdm7IZAWjhvNU-uG7maE3cPnKUTd3RXco",
    authDomain: "sih23-37728.firebaseapp.com",
    projectId: "sih23-37728",
    storageBucket: "sih23-37728.appspot.com",
    messagingSenderId: "1064064872772",
    appId: "1:1064064872772:web:6588db252f5a5d1199a711",
    measurementId: "G-C3ZYF8QYWT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;