// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
require("firebase/auth")

const firebaseConfig = {
  apiKey: "AIzaSyAEa4yQ9UPeYEbDfnIzQFkykX3axs6f4QY",
  authDomain: "facebook-clone-50e35.firebaseapp.com",
  projectId: "facebook-clone-50e35",
  storageBucket: "facebook-clone-50e35.appspot.com",
  messagingSenderId: "159621761849",
  appId: "1:159621761849:web:7bcf8bc8ae48c8970cf6e8",
  measurementId: "G-KZWNNM77X0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// accessing the database
const db = firebaseApp.firestore();

// For authentication
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider(); // this will tell firebase that we nedd google sign in service..

export { auth, provider };
export default db;
