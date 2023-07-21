import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyASo0uvDIQ7TSqYQgZk1c9_-wv1DeT9g7Q",
    authDomain: "chat-on-5e89d.firebaseapp.com",
    projectId: "chat-on-5e89d",
    storageBucket: "chat-on-5e89d.appspot.com",
    messagingSenderId: "704116147255",
    appId: "1:704116147255:web:006717f6a317af03e8ebb2"
  };

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
