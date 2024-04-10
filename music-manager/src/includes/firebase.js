import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKi-RiqgiBBSULHRWUPOvl8l7V3NluDas",
    authDomain: "music-185e6.firebaseapp.com",
    projectId: "music-185e6",
    storageBucket: "music-185e6.appspot.com",
    appId: "1:167454364843:web:51e3ad6149866b1c6353ee"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };