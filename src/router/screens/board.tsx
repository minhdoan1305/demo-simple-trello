import * as React from 'react';
import styled from 'styled-components';
import {itemRef} from '../../firebase/config';
import Loading from '../../components/modals/modalLoading';
import Header from '../../components/header';
import ButtonRemoveBoard from '../../components/buttons/buttonBoard/buttonRemoveBoard';
import Lists from '../../components/lists/listCards/arrayListCard';
import {IListCards} from '../../types/components';
import {RouteComponentProps} from 'react-router';
import {Dispatch} from "redux";
import * as actions from '../../redux/actions/boardAction';
import {connect} from "react-redux";

const Body = styled.div`
    height: 93.7vh;
`

const Title = styled.div`
    width: 97.5%;
    padding-right: 15px;
    padding-left: 15px;
    color: white;
    text-align: center;
    position: absolute;
    top: 60px;
    font-size: 18px;
    font-family: 'Patrick Hand', cursive;
`

const Context = styled.h4`
    word-break: break-word;
    text-align: left;
    padding: 10px 25px;
    margin: 15px 15px 15px 15px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    cursor: pointer;
    
    &:hover {
        background: rgba(255, 255, 255, 0.6);
    }
`

const Wrapper = styled.div`
    padding-top: 110px;
    height: 77vh;
    overflow-x: auto;
    overflow-y: hidden;
    
    &::-webkit-scrollbar {
        height: 10px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }
`

interface State {
    color: string;
    title: string;
    list: IListCards[];
    isLoading: boolean;
}

interface Props {

}

type CProps = Props & IDispatch & RouteComponentProps;

class Board extends React.Component<CProps, State> {
    id: string;

    constructor(props: CProps) {
        super(props);

        this.state = {
            color: "",
            title: "",
            isLoading: true,
            list: [],
        };

        const {idBoard: id} = this.props.match.params;
        this.props.takeId(id);
    }

    componentDidMount() {
        const {idBoard: id} = this.props.match.params;
        itemRef.child(id).on("value", (snapshot) => {
            // @ts-ignore
            let data = snapshot.val() || {};
            if (data)
                this.setState({
                    title: data.title,
                    color: data.color,
                    isLoading: false
                });
            else
                this.setState({isLoading: false});
        });
    }

    componentWillUnmount() {
        const {idBoard: id} = this.props.match.params;
        itemRef.child(id).off("value");
    }

    goBackHome = () => {
        this.props.history.replace(`/home`);
    }

    render() {
        return (
            <div className="container-fluid">
                <Header
                    color={this.state.color}
                    propsSignOut={this.props}
                    goBackHome={this.goBackHome}/>
                {
                    this.state.isLoading ?
                        <Loading isLoading={this.state.isLoading}/> :
                        <Body style={{background: this.state.color}}>
                        <Title>
                            <Context>{this.state.title}</Context>
                            <ButtonRemoveBoard goBackHome={this.goBackHome}/>
                        </Title>
                        <Wrapper>
                            <Lists/>
                        </Wrapper>
                        </Body>
                }
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch: Dispatch<actions.TakeId>) => {
    return {
        takeId: (id) => dispatch(actions.takeId(id))
    }
}

interface IDispatch {
    takeId: (id) => void;
}


export default connect<{}, IDispatch>(mapStateToProps, mapDispatchToProps)(Board);