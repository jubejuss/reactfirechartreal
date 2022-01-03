import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAUvRzhtkYHWS0iOXbAlRDVPVvgPdqPMgs',
  authDomain: 'korras-paev.firebaseapp.com',
  databaseURL:
    'https://korras-paev-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'korras-paev',
  storageBucket: 'korras-paev.appspot.com',
  messagingSenderId: '53569576870',
  appId: '1:53569576870:web:80f7f845335ae3d9923967',
};

firebase.initializeApp(config);

export const f = firebase;
export const database = firebase.database();
