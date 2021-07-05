import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// import 'firebase/analytics';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCws1WDqBu3lrYxdV3AjYiWJR_7q-hb734',
  authDomain: 'bineetnaidu-io.firebaseapp.com',
  projectId: 'bineetnaidu-io',
  storageBucket: 'bineetnaidu-io.appspot.com',
  messagingSenderId: '751386288213',
  appId: '1:751386288213:web:b606e1a4ed41ddad9274dc',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const projectFirestore = firebase.firestore();
// export const projectAnalytics = firebase.analytics();
