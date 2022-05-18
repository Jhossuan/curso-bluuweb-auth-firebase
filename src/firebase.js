
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCm1rzTe1Neu5mgM63ZVuAlDU2zU-Tvmqk",
  authDomain: "react-2022-cf974.firebaseapp.com",
  projectId: "react-2022-cf974",
  storageBucket: "react-2022-cf974.appspot.com",
  messagingSenderId: "229470447798",
  appId: "1:229470447798:web:a939ca0fbb85b49db95e17"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }