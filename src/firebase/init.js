// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBKOJUltBIE6d9elS-IgraiB5v1iYo3RrQ',
    authDomain: 'vivaarium.firebaseapp.com',
    projectId: 'vivaarium',
    storageBucket: 'vivaarium.appspot.com',
    messagingSenderId: '543167008921',
    appId: '1:543167008921:web:7c3cd3b38d2b7a762b2808',
    measurementId: 'G-E9P0EFYGF4',
};

const fireApp = initializeApp(firebaseConfig);

// init firebase
initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();
export default db;
