import firebase from 'firebase';
import dotenv from 'dotenv'
const path = require("path")

dotenv.config({
  path: path.resolve(__dirname, "../.env")
});

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const fireAuth = firebase.auth();

const usersCollection = firestore.collection('users')
const eventsCollection = firestore.collection('events')
const emailsCollection = firestore.collection('emails')
const timesCollection = firestore.collection('times')

export {
  firebaseApp,
  firestore,
  fireAuth,
  usersCollection,
  eventsCollection,
  timesCollection,
  emailsCollection,
}