import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAX35QJ5FCmL5KaMo9mkZ6tlyBsMbGM9YU",
    authDomain: "clone-reactapp.firebaseapp.com",
    databaseURL: "https://clone-reactapp.firebaseio.com",
    projectId: "clone-reactapp",
    storageBucket: "clone-reactapp.appspot.com",
    messagingSenderId: "193266789680",
    appId: "1:193266789680:web:96bcf31743270e47056cf5",
    measurementId: "G-1FVKZC40XG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };