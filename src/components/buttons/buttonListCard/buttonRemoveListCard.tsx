import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {iconDelete} from '../../../constants/logo';
import {IStateStore} from "../../../types";
import {Dispatch} from "redux";
import * as actions from "../../../redux/actions/listCardAction";

const Button = styled.div`
    float: right;
    margin-top: -25px;
    margin-right: 10px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2px;
    cursor: pointer;
    
    &:hover, &:focus {
        background: rgba(0, 0, 0, 0.1);
    }
`

const Image = styled.img`
    width: 15px;
    display: block;
`

interface Props {
    idList: string;
}

type CProps = Props & IProps & IDispatch;

class ButtonRemoveList extends React.Component<CProps> {
    onClickButton = () => {
        this.props.deleteListCard(this.props.id, this.props.idList);
    }

    render() {
        return (
            <Button onClick={this.onClickButton}>
                <Image src={iconDelete}/>
            </Button>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        id: state.board.id,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.DeleteListCard>) => {
    return {
        deleteListCard: (id, idList) => dispatch(actions.deleteListCard(id, idList))
    }
}

interface IProps {
    id: string;
}

interface IDispatch {
    deleteListCard: (id, idList) => void;
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(ButtonRemoveList)