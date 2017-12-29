import React, {Component} from 'react';

import './App.css';
import {Controls} from '../Controls/Controls';
import {Surface} from '../Surface/Surface';
import {SvgPath} from '../SvgPath/SvgPath';
import {SHAPES} from '../../svgPaths';
import {interpolate} from 'd3-interpolate';
import {easeQuad} from 'd3-ease';

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

    getNormalizedProgress = ()=>{
        return this.state.progress / 100;
    };

    static getColor = interpolate('#f00', '#00f');

    render() {
        const {progress} = this.state;
        return (
            <div className="App">
                <Controls handleChange={this.handleControlChange} progress={progress}/>
                    <Surface>
                        <SvgPath
                            fill={App.getColor(easeQuad(this.getNormalizedProgress()))}
                            d={SHAPES.FLY}
                        />
                    </Surface>

            </div>
        );
    }
}

export default App;
