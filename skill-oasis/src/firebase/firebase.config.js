// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAn8Idao2-UCconCtgeL1MlFof52cSRYU8',
  authDomain: 'skill-oasis.firebaseapp.com',
  projectId: 'skill-oasis',
  storageBucket: 'skill-oasis.appspot.com',
  messagingSenderId: '462483035736',
  appId: '1:462483035736:web:776fba4482528bb38a1c2d',
  measurementId: 'G-JMKFEYR9C1',
};

// Initialize Firebase
const app = initializeApp (firebaseConfig);
export const analytics = getAnalytics (app);
export const auth = getAuth (app);
export const db = getFirestore (app);
