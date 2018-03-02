import React, {Component} from 'react';
import {interpolate} from 'd3-interpolate';
import {interpolate as flubberInterpolate} from 'flubber';
import {easeBack} from 'd3-ease';

import {Svg} from '../Svg/Svg';
import {SvgPath} from '../SvgPath/SvgPath';
import {SHAPES} from '../../svgShapes';
import {Controls} from '../Controls/Controls';

import './App.css';

const MAX_VALUE = 150;

class App extends Component {
    state = {
        value: 0
    };

    updateValue = (value) => {
        this.setState({
            value
        })
    };

    get progress() {
        return this.state.value / MAX_VALUE;
    };

    static getFill = interpolate('#f00', '#00f');

    static getD = flubberInterpolate(SHAPES.FLY, SHAPES.ELEPHANT, {maxSegmentLength: 1});

    render() {
        return (
            <div className="App">
                <Controls
                    handleChange={this.updateValue}
                    value={this.state.value}
                    maxValue={MAX_VALUE}/>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Svg customStyles={{width: '400px'}}>
                        <SvgPath
                            fill={App.getFill(this.progress)}
                            d={App.getD(this.progress)}
                        />
                    </Svg>
                    <Svg customStyles={{width: '400px'}}>
                        <SvgPath
                            fill={App.getFill(this.progress)}
                            d={App.getD(easeBack(this.progress))}
                        />
                    </Svg>
                </div>
            </div>
        );
    }
}

export default App;
