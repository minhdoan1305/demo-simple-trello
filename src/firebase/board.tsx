import {itemRef} from './config';

export const createNewBoard = (title: string, color: string) => {
    const idBoard = itemRef.push().key;
    if (idBoard != null) {
        itemRef.child(idBoard).set({idBoard, title, color});
    }
}

export const deleteBoard = (id: string) => {
    itemRef.child(id).remove();
}