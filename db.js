import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyCNxW7wu3-NgFbFaOzMa7u0k7zJ-bo4AaQ",
    authDomain: "expense-app-d88c4.firebaseapp.com",
    projectId: "expense-app-d88c4",
    storageBucket: "expense-app-d88c4.appspot.com",
    messagingSenderId: "378312490239",
    appId: "1:378312490239:web:a612877f84dc7ed8b8e0ca"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
