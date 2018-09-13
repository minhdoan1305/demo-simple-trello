import {IUser} from '../../types/userState';
import {SIGN_IN, SIGN_OUT} from "../actions/constants";
import {UserAction} from '../actions/userAction';

const initialState: IUser = {
    isLoading: false,
    propsSignIn: "",
    propsSignOut: "",

}

export function userReducer(state: IUser = initialState, action: UserAction) {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isLoading: true, propsSignIn: action.propsSignIn};

        case SIGN_OUT:
            return {...state, isLoading: false, propsSignOut: action.propsSignOut};

        default:
            return state;
    }
}
