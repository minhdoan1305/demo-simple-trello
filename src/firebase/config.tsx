import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAq5FI_KT2VIfE7-RIDW6YZL1aITW5yUys",
    authDomain: "fir-trello.firebaseapp.com",
    databaseURL: "https://fir-trello.firebaseio.com",
    projectId: "fir-trello",
    storageBucket: "fir-trello.appspot.com",
    messagingSenderId: "371899086602"
};


export const firebaseApp = firebase.initializeApp(config);
export const itemRef = firebaseApp.database().ref("boards");