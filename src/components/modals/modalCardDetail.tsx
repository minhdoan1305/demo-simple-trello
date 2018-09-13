import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import FormCardDetail from '../forms/formCardDetail';
import {IStateStore} from "../../types";
import * as actions from '../../redux/actions/cardAction';
import {Dispatch} from "redux";

const Modal = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.1);
`

const ModalContent = styled.div`
    margin: 5% auto;
    padding: 20px;
    width: 30%;
    border-radius: 5px;
    background: white;
`

const Close = styled.span`
    color: black;
    float: right;
    margin-top: -25px;
    margin-right: -10px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    &:hover, &:focus {
        color: #ED213A;
    }
`

type CProps = IProps & IDispatch

class CardDetail extends React.Component<CProps> {
    render() {
        return (
            <Modal style={{display: this.props.isShow}}>
                <ModalContent>
                    <Close onClick={this.props.hiddenDetail}>
                        &times;
                    </Close>
                    <FormCardDetail/>
                </ModalContent>
            </Modal>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        isShow: state.card.isShow
    }
};

const mapDispatchToProps = (dispatch: Dispatch<actions.HiddenDetail>) => {
    return {
        hiddenDetail: () => dispatch(actions.hiddenDetail())
    }
}

interface IProps {
    isShow: string;
}

interface IDispatch {
    hiddenDetail: () => void;
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(CardDetail);