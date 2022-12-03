// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  applyActionCode,
  confirmPasswordReset,
  updatePassword,
} from "firebase/auth";
import {
  getFirestore,
  query,
  doc,
  getDocs,
  collection,
  where,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIs8MySWwUl72x5ivYkpsjEw9u0aZFzIM",
  authDomain: "eguchishop-fish.firebaseapp.com",
  projectId: "eguchishop-fish",
  storageBucket: "eguchishop-fish.appspot.com",
  messagingSenderId: "965541816870",
  appId: "1:965541816870:web:61db2ec7bbb18c8184d4e7"
};

// initialize firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const storage = getStorage(app);

// Login function
const logInWithEmailAndPassword = async (email, password, setIncorrect) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    setIncorrect(true);
  }
};

// Register function with email/password
const registerWithEmailAndPassword = async(firstName, lastName, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    const name = firstName + " " + lastName

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      firstName, 
      lastName,
      authProvider: "local",
      email
    });
  } catch (err) {
    console.error(err.message);
    //Email exists?
    if (err.message = "EMAIL_EXISTS") return true;
  }
};

// Logout function
const logout = () => {
  signOut(auth);
};

export {
  auth,
  // db,
  // storage,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout
}; 