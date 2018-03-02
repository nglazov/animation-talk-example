import React from 'react';
import PropTypes from 'prop-types';

export const Svg = (props) => {
    const {viewBox, customStyles, children, ...other} = props;
    const paddingBottom = `${Math.round(viewBox.height / viewBox.width * 100)}%`;

    const divStyle = {
        width: '100%',
        height: '0px',
        ...customStyles
    };

    const svgStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0
    };

    const adaptiveStyle = {
        position: 'relative',
        paddingBottom
    };

    const svgViewBox = `0 0 ${viewBox.width} ${viewBox.height}`;

    return (
        <div
            style={divStyle}
            {...other}>
            <div style={adaptiveStyle}>
                <svg
                    viewBox={svgViewBox}
                    style={svgStyle}>
                    {children}
                </svg>
            </div>
        </div>
    );
};

Svg.propTypes = {
    children: PropTypes.oneOf(PropTypes.node, PropTypes.arrayOf(PropTypes.node)),
    viewBox: PropTypes.object,
    customStyles: PropTypes.object
};

Svg.defaultProps = {
    viewBox: {width: 300, height: 200}
};
