import * as constants from './constants';
import {IListCards} from "../../types/components";

export interface TakeList {
    type: constants.TAKE_LIST;
    listCard: IListCards[];
}

export interface CreateNewListCard {
    type: constants.CREATE_NEW_LIST_CARD;
    id: string;
    name: string;
    index: number;
}

export interface DeleteListCard {
    type: constants.DELETE_LIST_CARD;
    id: string;
    idList: string;
}

export type ListCardAction = TakeList | CreateNewListCard | DeleteListCard;

export function takeList(listCard): TakeList {
    return {
        type: constants.TAKE_LIST,
        listCard
    }
}

export function createNewListCard(id, name, index): CreateNewListCard {
    return {
        type: constants.CREATE_NEW_LIST_CARD,
        id, name, index
    }
}

export function deleteListCard(id, idList): DeleteListCard {
    return {
        type: constants.DELETE_LIST_CARD,
        id, idList
    }
}