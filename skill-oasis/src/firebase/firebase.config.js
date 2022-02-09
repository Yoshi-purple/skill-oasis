// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APP_API,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID,
  measurementId: process.env.VUE_APP_MEASUREMENTId,
};

// Initialize Firebase
const app = initializeApp (firebaseConfig);
export const analytics = getAnalytics (app);
export const auth = getAuth (app);
export const db = getFirestore (app);
export const storage = getStorage (app);
