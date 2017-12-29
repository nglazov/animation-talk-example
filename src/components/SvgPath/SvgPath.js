import React from 'react';
import PropTypes from 'prop-types';

export class SvgPath extends React.Component {
    render() {
        const {d} = this.props;
        return (
            <path
                fill={'#000'}
                d={d}
            />
        );
    }
}

SvgPath.propTypes = {
    d: PropTypes.string
};
