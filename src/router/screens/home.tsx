import * as React from 'react';
import Header from '../../components/header';
import Body from '../../components/body';
import {RouteComponentProps} from 'react-router';

class Home extends React.Component<RouteComponentProps> {
    render() {
        return (
            <div>
                <Header
                    color={""}
                    propsSignOut={this.props}
                    goBackHome={() => {
                        this.props.history.replace(`/home`)
                    }}/>
                <Body/>
            </div>
        );
    }
}

export default Home;