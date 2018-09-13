import * as React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import color from '../constants/color'
import {iconBoard, iconLogOut} from '../constants/logo';
import * as actions from "../redux/actions/userAction";
import {Dispatch} from "redux";

const HeaderBoard = styled.header`
    border-bottom: solid 2px rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
`

const Box = styled.div`
    width: 6%;
    text-align: center;
`

const IconBoard = styled.img`
    float: left;
    width: 30px;
    height: auto;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    padding: 3px;
    
    &:hover {
        background: rgba(255, 255, 255, 0.6);
    }
    &:active {
        background: #f37335;
    }
`

const Title = styled.div`
    width: 84%;
    color: #fff;
    font-size: 23px;
    font-weight: 900;
    font-style: oblique;
    text-align: center;
    letter-spacing: 3px;
    font-family: 'Patrick Hand', cursive;
`

const IconLogOut = styled.img`
    float: right;
    width: 25px;
    height: auto;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    padding: 5px;
    
    &:hover {
        background: rgba(255, 255, 255, 0.6);
    }
    &:active {
        background: #ED213A;
    }
`

interface Props {
    propsSignOut: any,
    color: string,
    goBackHome: () => void;
}

type CProps = Props & IDispatch;

class Header extends React.Component<CProps> {
    onSignOut = () => {
        this.props.onSignOut(this.props.propsSignOut);
    }

    render() {
        return (
            <div>
                <HeaderBoard style={{background: this.props.color || color[0]}}>
                    <Box>
                        <IconBoard
                            onClick={this.props.goBackHome}
                            alt=""
                            src={iconBoard}/>
                    </Box>
                    <Title>
                        Simple Trello
                    </Title>
                    <Box>
                        <IconLogOut
                            alt=""
                            src={iconLogOut}
                            onClick={this.onSignOut}/>
                    </Box>
                </HeaderBoard>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch: Dispatch<actions.SignOut>) => {
    return {
        onSignOut: (props) => dispatch(actions.signOut(props)),
    }
}

interface IDispatch {
    onSignOut: (props) => void;
}

export default connect<{}, IDispatch>(mapStateToProps, mapDispatchToProps)(Header);