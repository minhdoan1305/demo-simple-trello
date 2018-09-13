import {itemRef} from './config';

export const createNewListCard = (id: string, name: string, index: string) => {
    const idList = itemRef.child(id).child("lists").push().key;
    if (idList != null) {
        itemRef.child(id).child("lists").child(idList).set({idList, name, index});
    }
}

export const deleteListCard = (id: string, idList: string) => {
    itemRef.child(id).child("lists").child(idList).remove();
}