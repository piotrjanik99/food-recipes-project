import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBmeDpmk_1tQyvcNxFcr5h8FXLbEQ8U5S8",
  authDomain: "food-recipes-d637a.firebaseapp.com",
  projectId: "food-recipes-d637a",
  storageBucket: "food-recipes-d637a.appspot.com",
  messagingSenderId: "534589697743",
  appId: "1:534589697743:web:ee0b92367bdac8ad1911ba"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
