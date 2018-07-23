import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './components/clock';
import Weather from './components/weather';

class App extends Component {

  render() {
    return (
      <div className="app-main">
        <nav>
          <ul style={{listStyleType: 'none', padding: 0}}>
            <li></li>
          </ul>
          <span>Hello</span>
        </nav>
        <main>
          <Clock style={{color: 'white', position: 'absolute', top: '60px', width: '100%', fontSize: '160px'}}/>
          <Weather />
        </main>
      </div>
    );
  }
}

export default App;
