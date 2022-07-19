import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCrfSrk0ob9uhBqZTo9mf3hmMrLGeYlaLE",
  authDomain: "ferrimac-react.firebaseapp.com",
  projectId: "ferrimac-react",
  storageBucket: "ferrimac-react.appspot.com",
  messagingSenderId: "78600488675",
  appId: "1:78600488675:web:a67b83bbc16ffb10b8e7d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)