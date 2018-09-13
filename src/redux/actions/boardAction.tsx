import * as constants from './constants';

export interface ShowModal {
    type: constants.SHOW_MODAL;
}

export interface HiddenModal {
    type: constants.HIDDEN_MODAL;
}

export interface ChangeTitle {
    type: constants.CHANGE_TITLE;
    title: string;
}

export interface ChangeColor {
    type: constants.CHANGE_COLOR;
    color: string;
}

export interface CreateNewBoard {
    type: constants.CREATE_NEW_BOARD;
    title: string;
    color: string;
}

export interface DeleteBoard {
    type: constants.DELETE_BOARD;
    id: string;
}

export interface TakeId {
    type: constants.TAKE_ID;
    id: string;
}

export type BoardAction = ShowModal | HiddenModal | ChangeColor | ChangeTitle | CreateNewBoard | DeleteBoard | TakeId ;

export function showModal(): ShowModal {
    return {
        type: constants.SHOW_MODAL
    }
}

export function hiddenModal(): HiddenModal {
    return {
        type: constants.HIDDEN_MODAL
    }
}

export function changeTitle(title): ChangeTitle {
    return {
        type: constants.CHANGE_TITLE,
        title
    }
}

export function changeColor(color): ChangeColor {
    return {
        type: constants.CHANGE_COLOR,
        color
    }
}

export function createNewBoard(title, color): CreateNewBoard {
    return {
        type: constants.CREATE_NEW_BOARD,
        title, color
    }
}

export function deleteBoard(id): DeleteBoard {
    return {
        type: constants.DELETE_BOARD,
        id
    }
}

export function takeId(id): TakeId {
    return {
        type: constants.TAKE_ID,
        id
    }
}


