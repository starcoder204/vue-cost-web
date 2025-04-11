// // Firebase v9+ import syntax using modular SDK
// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// // import { getFirestore } from 'firebase/firestore';
// import { firebaseConfig } from '@/config/firebaseConfig';

// import 'firebase/firestore';

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export const db = firebase.firestore();

// export { auth }

import firebase from 'firebase/compat/app';          // ✅ Use compat for v9 in Vue 2
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { firebaseConfig } from '@/config/firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();