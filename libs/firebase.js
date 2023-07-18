import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDWtxjcVKQswxE-WG1n5spwUYv_-o_FHFk",
    authDomain: "noraai-ab7a3.firebaseapp.com",
    projectId: "noraai-ab7a3",
    storageBucket: "noraai-ab7a3.appspot.com",
    messagingSenderId: "509284180752",
    appId: "1:509284180752:web:d6a3eaaa89cfb834fbbb95",
    measurementId: "G-VMQ8WHYBGR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage }