import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import ContactForm from "./ContactForm";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <HelloWorld firstName="Justin"/>
        <ContactForm/>
      </div>
    );
  }
}

export default App;
