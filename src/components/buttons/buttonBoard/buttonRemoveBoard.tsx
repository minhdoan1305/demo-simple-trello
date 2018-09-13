import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {iconTrash} from '../../../constants/logo';
import {IStateStore} from "../../../types";
import * as actions from "../../../redux/actions/boardAction";
import {Dispatch} from 'redux';

const Button = styled.div`
    float: right;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    padding: 5px 5px 0px;
    margin-right: 20px;
    cursor: pointer;
    
    &:hover {
        background: rgba(255, 255, 255, 0.8);
    }
        
    &:active {
        background: rgba(255, 255, 255, 1);
    }
`

const Image = styled.img`
    width: 30px;
    height: 30px;
`

interface Props {
    goBackHome: () => void;
}

type CProps = Props & IProps & IDispatch;

class ButtonRemoveBoard extends React.Component<CProps> {
    onClickButton = () => {
        this.props.deleteBoard(this.props.id);
        this.props.goBackHome();
    }

    render() {
        return (
            <Button onClick={this.onClickButton}>
                <Image className="img-responsive" src={iconTrash}/>
            </Button>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        id: state.board.id
    }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.DeleteBoard>) => {
    return {
        deleteBoard: (id) => dispatch(actions.deleteBoard(id))
    }
}

interface IProps {
    id: string;
}

interface IDispatch {
    deleteBoard: (id) => void;
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(ButtonRemoveBoard);