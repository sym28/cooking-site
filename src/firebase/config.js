import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs, getDoc, doc, addDoc, deleteDoc, onSnapshot, updateDoc, where, query} from 'firebase/firestore'

// config
const firebaseConfig = {
    apiKey: "AIzaSyDphFeU_WFefesGlMbf93PU_f_8PWXaIZk",
    authDomain: "cooking-recipe-site-235b9.firebaseapp.com",
    projectId: "cooking-recipe-site-235b9",
    storageBucket: "cooking-recipe-site-235b9.appspot.com",
    messagingSenderId: "1072237068661",
    appId: "1:1072237068661:web:c5597fd97d786d04be933c"
};

// initialise firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db, collection, getDocs, doc, getDoc, addDoc, deleteDoc, onSnapshot, updateDoc, where, query}