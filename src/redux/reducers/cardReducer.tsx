import {ICard} from "../../types/cardState";
import * as constants from "../actions/constants";
import {CardAction} from "../actions/cardAction";

const initialState: ICard = {
    isShow: "none",
    id: "",
    idList: "",
    idCard: "",
    content: "",
    description: "",
    index: 0,
}

export function cardReducer(state: ICard = initialState, action: CardAction) {
    switch (action.type) {
        case constants.CREATE_NEW_CARD:
            return {
                ...state,
                id: action.id,
                idList: action.idList,
                content: action.content,
                index: action.index
            };

        case constants.DELETE_CARD:
            return {
                ...state,
                id: action.id,
                idList: action.idList,
                idCard: action.idCard
            };

        case constants.EDIT_CARD:
            return {
                ...state,
                id: action.id,
                idList: action.idList,
                idCard: action.idCard,
                content: action.content,
                description: action.description,
                index: action.index,
            }

        case constants.SHOW_DETAIL:
            return {
                ...state,
                isShow: "block"
            };

        case constants.HIDDEN_DETAIL:
            return {
                ...state,
                isShow: "none"
            };

        case constants.TAKE_DETAIL:
            return {
                ...state,
                idCard: action.idCard,
                idList: action.idList,
                content: action.content,
                description: action.description,
                index: action.index,
            };

        case constants.CHANGE_CONTENT:
            return {
                ...state,
                content: action.content
            };

        case constants.CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.description
            };

        default:
            return state;
    }
};