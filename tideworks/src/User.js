import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div>
                First Name: {this.prop.firstName}
                Last Name: {this.prop.lastName}
            </div>
        )
    }
}

export default User;