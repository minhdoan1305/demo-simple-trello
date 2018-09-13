import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/boardAction';
import {Dispatch} from "redux";

const CreateBoard = styled.button`
    border-radius: 5px;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(237, 239, 240, 0.5);
    font-weight: bold;
    font-size: 16px;
    font-family: 'Patrick Hand', cursive;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 5px 5px 0px #888888;
        z-index: 1;
        background: rgb(237, 239, 240);
        text-decoration: underline;
    }
`

type CProps = IProps & IDispatch

class CreateNewBoard extends React.Component<CProps> {
    render() {
        return (
            <CreateBoard onClick={this.props.showModal}>
                Create new board ...
            </CreateBoard>
        );
    };
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch: Dispatch<actions.ShowModal>) => {
    return {
        showModal: () => dispatch(actions.showModal())
    }
}

interface IProps {

}

interface IDispatch {
    showModal: () => void
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(CreateNewBoard);