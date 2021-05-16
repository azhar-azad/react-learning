import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0BfNAhIu9EONYHCCuOyabIf0whOgJiZY",
  authDomain: "facebook-clone-with-react.firebaseapp.com",
  projectId: "facebook-clone-with-react",
  storageBucket: "facebook-clone-with-react.appspot.com",
  messagingSenderId: "45174060671",
  appId: "1:45174060671:web:1ae14b68efebe9b2d7b14a",
  measurementId: "G-YVH8LZWR0L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export { auth, provider };
export default db;