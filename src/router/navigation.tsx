import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './screens/login';
import Home from './screens/home';
import Board from './screens/board';

class Navigation extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/board/:idBoard" component={Board}/>
            </Switch>
        );
    }
}

export default Navigation;
