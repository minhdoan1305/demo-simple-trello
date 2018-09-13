import * as constants from '../actions/constants';
import {IListCard} from "../../types/listCardState";
import {ListCardAction} from "../actions/listCardAction";

const initialState: IListCard = {
    list: [],
    name: "",
    index: 0,
    id: "",
    idList: ""
}

export function listCardReducer(state: IListCard = initialState, action: ListCardAction) {
    switch (action.type) {
        case constants.TAKE_LIST:
            return {...state, list: action.listCard};

        case constants.CREATE_NEW_LIST_CARD:
            return {...state, id: action.id, name: action.name, index: action.index};

        case constants.DELETE_LIST_CARD:
            return {...state, id: action.id, idList: action.idList};

        default:
            return state;
    }
};