import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"



const firebaseConfig = {
    apiKey: "AIzaSyD6Spp-HYNiNfTnJLAUXie8_kAAD4pKrXg",
    authDomain: "slack-clone-43ff4.firebaseapp.com",
    projectId: "slack-clone-43ff4",
    storageBucket: "slack-clone-43ff4.appspot.com",
    messagingSenderId: "74398382357",
    appId: "1:74398382357:web:9254362e983a535aa1111c"
  };

  firebase.initializeApp(firebaseConfig) ; 
  const db = firebase.firestore() ;
  const auth = firebase.auth() ;
  const provider = new firebase.auth.GoogleAuthProvider() ;

  export  {db,auth , provider}