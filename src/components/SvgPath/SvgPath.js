import React from 'react';
import PropTypes from 'prop-types';

export const SvgPath = ({d, fill}) => (
    <path
        fill={fill}
        d={d}
    />
);

SvgPath.propTypes = {
    d: PropTypes.string,
    fill: PropTypes.string
};
