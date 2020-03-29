import Rebase from 're-base';
import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBUBnqa6NdJtkYip3VJqL34IEzlo3N4E-M",
    authDomain: "catchoftheday-5662a.firebaseapp.com",
    databaseURL: "https://catchoftheday-5662a.firebaseio.com"/*,
    projectId: "catchoftheday-5662a",
    storageBucket: "catchoftheday-5662a.appspot.com",
    messagingSenderId: "479224308248",
    appId: "1:479224308248:web:cef0cb143e2297de5c196d",
    measurementId: "G-WFS5J8L2BX"*/
})
const base = Rebase.createClass(firebase.database());

export { firebaseApp };
    
export default base;











/*

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.13.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.13.1/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>

*/