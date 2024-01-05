// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6WiHIVnvyR4ZnIKJ7lkm1tSc7Xggvev8",
    authDomain: "sarthaki.firebaseapp.com",
    projectId: "sarthaki",
    storageBucket: "sarthaki.appspot.com",
    messagingSenderId: "152705535914",
    appId: "1:152705535914:web:ee098a5f58c86284d965d3",
    measurementId: "G-JXNVXW1ZPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);