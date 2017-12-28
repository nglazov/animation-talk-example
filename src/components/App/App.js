import React, {Component} from 'react';
import './App.css';
import {Controls} from '../Controls/Controls';

class App extends Component {
    state = {
        progress: 0
    };

    updateProgress = (progress) => {
        this.setState({
            progress
        })
    };

    handleControlChange = (e) => {
        this.updateProgress(parseInt(e.target.value, 10));
    };

    render() {
        return (
            <div className="App">
                <Controls handleChange={this.handleControlChange} progress={this.state.progress}/>
            </div>
        );
    }
}

export default App;
