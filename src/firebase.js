import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDi5rmhCe0Wq7G47ZeDTjcr3jqyGZJMlVg",
  authDomain: "clone-f7e95.firebaseapp.com",
  databaseURL: "https://clone-f7e95.firebaseio.com",
  projectId: "clone-f7e95",
  storageBucket: "clone-f7e95.appspot.com",
  messagingSenderId: "794911084447",
  appId: "1:794911084447:web:5c4843547cef610d1337aa",
  measurementId: "G-DYMM9N72ZK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };