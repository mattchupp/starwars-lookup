import React, { Component } from 'react';
import './App.css';
import Character from './Character.js';



class App extends Component {
  render() {
    return (
      <div className="container">
        <Character />
      </div>
    );
  }
}

export default App;
