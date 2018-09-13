import * as constants from './constants';

export interface CreateNewCard {
    type: constants.CREATE_NEW_CARD;
    id: string;
    idList: string;
    content: string;
    index: number;
}

export interface DeleteCard {
    type: constants.DELETE_CARD;
    id: string;
    idList: string;
    idCard: string;
}

export interface EditCard {
    type: constants.EDIT_CARD;
    id: string;
    idList: string;
    idCard: string;
    content: string;
    description: string;
    index: number;
}

export interface ShowDetail {
    type: constants.SHOW_DETAIL;
}

export interface HiddenDetail {
    type: constants.HIDDEN_DETAIL;
}

export interface TakeDetail {
    type: constants.TAKE_DETAIL;
    idCard: string;
    idList: string;
    content: string;
    description: string;
    index: number;
}

export interface ChangeContent {
    type: constants.CHANGE_CONTENT;
    content: string;
}

export interface ChangeDescription {
    type: constants.CHANGE_DESCRIPTION;
    description: string;
}

export type CardAction = CreateNewCard | DeleteCard | EditCard | ShowDetail | HiddenDetail | TakeDetail | ChangeContent | ChangeDescription;

export function createNewCard(id, idList, content, index): CreateNewCard {
    return {
        type: constants.CREATE_NEW_CARD,
        id, idList, content, index
    }
}

export function deleteCard(id, idList, idCard): DeleteCard {
    return {
        type: constants.DELETE_CARD,
        id, idList, idCard
    }
}

export function editCard(id, idList, idCard, content, description, index): EditCard {
    return {
        type: constants.EDIT_CARD,
        id, idList, idCard, content, description, index
    }
}

export function showDetail(): ShowDetail {
    return {
        type: constants.SHOW_DETAIL
    }
}

export function hiddenDetail(): HiddenDetail {
    return {
        type: constants.HIDDEN_DETAIL
    }
}

export function takeDetail(idCard, idList, content, description, index): TakeDetail {
    return {
        type: constants.TAKE_DETAIL,
        idCard, idList, content, description, index
    }
}

export function changeContent(content): ChangeContent {
    return {
        type: constants.CHANGE_CONTENT,
        content
    }
}

export function changeDescription(description): ChangeDescription {
    return {
        type: constants.CHANGE_DESCRIPTION,
        description
    }
}