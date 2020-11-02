import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD8ID3GYsFQj2vtENUmT-Ds3VqLNJVY6M",
  authDomain: "grantou-af639.firebaseapp.com",
  databaseURL: "https://grantou-af639.firebaseio.com",
  projectId: "grantou-af639",
  storageBucket: "grantou-af639.appspot.com",
  messagingSenderId: "937164314093",
  appId: "1:937164314093:web:d9be81e2176531caf4c3e4",
  measurementId: "G-95XB6EL7EN"
};

  firebase.initializeApp(firebaseConfig);
  var users = firebase.firestore();
  export default users;