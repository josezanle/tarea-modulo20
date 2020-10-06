import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDmMI9hqdy4TSQOdHyH8FJrd9MOq9b1m9g",
    authDomain: "sql-demos-3f601.firebaseapp.com",
    databaseURL: "https://sql-demos-3f601.firebaseio.com",
    projectId: "sql-demos-3f601",
    storageBucket: "sql-demos-3f601.appspot.com",
    messagingSenderId: "501784188673",
    appId: "1:501784188673:web:9bb851e4bdb343ef8c6d00",
    measurementId: "G-Q6ENLGVF1J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// referencia a firestore
const db = firebase.firestore();

// con esta referencia podemos hacer la autenticacion con google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}