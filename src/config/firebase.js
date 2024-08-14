import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAjx335plBPQ17G_ifJN7kyPOnaFxugkh8",
  authDomain: "shopping-store-72f70.firebaseapp.com",
  projectId: "shopping-store-72f70",
  storageBucket: "shopping-store-72f70.appspot.com",
  messagingSenderId: "112212082120",
  appId: "1:112212082120:web:03ec0ae24fcb487c5214fd"
};


const app = initializeApp(firebaseConfig); 

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);