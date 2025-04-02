// Firebase v9+ import syntax using modular SDK
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '@/config/firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

export { auth, app }