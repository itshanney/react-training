import React from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
    render() {
        return <div>Hello {this.props.firstName} {this.props.middleName}</div>;
    }
}

HelloWorld.propTypes = {
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string
};

export default HelloWorld;