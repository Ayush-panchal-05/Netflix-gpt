// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVvx7kvhxnIcX0nqdSWyA6Ni2SJ2Qnapg",
  authDomain: "netflixgpt-be83f.firebaseapp.com",
  projectId: "netflixgpt-be83f",
  storageBucket: "netflixgpt-be83f.appspot.com",
  messagingSenderId: "174372664116",
  appId: "1:174372664116:web:54a5dc517a9365b0962b61",
  measurementId: "G-71XFTKQ8W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();