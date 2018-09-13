export interface IBoards {
    idBoard: string;
    color: string;
    title: string;
    lists: IListCards[];
};

export interface IListCards {
    idList: string;
    index: number;
    name: string;
    cards: ICards[];
};

export interface ICards {
    content: string;
    description: string;
    idCard: string;
    index: number;
};

