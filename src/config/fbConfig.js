import firebase from "firebase/app";
import "firebase/firestore"; // Firestore - NoSQL DB
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA6qNMOTCwq9sm-9RhI73b5FLzjanjGGLM",
  authDomain: "julka-todolist.firebaseapp.com",
  databaseURL: "https://julka-todolist.firebaseio.com",
  projectId: "julka-todolist",
  storageBucket: "julka-todolist.appspot.com",
  messagingSenderId: "472487285340"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
