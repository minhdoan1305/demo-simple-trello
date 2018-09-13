import * as React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 90%;
    padding: 3px;
    font-size: 14px;
    font-family: 'Patrick Hand', cursive;
`

interface Props {
    name: string;
    addListCard: () => void;
    onChangeName: (name) => void;
}

class TextInput extends React.Component<Props> {
    onChangeName = (event) => {
        this.props.onChangeName(event.target.value);
    }
    pressEnter = (event) => {
        if (event.keyCode === 13 && this.props.name !== "") {
            this.props.addListCard();
        }
    }

    render() {
        return (
            <Input
                type="text"
                placeholder="Enter list title..."
                value={this.props.name}
                onChange={this.onChangeName}
                onKeyDown={this.pressEnter}/>
        );
    };
}

export default TextInput;