import React from 'react';
import PropTypes from 'prop-types';

export class Controls extends React.Component {
    animate = ()=>{
        const {value, maxValue} = this.props;

        if (value >= maxValue) {
            return;
        }

        this.props.handleChange(value + 1);
        requestAnimationFrame(this.animate);
    };

    handleInputChange = (e) => {
        this.props.handleChange(parseInt(e.currentTarget.value, 10))
    };

    render() {
        const {value, maxValue} = this.props;

        return (
            <div>
                <button onClick={this.animate}>play</button>
                <input
                    type="range"
                    min={0}
                    max={maxValue}
                    value={value}
                    onChange={this.handleInputChange}/>
                <span>{value}</span>
            </div>
        );
    }
};

Controls.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired
};
