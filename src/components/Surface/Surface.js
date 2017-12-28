import React from 'react';
import PropTypes from 'prop-types';

export const Surface = (props) => {
    const {viewBox, customStyles, children, ...other} = props;
    const paddingBottom = `${Math.round(viewBox.height / viewBox.width * 100)}%`;

    const divStyle = {
        position: 'relative',
        width: '100%',
        height: '0px',
        paddingBottom,
        ...customStyles
    };

    const svgStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0
    };

    const svgViewBox = `0 0 ${viewBox.width} ${viewBox.height}`;

    return (
        <div
            style={divStyle}
            {...other}>
            <svg
                viewBox={svgViewBox}
                style={svgStyle}
                preserveAspectRatio={'xMidYMid'}>
                {children}
            </svg>
        </div>
    );
};

Surface.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
    viewBox: PropTypes.object,
    customStyles: PropTypes.object
};

Surface.defaultProps = {
    viewBox: {width: 300, height: 200}
};
