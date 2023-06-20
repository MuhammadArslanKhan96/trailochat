import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyChIRyGnwoWQNXPyNl1CnLgRUsTeJEnjVs",
    authDomain: "mindmap-a69da.firebaseapp.com",
    projectId: "mindmap-a69da",
    storageBucket: "mindmap-a69da.appspot.com",
    messagingSenderId: "1060554338049",
    appId: "1:1060554338049:web:9c954c838df77d33743500",
    measurementId: "G-FWZBZ241JL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }