import React from 'react';
import PropTypes from 'prop-types';

export const Controls = ({handleChange, progress}) => {
    return (
        <div>
            <input
                type="range"
                min={0}
                max={100}
                value={progress}
                onChange={handleChange}/>
            <span>{progress}</span>
        </div>
    );
};

Controls.propTypes = {
    handleChange: PropTypes.func.isRequired,
    progress: PropTypes.number.isRequired
};
