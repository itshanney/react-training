import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import ContactForm from "./ContactForm";
import AddUser from "./AddUser";
import User from "./User";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: 'Cory',
          lastName: 'House'
        },
        {
          id: 2,
          firstName: 'Justin',
          lastName: 'Hanney'
        }
      ]
    }
  }

  deleteUser = (id) => {
    const users = this.state.users.filter(user => user.id !== id);
    this.setState({users: users});
  }

  editUser = (id) => {
    const user = this.state.users.filter(user => user.id !== id);
    console.log(user);
  }

  saveUser = (user) => {
    if(!user.id) {
      user.id = Math.random();
    }
    console.log(user);
    const users = [...this.state.users, user];
    this.setState({users: users});
  }

  render() {
    return (
      <div className="App">
        <HelloWorld />
        <ContactForm/>

        { this.state.users.map( user => <User key={user.id} user={user} deleteUser={this.deleteUser} editUser={this.editUser} />) }

        <h1>Add User</h1>

        <AddUser save={this.saveUser} />

      </div>
    );
  }
}

export default App;
