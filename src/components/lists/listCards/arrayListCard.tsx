import * as React from 'react';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {connect} from 'react-redux';
import {IListCards} from "../../../types/components";
import {itemRef} from '../../../firebase/config';
import Loading from '../../modals/modalLoading';
import Item from './itemListCard';
import {IStateStore} from "../../../types";
import AddList from "../../buttons/buttonListCard/buttonShowAddListCard";
import {Dispatch} from "redux";
import * as actions from '../../../redux/actions/listCardAction';

const sort = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const getListStyle = isDraggingOver => ({
    float: "left",
    display: "inline-flex",
    padding: 10,
});

interface State {
    listCards: IListCards[];
    isLoading: boolean;
}

type CProps = IProps & IDispatch;


class Lists extends React.Component<CProps, State> {
    itemChildList: any;

    constructor(props: CProps) {
        super(props);

        this.state = {
            listCards: [],
            isLoading: true
        }

        this.onDragEnd = this.onDragEnd.bind(this);
        this.itemChildList = itemRef.child(this.props.id).child("lists");
    }

    componentDidMount() {
        this.itemChildList.on("value", (snapshot) => {
            const data = snapshot.val() || {};
            let lists = Object.keys(data).map((key) => data[key]);
            lists.forEach((item) => {
                let array = Object.keys(item.cards || {}).map((key) => item.cards[key])
                item.cards = array.sort((a, b) => a.index - b.index);
            })
            lists.sort((a, b) => a.index - b.index);
            this.setState({listCards: lists, isLoading: false});
            this.props.takeList(lists);
        })
    }

    componentWillUnmount() {
        this.itemChildList.off("value");
    }

    onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        if (result.type === "list") {
            const lists: any = sort(
                this.state.listCards,
                result.source.index,
                result.destination.index
            );
            this.setState({listCards: lists});
            let length = lists.length;
            for (let i = 0; i < length; i++) {
                let data: any = [];
                this.itemChildList.child(lists[i].idList).child("cards").once("value", (snapshot) => {
                    data[i] = snapshot.val();
                }).then(() => {
                    this.itemChildList.child(lists[i].idList).set({
                        name: lists[i].name,
                        index: i,
                        idList: lists[i].idList,
                        cards: data[i],
                    })
                })
            }
        }
        if (result.type === "card") {
            const {source, destination} = result;
            let array: IListCards[] = [...this.state.listCards];
            if (source.droppableId === destination.droppableId) {
                let list: any;
                array.forEach((item) => {
                    if (item.idList === destination.droppableId) {
                        list = sort(
                            item.cards,
                            source.index,
                            destination.index
                        );
                        item.cards = list;
                    }
                })
                this.setState({listCards: array});
                let arrayCard = array.filter((item) => (item.idList === destination.droppableId));
                const arrayLength = arrayCard[0].cards.length;
                for (let i = 0; i < arrayLength; i++) {
                    this.itemChildList.child(arrayCard[0].idList).child("cards").child(arrayCard[0].cards[i].idCard).set({
                        content: arrayCard[0].cards[i].content,
                        description: arrayCard[0].cards[i].description,
                        idCard: arrayCard[0].cards[i].idCard,
                        index: i
                    })
                }
            }
            else {
                let sourceList: any = [], destinationList: any = [];
                array.forEach((item) => {
                    if (item.idList === source.droppableId) {
                        sourceList = item.cards;
                    }
                    else if (item.idList === destination.droppableId) {
                        destinationList = item.cards;
                    }
                })
                const list = move(sourceList, destinationList, source, destination);
                array.forEach((item) => {
                    if (item.idList === source.droppableId) {
                        item.cards = list[source.droppableId];
                    }
                    else if (item.idList === destination.droppableId) {
                        item.cards = list[destination.droppableId];
                    }
                })
                this.setState({listCards: array});
                const arraySource = this.state.listCards.filter((item) => (item.idList === source.droppableId));
                const arrayDestination = array.filter((item) => (item.idList === destination.droppableId));
                this.itemChildList.child(arraySource[0].idList).child("cards").remove();
                const sourceLength = arraySource[0].cards.length;
                for (let i = 0; i < sourceLength; i++) {
                    this.itemChildList.child(arraySource[0].idList).child("cards").child(arraySource[0].cards[i].idCard).set({
                        content: arraySource[0].cards[i].content,
                        description: arraySource[0].cards[i].description,
                        index: i,
                        idCard: arraySource[0].cards[i].idCard
                    })
                }
                const destinationLength = arrayDestination[0].cards.length;
                for (let i = 0; i < destinationLength; i++) {
                    this.itemChildList.child(arrayDestination[0].idList).child("cards").child(arrayDestination[0].cards[i].idCard).set({
                        content: arrayDestination[0].cards[i].content,
                        description: arrayDestination[0].cards[i].description,
                        index: i,
                        idCard: arrayDestination[0].cards[i].idCard
                    })
                }
            }
        }
    }

    render() {
        return (
            this.state.isLoading ? <Loading isLoading={this.state.isLoading}/> :
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable" type="list" direction="horizontal">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef}
                                 style={getListStyle(snapshot.isDraggingOver)}
                                 {...provided.droppableProps}>
                                {
                                    this.state.listCards.map((item, index) => (
                                        <Item
                                            key={item.idList}
                                            idList={item.idList}
                                            index={index}
                                            name={item.name}/>
                                    ))}
                                <AddList/>
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        id: state.board.id
    }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.TakeList>) => {
    return {
        takeList: (list) => dispatch(actions.takeList(list))
    }
}

interface IProps {
    id: string;
}

interface IDispatch {
    takeList: (list) => void;
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(Lists);