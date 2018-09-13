import {firebaseApp} from './config';
import {email, password} from '../constants/authentication';

export const signIn = (propsSignIn: any) => {
    if (propsSignIn != undefined) {
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                propsSignIn.history.replace(`/home`);
            })
            .catch((e) => {
                console.log("Error !!! " + e);
            });
    }

};

export const signOut = (propsSignOut: any) => {
    if (propsSignOut != undefined) {
        firebaseApp.auth().signOut()
            .then(() => {
                propsSignOut.history.replace(`/`);
            })
            .catch((e) => {
                console.log("Error !!! " + e);
            });
    }
};