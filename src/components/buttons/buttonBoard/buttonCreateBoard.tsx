import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {IStateStore} from "../../../types";

const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    font-family: 'Patrick Hand', cursive;
`
interface Props {
    onCreateBoard: () => void;
}

type CProps = IProps & Props;

class ButtonCreateBoard extends React.Component<CProps> {
    onClickButton = () => {
        this.props.onCreateBoard();
    }

    render() {
        return (
            <Button
                onClick={this.onClickButton}
                style={this.props.title === "" ?
                    {color: "rgb(165, 172, 176)"} :
                    {background: "rgb(90, 172, 68)", color: "white"}}
                disabled={this.props.title === ""}>
                Create Board
            </Button>
        );
    };
}

const mapStateToProps = (state: IStateStore) => {
    return {
        title: state.board.title,
    }
}

interface IProps {
    title: string;
}

export default connect<IProps>(mapStateToProps)(ButtonCreateBoard)