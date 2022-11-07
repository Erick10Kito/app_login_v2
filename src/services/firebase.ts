import { initializeApp } from "firebase/app";
import { env } from "process";

const firebaseConfig = {
  apiKey: env.REACT_APP_FIREBASE_APIKEY,

  authDomain: env.REACT_APP_FIREBASE_AUTHDOMAIN,

  projectId: env.REACT_APP_FIREBASE_PROJECTID,

  storageBucket: env.REACT_APP_FIREBASE_SOTORAGEBUCKET,

  messagingSenderId: env.REACT_APP_FIREBASE_MESSAGINGSENDERI,

  appId: env.REACT_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig);
