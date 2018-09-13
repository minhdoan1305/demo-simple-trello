import * as React from "react";
import {connect} from "react-redux";
import {ScaleLoader} from "react-spinners";
import {Dispatch} from "redux";
import styled, {keyframes} from 'styled-components';
import color from "../../constants/color";
import {logoLogin} from "../../constants/logo";
import * as actions from "../../redux/actions/userAction";
import {IStateStore} from "../../types";
import {RouteComponentProps} from 'react-router';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background: ${color[0]};
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    text-align: center;
    width: 100%;
`;

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
`;

const changeColor = keyframes`
    from {background: white; color: #0072ff}
    to {background: #ED213A; color: white}
`;

const SignIn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 5px 50px;
  color: #0072ff;
  font-family: "Patrick Hand", cursive;
  font-size: 16px;
  font-weight: 900;
  background: white;

  &:hover {
    animation: ${changeColor} 0.6s linear;
    background: #ed213a;
    color: white;
  }
  &:active {
    background: #f37335;
    color: white;
  }
`;

type CProps = IDispatch & IProps & RouteComponentProps;

class Login extends React.Component<CProps> {
    onSignIn = () => {
        this.props.onSignIn(this.props);
    }

    render() {
        return (
            <Wrapper className="container-fluid">
                <Container>
                    <Logo src={logoLogin} alt=""/>
                    {
                        this.props.isLoading ?
                            (<ScaleLoader
                                margin={"2px"}
                                width={3}
                                height={26}
                                radius={3}
                                color={'white'}
                                loading={true}/>)
                            :
                            (<SignIn
                                onClick={this.onSignIn}>
                                Sign in
                            </SignIn>)
                    }
                </Container>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state: IStateStore) => {
    return {
        isLoading: state.user.isLoading,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<actions.SignIn>) => {
    return {
        onSignIn: (propsSignIn) => dispatch(actions.signIn(propsSignIn)),
    }
}

interface IProps {
    isLoading: boolean;
}

interface IDispatch {
    onSignIn: (propsSignIn) => void;
}

export default connect<IProps, IDispatch>(mapStateToProps, mapDispatchToProps)(Login);

