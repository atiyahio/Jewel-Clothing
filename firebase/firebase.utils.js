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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShop = await userRef.get();

  if (!snapShop.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('Error creating user: ', err.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters({ display: 'popup' });

export const signInWithFb = () => auth.signInWithPopup(fbProvider);

const twProvider = new firebase.auth.TwitterAuthProvider();

export const signInWithTw = () => auth.signInWithPopup(twProvider);

export default firebase;
