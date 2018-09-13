import {IListCards} from "./components";

export interface IListCard {
    list: IListCards[];
    id: string;
    index: number;
    name: string;
    idList: string;
}