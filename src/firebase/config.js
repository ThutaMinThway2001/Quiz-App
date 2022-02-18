import firebase from 'firebase/app'
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCCyn1Dkq_Wm8lPCu8Rs75BaN33ZHfuenY",
    authDomain: "quiz-app-f8655.firebaseapp.com",
    projectId: "quiz-app-f8655",
    storageBucket: "quiz-app-f8655.appspot.com",
    messagingSenderId: "932814971726",
    appId: "1:932814971726:web:191863c047fc70cbc9341f"
};

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore();

export {db}