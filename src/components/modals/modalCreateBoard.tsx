import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import TextInput from '../inputs/inputTitleBoard';
import ListBox from '../lists/colors/arrayColor';
import ButtonCreateBoard from '../buttons/buttonBoard/buttonCreateBoard';
import {IStateStore} from "../../types";
import {Dispatch} from "redux";
import * as actions from '../../redux/actions/boardAction';

const Modal = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

const ModalContent = styled.div`
    margin: 5% auto;
    padding: 20px;
    width: 30%;
`

const Close = styled.span`
    color: black;
    float: right;
    margin-top: -10px;
    margin-right: -20px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    &:hover, &:focus {
        color: #ED213A;
    }
`

const Wrapper = styled.div`
    text-align: center;
`

type CProps = IProps & IDispatch

class ModalCreateBoard extends React.Component<CProps> {
    onClickButton = () => {
        this.props.hiddenModal();
    }

    onCreateBoard = () => {
        this.props.createNewBoard(this.props.title, this.props.color);
    }

    render() {
        return (
            <Modal style={{display: this.props.isShow}}>
                <ModalContent>
                    <Close onClick={this.onClickButton}>
                        &times;
                    </Close>
                    <Wrapper>
                        <TextInput onCreateBoard={this.onCreateBoard}/>
                        <ListBox/>
                        <ButtonCreateBoard onCreateBoard={this.onCreateBoard}/>
                    </Wrapper>
                </ModalContent>
            </Modal>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        isShow: state.board.isShow,
        title: state.board.title,
        color: state.board.color
    }
}

type TDispatch = actions.CreateNewBoard | actions.HiddenModal

const mapDispatchToProps = (dispatch: Dispatch<TDispatch>) => {
    return {
        createNewBoard: (title, color) =>
            dispatch(actions.createNewBoard(title, color)),
        hiddenModal: () =>
            dispatch(actions.hiddenModal()),
    }
}

interface IProps {
    isShow: string;
    title: string;
    color: string;
}

interface IDispatch {
    createNewBoard: (title, color) => void
    hiddenModal: () => void;
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(ModalCreateBoard);