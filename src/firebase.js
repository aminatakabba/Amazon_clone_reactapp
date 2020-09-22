import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDc_MfoOUh-WnCC1cIHzlgC9VVOpTQipc0",
  authDomain: "clone-792ac.firebaseapp.com",
  databaseURL: "https://clone-792ac.firebaseio.com",
  projectId: "clone-792ac",
  storageBucket: "clone-792ac.appspot.com",
  messagingSenderId: "248672385971",
  appId: "1:248672385971:web:0c2e29f6c5d65ccb7329c6",
  measurementId: "G-NDXQ2EMGC6"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };