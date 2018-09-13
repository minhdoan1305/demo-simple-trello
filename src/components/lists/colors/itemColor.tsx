import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {iconCheck} from '../../../constants/logo';
import {IStateStore} from "../../../types";
import * as actions from '../../../redux/actions/boardAction';
import {Dispatch} from "redux";

const BoxColor = styled.div`
    float: left;
    width: 15%;
    height: 30px;
    margin: 9px;
    border-radius: 5px;
    cursor: pointer;
    padding-top: 3px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 3px;
`

const Image = styled.img`
    width: 20px;
    height: 20px;
    padding: auto;
`

interface Props {
    bgColor: string
}

type CProps = Props & IProps & IDispatch;

class Box extends React.Component<CProps> {
    render() {
        return (
            <BoxColor
                style={{background: this.props.bgColor}}
                onClick={() => this.props.onChangeColor(this.props.bgColor)}>
                {
                    this.props.bgColor === this.props.color ?
                        <Image src={iconCheck} alt=""/> :
                        null
                }
            </BoxColor>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        color: state.board.color
    }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.ChangeColor>) => {
    return {
        onChangeColor: (color: string) => dispatch(actions.changeColor(color))
    }
}

interface IProps {
    color: string
}

interface IDispatch {
    onChangeColor: (color) => void
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(Box);