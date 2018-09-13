import * as React from 'react';
import styled from 'styled-components';
import {Draggable, Droppable} from "react-beautiful-dnd";
import Item from './itemCard';
import {ICards} from "../../../types/components";

const List = styled.div`
    margin-top: 10px;
`

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    padding: 2,
});

interface Props {
    idList: string;
    cards: ICards[];
}

class ListCard extends React.Component<Props> {
    render() {
        return (
            <List>
                <Droppable droppableId={this.props.idList || ""} type="card">
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                            {...provided.droppableProps}>
                            {
                                this.props.cards.map((item, index) => (
                                    <Draggable
                                        key={item.idCard || ""}
                                        draggableId={item.idCard || ""}
                                        index={index}>
                                        {(dragProvided, dragSnapshot) => (
                                            <div
                                                ref={dragProvided.innerRef}
                                                style={getItemStyle(
                                                    dragSnapshot.isDragging,
                                                    dragProvided.draggableProps.style)}
                                                {...dragProvided.draggableProps}
                                                {...dragProvided.dragHandleProps}>
                                                <Item
                                                    idCard={item.idCard}
                                                    idList={this.props.idList}
                                                    content={item.content}
                                                    description={item.description}
                                                    index={item.index}/>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </List>
        );
    };
}

export default ListCard;
