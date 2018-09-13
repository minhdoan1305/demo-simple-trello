import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import TextInput from '../inputs/inputNameListCard';
import ButtonAddList from '../buttons/buttonListCard/buttonAddListCard';
import * as actions from '../../redux/actions/listCardAction';
import {Dispatch} from "redux";
import {IListCards} from "../../types/components";
import {IStateStore} from "../../types";

const Add = styled.div`
    height: 60px;
    width: 210px;
    border-radius: 5px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    padding: 5px;
    margin-top: 20px;
    margin-left: 20px;
    background: rgb(226, 228, 230);
`

const Column = styled.div`
    width: 93%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const Close = styled.span`
    color: black;
    float: left;
    margin-top: 3px;
    margin-left: 10px;
    font-size: 23px;
    cursor: pointer;

    &:hover, &:focus {
        color: #ED213A;
    }
`

interface State {
    name: string;
}

interface Props {
    onClose: () => void
}

type CProps = Props & IProps & IDispatch;

class FormAddList extends React.Component<CProps, State> {
    constructor(props: CProps) {
        super(props);

        this.state = {
            name: ""
        }
    }

    onChangeName = (name) => {
        this.setState({name});
    }

    onClose = () => {
        this.props.onClose();
        this.setState({name: ""})
    }

    addListCard = () => {
        const array: any = this.props.list === [] ? [{index: -1}] : this.props.list;
        const index: number = array.reduce((i, item) => (i = item.index + 1), 0);
        this.props.createNewListCard(this.props.id, this.state.name, index);
        this.onClose();
    }

    render() {
        return (
            <Add>
                <TextInput
                    name={this.state.name}
                    onChangeName={this.onChangeName}
                    addListCard={this.addListCard}/>
                <Column>
                    <ButtonAddList
                        name={this.state.name}
                        addListCard={this.addListCard}/>
                    <Close onClick={this.onClose}>
                        &times;
                    </Close>
                </Column>
            </Add>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        id: state.board.id,
        list: state.listCard.list,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.CreateNewListCard>) => {
    return {
        createNewListCard: (id, name, index) =>
            dispatch(actions.createNewListCard(id, name, index))
    }
}

interface IProps {
    id: string;
    list: IListCards[];
}

interface IDispatch {
    createNewListCard: (id, name, index) => void;
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(FormAddList);