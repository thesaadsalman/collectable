import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmwtgTJaWhmty17r_7o5jPex5W57ccNrQ",
  authDomain: "collectable-c6dc7.firebaseapp.com",
  databaseURL: "https://collectable-c6dc7.firebaseio.com",
  projectId: "collectable-c6dc7",
  storageBucket: "collectable-c6dc7.appspot.com",
  messagingSenderId: "827806672707",
  appId: "1:827806672707:web:a385eeb84daf8f5363f1f6",
  measurementId: "G-7NV2QE7NN6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
