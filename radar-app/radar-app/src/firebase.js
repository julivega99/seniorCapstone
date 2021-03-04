import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')
 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_8wcKQCMZVuFWmLUaS1YnttUqPX6w8oY",
    authDomain: "radar-2-922bb.firebaseapp.com",
    projectId: "radar-2-922bb",
    storageBucket: "radar-2-922bb.appspot.com",
    messagingSenderId: "333613343471",
    appId: "1:333613343471:web:6a2b48fa82abc49fbf711a",
    measurementId: "G-151N9FZEFE"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;