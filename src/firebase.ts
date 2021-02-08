import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAnohmTd4-oC2cIZTf9QZd2jM1Tol_sZQ",
  authDomain: "distribution-portal-site.firebaseapp.com",
  projectId: "distribution-portal-site",
  storageBucket: "distribution-portal-site.appspot.com",
  messagingSenderId: "815042526996",
  appId: "1:815042526996:web:e427d8df3d20da43df4c01",
  measurementId: "G-E4ECLJYW2C"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
