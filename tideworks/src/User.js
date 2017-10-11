import React from 'react';
import PropTypes from 'prop-types';

function User({user, deleteUser, editUser}) {
    return (
        <div>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            First Name: {user.firstName}&nbsp;
            Last Name: {user.lastName}&nbsp;
            <button onClick={() => editUser(user.id)}>Edit</button> 
        </div>
    )
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired
}

export default User;