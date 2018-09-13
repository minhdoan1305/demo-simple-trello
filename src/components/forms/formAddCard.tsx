import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import TextInput from '../inputs/inputContentCard';
import ButtonAddCard from '../buttons/buttonCard/buttonCreateCard';
import {IStateStore} from "../../types";
import {Dispatch} from "redux";
import * as actions from "../../redux/actions/cardAction";

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
    margin-top: 10px;
    background: rgb(226, 228, 230);
`

const Close = styled.span`
    color: black;
    float: left;
    margin-left: 5px;
    margin-top: 0px;
    font-size: 23px;
    cursor: pointer;

    &:hover, &:focus {
        color: #ED213A;
    }
`

interface Props {
    idList: string;
    content: string;
    indexAdd: number;
    onAddorCancel: () => void;
}

interface State {
    content: string;
}

type CProps = IProps & IDispatch & Props;

class FormAddCard extends React.Component<CProps, State> {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        }
    }

    onClose = () => {
        this.props.onAddorCancel();
        this.setState({content: ""});
    }

    onChangeContent = (content) => {
        this.setState({content});
    }

    onAddCard = () => {
        this.props.createNewCard(
            this.props.id,
            this.props.idList,
            this.state.content,
            this.props.indexAdd);
        this.onClose();
    }

    render() {
        return (
            <Add>
                <div>
                    <TextInput
                        content={this.state.content}
                        onChangeContent={this.onChangeContent}
                        onAddCard={this.onAddCard}/>
                    <div>
                        <ButtonAddCard
                            content={this.state.content}
                            onAddCard={this.onAddCard}/>
                        <Close onClick={this.props.onAddorCancel}>
                            &times;
                        </Close>
                    </div>
                </div>
            </Add>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        id: state.board.id,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.CreateNewCard>) => {
    return {
        createNewCard: (id, idList, content, index) =>
            dispatch(actions.createNewCard(id, idList, content, index))
    }
}

interface IProps {
    id: string
}

interface IDispatch {
    createNewCard: (id, idList, content, index) => void;
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(FormAddCard);