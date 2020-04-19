import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SwaggerUIDisplay } from '../components/swaggerUi/SwaggerUi'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>SWAGGER In React APP</h2>
        </div>
          <SwaggerUIDisplay />
      </div>
    );
  }
}

export default App;
