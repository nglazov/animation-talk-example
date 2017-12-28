import React, {Component} from 'react';
import './App.css';
import {Controls} from '../Controls/Controls';
import {Surface} from '../Surface/Surface';
import {SHAPES} from '../../svgPaths';

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
                <Surface>
                    <g>
                        <path d={SHAPES.ELEPHANT} fill={'#000'}></path>
                    </g>
                </Surface>
            </div>
        );
    }
}

export default App;
