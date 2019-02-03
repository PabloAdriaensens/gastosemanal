import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <div className="App container">
                <Header
                    titulo='Gasto Semanal'
                />
            </div>
        );
    }
}

export default App;
