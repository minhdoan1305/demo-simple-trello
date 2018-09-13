import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import ButtonRemoveCard from '../../buttons/buttonCard/buttonRemoveCard';
import CardDetail from "../../modals/modalCardDetail";
import * as actions from '../../../redux/actions/cardAction';
import {Dispatch} from "redux";

const Wrapper = styled.div`
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Content = styled.div`
    width: 90%;
    border-radius: 5px;
    cursor: pointer;
    background: white;
    
    &:hover ,&:focus {
        background: rgb(255, 255, 255, 0.6);
    }
`

const Title = styled.div`
    float: left;
    width: 80%;
`

const Context = styled.p`
    text-align: left;
    padding-left: 10px;
    word-break: break-all;
    margin: 0px;
`

interface Props {
    idCard: string;
    content: string;
    description: string;
    index: number;
    idList: string;
}

type CProps = IDispatch & Props;

class Item extends React.Component<CProps> {
    onClickTitle = () => {
        this.props.takeDetail(
            this.props.idCard,
            this.props.idList,
            this.props.content,
            this.props.description,
            this.props.index);
        this.props.showDetail();
    }

    render() {
        return (
            <div>
                <Wrapper>
                    <Content>
                        <Title onClick={this.onClickTitle}>
                            <Context>{this.props.content}</Context>
                        </Title>
                        <ButtonRemoveCard
                            idCard={this.props.idCard}
                            idList={this.props.idList}/>
                    </Content>
                </Wrapper>
                <CardDetail/>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {}
};

type TDispatch = actions.ShowDetail | actions.TakeDetail

const mapDispatchToProps = (dispatch: Dispatch<TDispatch>) => {
    return {
        showDetail: () =>
            dispatch(actions.showDetail()),
        takeDetail: (idCard, idList, content, description, index) =>
            dispatch(actions.takeDetail(idCard, idList, content, description, index))
    }
}

interface IDispatch {
    showDetail: () => void;
    takeDetail: (idCard, idList, content, description, index) => void;
}

export default connect<{}, IDispatch>(mapStateToProps, mapDispatchToProps)(Item);

