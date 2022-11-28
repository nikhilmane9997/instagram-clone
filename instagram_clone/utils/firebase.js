// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtBOAJYy9EFyjmxJdRUPlj23JVHxTEclQ",
  authDomain: "instagram-clone-14992.firebaseapp.com",
  projectId: "instagram-clone-14992",
  storageBucket: "instagram-clone-14992.appspot.com",
  messagingSenderId: "740801653467",
  appId: "1:740801653467:web:d1122a749c1db14038bafe",
  measurementId: "G-FTYBZJ0GKG",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
