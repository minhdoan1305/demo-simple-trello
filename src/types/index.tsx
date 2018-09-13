import {IUser} from "./userState";
import {IBoard} from "./boardState";
import {IListCard} from "./listCardState";
import {ICard} from "./cardState";

export interface IStateStore {
    user: IUser,
    board: IBoard,
    listCard: IListCard,
    card: ICard
}