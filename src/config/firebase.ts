// firebase.ts
import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA0eoAnE7mXq4JwY6ML2AhysdsaJqejExU',
  authDomain: 'health-3ca09.firebaseapp.com',
  projectId: 'health-3ca09',
  storageBucket: 'health-3ca09.appspot.com',
  messagingSenderId: '518237860857',
  appId: '1:518237860857:android:037bacaa25c21236624328',
};

// initializeApp теперь требует параметр firebaseConfig
const app = await initializeApp(firebaseConfig);
const firebaseAuth = auth(app);

export { app, firebaseAuth };
