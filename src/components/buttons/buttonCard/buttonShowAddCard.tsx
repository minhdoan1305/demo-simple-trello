import * as React from 'react';
import styled from 'styled-components';
import FormAddCard from '../../forms/formAddCard';

const Content = styled.div`
    width: 100%;
    float: left;
    border-radius: 0px 0px 5px 5px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    text-align: left;
    padding: 10px;
    font-weight: bold;
    font-size: 12px;
    
    &:hover {
        background: #cdd2d4;
        width: 91%;
    }
`

interface State {
    isShow: boolean;
}

interface Props {
    indexAdd: number;
    idList: string
}

class AddCard extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            isShow: false
        }
    }

    onAddorCancel = () => {
        this.setState({isShow: !this.state.isShow});
    }

    render() {
        return (
            this.state.isShow ?
                <FormAddCard
                    onAddorCancel={this.onAddorCancel}
                    idList={this.props.idList}
                    indexAdd={this.props.indexAdd}/> :
                <Content
                    onClick={this.onAddorCancel}>
                    + Add Another Card ...
                </Content>
        );
    };
}

export default AddCard;