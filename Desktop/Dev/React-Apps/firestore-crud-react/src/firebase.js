import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBv1cbomjJWjqq8uiwJL62xKw2aBbdwFx4",
    authDomain: "fb-crud-react-c4556.firebaseapp.com",
    projectId: "fb-crud-react-c4556",
    storageBucket: "fb-crud-react-c4556.appspot.com",
    messagingSenderId: "514212324427",
    appId: "1:514212324427:web:51168ef52d4ccceef9d9ce",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();