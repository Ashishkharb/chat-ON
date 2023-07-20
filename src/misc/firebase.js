import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyAwIz877ZHrbPsD40DF9Dh8iTClzcAQIzs',
    authDomain: 'chat-on-31c9e.firebaseapp.com',
    projectId: 'chat-on-31c9e',
    storageBucket: 'chat-on-31c9e.appspot.com',
    messagingSenderId: '900681222453',
    appId: '1:900681222453:web:fc55b9a5a2a86d999e247c',

};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
