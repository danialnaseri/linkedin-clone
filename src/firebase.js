import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA__SqIuXU64VwsIjic_ImWYbKjJdRS7q0",
  authDomain: "linkedin-clone-by-react.firebaseapp.com",
  projectId: "linkedin-clone-by-react",
  storageBucket: "linkedin-clone-by-react.appspot.com",
  messagingSenderId: "982090102553",
  appId: "1:982090102553:web:1cae2bd194d7e7e49ef788",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
