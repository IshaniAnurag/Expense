import * as firebase from "firebase/app"
require('@firebase/firestore');


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCNxW7wu3-NgFbFaOzMa7u0k7zJ-bo4AaQ",
    authDomain: "expense-app-d88c4.firebaseapp.com",
    projectId: "expense-app-d88c4",
    storageBucket: "expense-app-d88c4.appspot.com",
    messagingSenderId: "378312490239",
    appId: "1:378312490239:web:a612877f84dc7ed8b8e0ca"
  };
  // Initialize Firebase



  const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
    export default db;