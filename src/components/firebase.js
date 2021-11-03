import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBhJAp3TLLy-dMDvKuh7tL-bPOzP8ktbv4",
    authDomain: "todo-app-db-b3564.firebaseapp.com",
    projectId: "todo-app-db-b3564",
    storageBucket: "todo-app-db-b3564.appspot.com",
    messagingSenderId: "502875648253",
    appId: "1:502875648253:web:2a1df3150fd3442b534e94",
    measurementId: "G-NEZLH17VW5"
});

const db = firebaseApp.firestore();
export default db;