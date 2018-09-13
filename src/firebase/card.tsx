import {itemRef} from './config';

export const createNewCard = (id: string, idList: string, content: string, index: number) => {
    const idCard = itemRef.child(id).child("lists").child(idList).child("cards").push().key
    if (idCard != null) {
        itemRef.child(id).child("lists").child(idList).child("cards").child(idCard).set({
            idCard,
            content,
            index,
            description: "",
        });
    }
}

export const deleteCard = (id: string, idList: string, idCard: string) => {
    itemRef.child(id).child("lists").child(idList).child("cards").child(idCard).remove();
}

export const editCard = (id: string, idList: string, idCard: string, content: string, description: string, index: number) => {
    itemRef.child(id).child("lists").child(idList).child("cards").child(idCard).set({
        content,
        idCard,
        index,
        description
    });
}