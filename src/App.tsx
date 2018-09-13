import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './router/navigation';

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter>
                <Navigation/>
            </BrowserRouter>
        );
    }
}

export default App;
