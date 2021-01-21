import firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAW5zvVR59o8PH3l-Ehrbafut71tcOFZmQ",
    authDomain: "birdy-87fb6.firebaseapp.com",
    projectId: "birdy-87fb6",
    storageBucket: "birdy-87fb6.appspot.com",
    messagingSenderId: "697764036310",
    appId: "1:697764036310:web:f0aea2029f39ea926d9377"
};

firebase.initializeApp(firebaseConfig);
export default firebase;