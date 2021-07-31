import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCjsJGDcRpl2KijVWMIdY6iE3zr568sAk",
  authDomain: "project-cat-walk.firebaseapp.com",
  projectId: "project-cat-walk",
  storageBucket: "project-cat-walk.appspot.com",
  messagingSenderId: "769642641111",
  appId: "1:769642641111:web:dce0204114bd2056a2e292",
  measurementId: "G-99FYMW5YW3"
};

firebase.initializeApp(firebaseConfig);

export const answerImageStorage = firebase.storage();
export const answerImageFireStore = firebase.firestore();
