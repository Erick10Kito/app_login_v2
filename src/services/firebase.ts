import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,

  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,

  storageBucket: process.env.REACT_APP_FIREBASE_SOTORAGEBUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERI,

  appId: process.env.REACT_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const loginGoogle = () => {
  const provider = new GoogleAuthProvider();
  const result = signInWithPopup(auth, provider);
  return result;
};

const Logout = async () => {
  await signOut(auth);
  return document.location.reload();
};

export { auth, loginGoogle, Logout, storage };
