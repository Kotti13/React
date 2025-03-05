// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcFRNdsErrXYHiiuYlCf6txDjupaNwRno",
  authDomain: "ticketboxx-c4049.firebaseapp.com",
  databaseURL: "https://ticketboxx-c4049-default-rtdb.firebaseio.com",
  projectId: "ticketboxx-c4049",
  storageBucket: "ticketboxx-c4049.appspot.com",
  messagingSenderId: "1029974974410",
  appId: "1:1029974974410:web:a94d9c5fe267f3e51db933",
  measurementId: "G-F7PEJ1WQRV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get };
