import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';import { getAnalytics } from "firebase/analytics";
import SignInScreen from './screens/SignInScreen/SignInScreen';

const firebaseConfig = {
  apiKey: "AIzaSyBYB_kUsmUEfcK3QSCxD4hLKgLJin7fXUQ",
  authDomain: "congressional-app-93912.firebaseapp.com",
  projectId: "congressional-app-93912",
  storageBucket: "congressional-app-93912.appspot.com",
  messagingSenderId: "954885355301",
  measurementId: "G-RGTKZ8TH1C",
  appId: "1:954885355301:web:cb38568fc2bc1b1fac4ccc"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

const analytics = getAnalytics(app);

export { auth };