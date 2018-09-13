import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/cardAction';
import {Dispatch} from "redux";
import {IStateStore} from "../../types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.input`
    border: none;
    border-radius: 10px;
    padding: 5px;
    text-align: center;
    font-size: 23px;
    font-weight: bold;
    font-family: 'Patrick Hand', cursive;
`

const Span = styled.span`
    margin-top: 10px;
    margin-bottom: -20px;
    font-size: 15px;
`

const Description = styled.textarea`
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    font-family: 'Patrick Hand', cursive;
`

const Save = styled.button`
    margin-top: 20px;
    width: 20%;
    border-radius: 5px;
    background: black;
    color: white;
    font-size: 16px;
    font-family: 'Patrick Hand', cursive;
    cursor: pointer;
`

type CProps = IProps & IDispatch;

class FormCardDetail extends React.Component<CProps> {
    onSave = () => {
        this.props.editCard(
            this.props.id,
            this.props.idList,
            this.props.idCard,
            this.props.content,
            this.props.description,
            this.props.index);
        this.props.hiddenDetail();
    }

    pressEnter = (event) => {
        if (event.keyCode === 13 && this.props.content !== "") {
            this.onSave();
        }
    }

    render() {
        return (
            <Wrapper>
                <Title
                    style={{color: this.props.color}}
                    value={this.props.content}
                    onChange={(event) => this.props.changeContent(event.target.value)}
                    onKeyDown={this.pressEnter}/>
                <Span>Description:</Span><br/>
                <Description
                    value={this.props.description}
                    onChange={(event) => this.props.changeDescription(event.target.value)}>
                </Description>
                <Save
                    style={this.props.content === "" ?
                        {} :
                        {background: "rgb(90, 172, 68)"}}
                    disabled={this.props.content === ""}
                    onClick={this.onSave}>
                    Save
                </Save>
            </Wrapper>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        idCard: state.card.idCard,
        idList: state.card.idList,
        content: state.card.content,
        description: state.card.description,
        index: state.card.index,
        id: state.board.id,
        color: state.board.color,
    }
};

type TDispatch = actions.HiddenDetail | actions.ChangeContent | actions.ChangeDescription | actions.EditCard;

const mapDispatchToProps = (dispatch: Dispatch<TDispatch>) => {
    return {
        hiddenDetail: () =>
            dispatch(actions.hiddenDetail()),
        changeContent: (content) =>
            dispatch(actions.changeContent(content)),
        changeDescription: (description) =>
            dispatch(actions.changeDescription(description)),
        editCard: (id, idList, idCard, content, description, index) =>
            dispatch(actions.editCard(id, idList, idCard, content, description, index))
    }
}

interface IProps {
    idCard: string;
    content: string;
    description: string;
    index: number;
    idList: string;
    id: string;
    color: string;
}

interface IDispatch {
    hiddenDetail: () => void;
    changeContent: (content) => void;
    changeDescription: (description) => void;
    editCard: (id, idList, idCard, content, description, index) => void;
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(FormCardDetail);