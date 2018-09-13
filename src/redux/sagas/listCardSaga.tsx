import {call, takeLatest} from "redux-saga/effects";
import {createNewListCard, deleteListCard} from "../../firebase/listCard";
import * as constants from "../actions/constants";

function* createListCard(action) {
    yield call(createNewListCard, action.id, action.name, action.index);
}

export function* watchCreateListCard() {
    yield takeLatest(constants.CREATE_NEW_LIST_CARD, createListCard);
}

export function* removeListCard(action) {
    yield call(deleteListCard, action.id, action.idList);
}

export function* watchDeleteListCard() {
    yield takeLatest(constants.DELETE_LIST_CARD, removeListCard);
}