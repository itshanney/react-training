import React from 'react';
import PropTypes from 'prop-types';

const emptyUser = {
    id: null,
    firstName: '',
    lastName: ''
}

class AddUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            user: emptyUser
        }
    }

    handleChange = (event) => {
        const newUser = Object.assign({}, this.state.user);
        newUser[event.target.name] = event.target.value;
        this.setState({user: newUser});
    }

    handleSaveClick = (event) => {
        event.preventDefault();
        this.props.save(this.state.user);
        this.setState({user: Object.assign({}, emptyUser)})
    }

    render() {
        return (
            <form>
                <label>First Name</label>
                <input 
                    name="firstName"
                    type="text" 
                    value={this.state.user.firstName}
                    onChange={this.handleChange} /><br/>
                <label>Last Name</label>
                <input 
                    name="lastName"
                    type="text" 
                    value={this.state.user.lastName}
                    onChange={this.handleChange} /><br/>
                <input 
                    type="submit" 
                    onClick={this.handleSaveClick}
                    value="Add" />
            </form>
        )
    }
}

AddUser.propTypes = {
    user: PropTypes.object
}

AddUser.defaultProps = {
    user: emptyUser
}

export default AddUser;