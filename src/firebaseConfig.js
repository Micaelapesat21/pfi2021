import firebase from 'firebase/app';
import 'firebase/auth';    
import 'firebase/storage';     // for storage
//import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
//import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions  


firebase.initializeApp({
    apiKey: "AIzaSyDPeJsBibFGIkKl5PLsBmlbXl_rudxeAlY",
    authDomain: "seminario-1-uade.firebaseapp.com",
    databaseURL: "https://seminario-1-uade.firebaseio.com",
    projectId: "seminario-1-uade",
    storageBucket: "seminario-1-uade.appspot.com",
    messagingSenderId: "244147613999",
    appId: "1:244147613999:web:1db6a512e9fe350cd271da",
    measurementId: "G-MQ4LF02FEL"
});

//firebase.analytics();



export default firebase;