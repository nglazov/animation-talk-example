import React, {Component} from 'react';

import './App.css';
import {Controls} from '../Controls/Controls';
import {Surface} from '../Surface/Surface';
import {SvgPath} from '../SvgPath/SvgPath';
import {SHAPES} from '../../svgPaths';
import {interpolate} from 'd3-interpolate';
import {easeExpIn} from 'd3-ease';
import {interpolate as flubberInterpolate} from 'flubber';

class App extends Component {
    state = {
        progress: 0
    };

    updateProgress = (progress) => {
        this.setState({
            progress
        })
    };

    getNormalizedProgress = ()=>{
        return this.state.progress / 100;
    };

    static getColor = interpolate('#f00', '#00f');

    static getD = flubberInterpolate(SHAPES.FLY, SHAPES.ELEPHANT, {maxSegmentLength: 3});

    render() {
        const {progress} = this.state;
        return (
            <div className="App">
                <Controls handleChange={this.updateProgress} progress={progress}/>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Surface customStyles={{width: '400px'}}>
                        <SvgPath
                            fill={App.getColor(easeExpIn(this.getNormalizedProgress()))}
                            d={App.getD(easeExpIn(this.getNormalizedProgress()))}
                        />
                    </Surface>
                    <Surface customStyles={{width: '400px'}}>
                        <SvgPath
                            fill={App.getColor(this.getNormalizedProgress())}
                            d={App.getD(this.getNormalizedProgress())}
                        />
                    </Surface>
                </div>
            </div>
        );
    }
}

export default App;
