import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAPzYN05aSbUgST9ypbuS6uwL6aJSLv6F0',
  authDomain: 'jewel-clothing.firebaseapp.com',
  databaseURL: 'https://jewel-clothing.firebaseio.com',
  projectId: 'jewel-clothing',
  storageBucket: 'jewel-clothing.appspot.com',
  messagingSenderId: '1095239546995',
  appId: '1:1095239546995:web:3f74c0851475d27f9f5206',
  measurementId: 'G-BRL6K0Q1EV'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
