import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBkZYr_7ubbZmuFNFFPXrj3_kR13A6FUgA",
    authDomain: "marioplan-6eca6.firebaseapp.com",
    databaseURL: "https://marioplan-6eca6.firebaseio.com",
    projectId: "marioplan-6eca6",
    storageBucket: "marioplan-6eca6.appspot.com",
    messagingSenderId: "670015155079"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;