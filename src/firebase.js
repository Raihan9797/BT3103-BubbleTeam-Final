import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJV1SpAPq-XAoHfDHHAqicACExOmOBOfs",
    authDomain: "bubbleteam-1b285.firebaseapp.com",
    databaseURL: "https://bubbleteam-1b285.firebaseio.com",
    projectId: "bubbleteam-1b285",
    storageBucket: "bubbleteam-1b285.appspot.com",
    messagingSenderId: "421632692805",
    appId: "1:421632692805:web:57c4fa81b56257204f092c",
    measurementId: "G-VTZNMNVH9Q"
  };

  firebase.initializeApp(firebaseConfig);
  var users = firebase.firestore();
  export default users;