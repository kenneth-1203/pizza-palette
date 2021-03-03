import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD64g8MbS1p5tNKg_009C-gZoKXliIakNo",
  authDomain: "palette-store.firebaseapp.com",
  projectId: "palette-store",
  storageBucket: "palette-store.appspot.com",
  messagingSenderId: "146446562413",
  appId: "1:146446562413:web:86c77b19037a780eaefb64",
  measurementId: "G-NX89LWHE1T",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;