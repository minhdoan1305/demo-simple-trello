import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {IStateStore} from "../../types";
import {Dispatch} from "redux";
import * as actions from '../../redux/actions/boardAction';

const AddTitleBoard = styled.div`
    padding: 25px 20px; 
    border-radius: 5px;
`

const Input = styled.input`
    width: 85%;
    padding: 10px 3px;
    border: none;
    border-radius: 5px;
    background: transparent;
    color: white;
    font-weight: bold;
    font-size: 18px;
    font-family: 'Patrick Hand', cursive;

    &::-webkit-input-placeholder { color:#fff; }

    &:hover, &:focus {
        background: rgba(255, 255, 255, 0.15);
    }
`

interface Props {
    onCreateBoard: () => void;
}

type CProps = Props & IProps & IDispatch;

class TextInput extends React.Component<CProps> {
    changeTitle = (event) => {
        this.props.onChangeTitle(event.target.value);
    }

    pressEnter = (event) => {
        if (event.keyCode === 13 && this.props.title !== "") {
            this.props.onCreateBoard();
        }
    }

    render() {
        return (
            <AddTitleBoard style={{background: this.props.color}}>
                <Input
                    type="text"
                    placeholder="Add Title Board..."
                    value={this.props.title}
                    onChange={this.changeTitle}
                    onKeyDown={this.pressEnter}/>
            </AddTitleBoard>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        title: state.board.title,
        color: state.board.color
    }
}

type TDispatch = actions.ChangeTitle | actions.CreateNewBoard;

const mapDispatchToProps = (dispatch: Dispatch<TDispatch>) => {
    return {
        onChangeTitle: (title) => dispatch(actions.changeTitle(title)),
    }
}

interface IProps {
    title: string;
    color: string;
}

interface IDispatch {
    onChangeTitle: (title) => void;
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(TextInput);