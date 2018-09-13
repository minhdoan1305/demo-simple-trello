import {all, fork} from 'redux-saga/effects';
import {watchLogIn, watchLogOut} from "./userSaga";
import {watchCreateBoard, watchDeleteBoard} from "./boardSaga";
import {watchCreateListCard, watchDeleteListCard} from "./listCardSaga";
import {watchCreateCard, watchDeleteCard, watchEditCard} from "./cardSaga";

export function* rootSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchCreateBoard),
        fork(watchDeleteBoard),
        fork(watchCreateListCard),
        fork(watchDeleteListCard),
        fork(watchCreateCard),
        fork(watchDeleteCard),
        fork(watchEditCard)
    ]);
}