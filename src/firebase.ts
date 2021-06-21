import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-storage";

var firebaseConfig = {
  apiKey: "AIzaSyC2b_z6aM87b8MJaOuVPZrld9uHLUcS-_s",
  authDomain: "distribution-site-d6ffc.firebaseapp.com",
  databaseURL: "https://distribution-site-d6ffc.firebaseapp.com",
  projectId: "distribution-site-d6ffc",
  storageBucket: "distribution-site-d6ffc.appspot.com",
  messagingSenderId: "499292700050",
  appId: "1:499292700050:web:5089150d98190afdf3554b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
