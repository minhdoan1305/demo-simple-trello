import * as constants from './constants';

export interface SignIn {
    type: constants.SIGN_IN,
    propsSignIn: any
};

export interface SignOut {
    type: constants.SIGN_OUT,
    propsSignOut: any
};

export type UserAction = SignIn | SignOut;

export function signIn(propsSignIn): SignIn {
    return {
        type: constants.SIGN_IN,
        propsSignIn
    }
}

export function signOut(propsSignOut): SignOut {
    return {
        type: constants.SIGN_OUT,
        propsSignOut
    }
}