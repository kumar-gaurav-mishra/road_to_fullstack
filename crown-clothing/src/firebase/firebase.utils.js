import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAEvp1jwl-GyjHkhcbNs-TzNZGPCevlwEw',
  authDomain: 'crown-db-eaca7.firebaseapp.com',
  databaseURL: 'https://crown-db-eaca7.firebaseio.com',
  projectId: 'crown-db-eaca7',
  storageBucket: 'crown-db-eaca7.appspot.com',
  messagingSenderId: '841516581686',
  appId: '1:841516581686:web:979e4274fd66c9de27e997'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
