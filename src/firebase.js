import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyA-w111nXb0jdknotSL5gjoGwtqIkGooAY",
  authDomain: "lclone-ec87e.firebaseapp.com",
  projectId: "lclone-ec87e",
  storageBucket: "lclone-ec87e.appspot.com",
  messagingSenderId: "938271218563",
  appId: "1:938271218563:web:00be566beee94bb8e034b6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;