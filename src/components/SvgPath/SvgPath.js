import React from 'react';
import PropTypes from 'prop-types';

export class SvgPath extends React.Component {
    render() {
        const {d, fill} = this.props;
        return (
            <path
                fill={fill}
                d={d}
            />
        );
    }
}

SvgPath.propTypes = {
    d: PropTypes.string,
    fill: PropTypes.string
};
