import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const app = firebase.initializeApp({
  apiKey: "AIzaSyAcBvoyt6LiYoo8ZYzRXtNT5-xRbYWxINI",
  authDomain: "reactchat-14cf5.firebaseapp.com",
  projectId: "reactchat-14cf5",
  storageBucket: "reactchat-14cf5.appspot.com",
  messagingSenderId: "287827049513",
  appId: "1:287827049513:web:2d16858e5f0b8f1d807038"
})

const auth = app.auth()
const db = app.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }
