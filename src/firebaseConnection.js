import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBU5rHu725TUoVXGkFlZgVyX7DhHxzY7JQ",
    authDomain: "curso-32ffb.firebaseapp.com",
    projectId: "curso-32ffb",
    storageBucket: "curso-32ffb.appspot.com",
    messagingSenderId: "821408775668",
    appId: "1:821408775668:web:8096de649906334c410da1",
    measurementId: "G-2JB0830VJ9"
  };

  const firebaseApp = initializeApp(firebaseConfig);


  const db = getFirestore(firebaseApp);

  const auth = getAuth(firebaseApp);

  export { db, auth };