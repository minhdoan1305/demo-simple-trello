import * as React from 'react';
import styled from 'styled-components';


const Item = styled.div`
    border-radius: 5px;
    height: 110px;
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    cursor: pointer;
    padding: 10px;
    
    &:hover, &:focus {
        box-shadow: 0px 5px 5px 0px #888888;
        z-index: 1;
    }
`

const Title = styled.div`
    width: 100%;
    height: 100%;
    word-break: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 16px;
    font-family: 'Patrick Hand', cursive;
`

interface Props {
    color: string;
    title: string;
}

class Board extends React.Component<Props> {
    render() {
        return (
            <Item
                style={{background: this.props.color}}>
                <Title>{this.props.title}</Title>
            </Item>
        );
    };
}

export default Board;