import {IBoard} from '../../types/boardState';
import * as constants from "../actions/constants";
import {BoardAction} from "../actions/boardAction";
import color from "../../constants/color";

const initialState: IBoard = {
    isShow: "none",
    color: color[0],
    title: "",
    id: ""
}

export function boardReducer(state: IBoard = initialState, action: BoardAction) {
    switch (action.type) {
        case constants.SHOW_MODAL:
            return {...state, isShow: "block"};

        case constants.HIDDEN_MODAL:
            return {...state, isShow: "none", title: "", color: color[0]};

        case constants.CHANGE_TITLE:
            return {...state, title: action.title};

        case constants.CHANGE_COLOR:
            return {...state, color: action.color};

        case constants.CREATE_NEW_BOARD:
            return {...state, title: action.title, color: action.color};

        case constants.TAKE_ID:
            return {...state, id: action.id};

        default:
            return state;
    }
};