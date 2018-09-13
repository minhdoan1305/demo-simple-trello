import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding-top: 2px;
    margin-top: 5px;    
    float: left;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    font-family: 'Patrick Hand', cursive;
    cursor: pointer;
    text-align: center;
`

interface Props {
    name: string;
    addListCard: () => void;
}

class ButtonAddList extends React.Component<Props> {
    render() {
        return (
            <Button
                style={this.props.name === "" ?
                    {background: "rgb(165, 172, 176)", color: "black"} :
                    {background: "rgb(90, 172, 68)", color: "white"}}
                disabled={this.props.name === ""}
                onClick={this.props.addListCard}>
                Add List
            </Button>
        );
    };
}

export default ButtonAddList;