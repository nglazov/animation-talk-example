import React from 'react';
import PropTypes from 'prop-types';

export class Controls extends React.Component {
    animate = ()=>{
        const {progress} = this.props;
        if (progress > 99) {
            return;
        }

        this.props.handleChange(progress + 1);
        requestAnimationFrame(this.animate)
    };

    handleInputChange = (e) => {
        this.props.handleChange(parseInt(e.target.value, 10))
    };

    render() {
        const {progress} = this.props;

        return (
            <div>
                <span onClick={this.animate}>play</span>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={progress}
                    onChange={this.handleInputChange}/>
                <span>{progress}</span>
            </div>
        );
    }
};

Controls.propTypes = {
    handleChange: PropTypes.func.isRequired,
    progress: PropTypes.number.isRequired
};
