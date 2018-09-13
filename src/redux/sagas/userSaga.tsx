import {takeLatest, call} from "redux-saga/effects";
import {signIn, signOut} from '../../firebase/user';
import * as constants from '../../redux/actions/constants'

function* logIn(action) {
    yield call(signIn, action.propsSignIn);
}

export function* watchLogIn() {
    yield takeLatest(constants.SIGN_IN, logIn);
}

function* logOut(action) {
    yield call(signOut, action.propsSignOut);
}

export function* watchLogOut() {
    yield takeLatest(constants.SIGN_OUT, logOut)
}