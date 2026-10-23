// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDiDJFzpSj_XxI7tUf-nuHt7YFOacBVzg",
  authDomain: "aula-277bc.firebaseapp.com",
  projectId: "aula-277bc",
  storageBucket: "aula-277bc.firebasestorage.app",
  messagingSenderId: "975382514621",
  appId: "1:975382514621:web:c7159d73e362591e14e0d4",
  databaseURL: "https://aula-277bc-default-rtdb.firebaseio.com/",
  measurementId: "G-0D5SZ7NQF1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);