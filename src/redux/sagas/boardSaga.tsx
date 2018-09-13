import {put, call, takeLatest} from "redux-saga/effects";
import {createNewBoard, deleteBoard} from "../../firebase/board";
import * as constants from "../actions/constants";
import * as actions from "../actions/boardAction";

function* createBoard(action) {
    yield call(createNewBoard, action.title, action.color);
    yield put(actions.hiddenModal());
}

export function* watchCreateBoard() {
    yield takeLatest(constants.CREATE_NEW_BOARD, createBoard);
}

export function* removeBoard(action) {
    yield call(deleteBoard, action.id);
}

export function* watchDeleteBoard() {
    yield takeLatest(constants.DELETE_BOARD, removeBoard);
}