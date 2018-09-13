import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {iconRemove} from '../../../constants/logo';
import {IStateStore} from "../../../types";
import {Dispatch} from "redux";
import * as actions from '../../../redux/actions/cardAction';

const Button = styled.div`
    float: right;
    cursor: pointer;
    margin-right: 5px;
    margin-top: 6px;
    margin-left: -18px;
`

const Image = styled.img`
    width: 15px;
    display: block;
`

interface Props {
    idList: string;
    idCard: string
}

type CProps = Props & IProps & IDispatch;

class ButtonRemoveCard extends React.Component<CProps> {
    onClickButton = () => {
        this.props.deleteCard(this.props.id, this.props.idList, this.props.idCard);
    }

    render() {
        return (
            <Button onClick={this.onClickButton}>
                <Image src={iconRemove}/>
            </Button>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        id: state.board.id
    }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.DeleteCard>) => {
    return {
        deleteCard: (id, idList, idCard) => dispatch(actions.deleteCard(id, idList, idCard))
    }
}

interface IProps {
    id: string;
}

interface IDispatch {
    deleteCard: (id, idList, idCard) => void;
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(ButtonRemoveCard);