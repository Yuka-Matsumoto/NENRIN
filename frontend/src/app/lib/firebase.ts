// frontend/lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAMMQsJ_IWGwBfcDInyUKRag3LHnRayCl8",
    authDomain: "last-project-teamb.firebaseapp.com",
    projectId: "last-project-teamb",
    storageBucket: "last-project-teamb.appspot.com",
    messagingSenderId: "1062830013563",
    appId: "1:1062830013563:web:ee713d09bf7daa5b6436de"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
