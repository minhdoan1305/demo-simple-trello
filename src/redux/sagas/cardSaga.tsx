import {call, takeLatest} from "redux-saga/effects";
import {createNewCard, deleteCard, editCard} from "../../firebase/card";
import * as constants from "../../redux/actions/constants";

function* createCard(action) {
    yield call(
        createNewCard,
        action.id,
        action.idList,
        action.content,
        action.index);
}

export function* watchCreateCard() {
    yield takeLatest(constants.CREATE_NEW_CARD, createCard);
}

function* removeCard(action) {
    yield call(
        deleteCard,
        action.id,
        action.idList,
        action.idCard);
}

export function* watchDeleteCard() {
    yield takeLatest(constants.DELETE_CARD, removeCard);
}

function* changeCard(action) {
    yield call(
        editCard,
        action.id,
        action.idList,
        action.idCard,
        action.content,
        action.description,
        action.index);
}

export function* watchEditCard() {
    yield takeLatest(constants.EDIT_CARD, changeCard);
}