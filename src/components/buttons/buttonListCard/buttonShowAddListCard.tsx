import * as React from 'react';
import styled from 'styled-components';
import FormAddList from '../../forms/formAddListCard';

const Content = styled.button`
    width: 220px;
    height: 5%;
    border-radius: 5px;
    border: none;
    margin-left: 20px;
    margin-top: 20px;
    text-align: center;
    padding: 5px; 
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Patrick Hand', cursive;
    background: rgba(0, 0, 0, 0.1);

    &:hover {
        background: rgba(237, 239, 240, 0.5);
    }
`

interface State {
    isShow: boolean;
}

interface Props {

}

class AddList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isShow: false
        }
    }

    onClickButton = () => {
        this.setState({isShow: !this.state.isShow})
    }

    render() {
        return (
            this.state.isShow ?
                <FormAddList onClose={this.onClickButton}/> :
                <Content
                    onClick={this.onClickButton}>
                    Add Another List ...
                </Content>
        );
    };
}

export default AddList;