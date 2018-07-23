import React, { Component } from 'react';
import './App.css';

import { Swipeable } from 'react-touch';

import Clock from './components/clock';
import AnalogClock from './components/clock/analog';
// import Weather from './components/weather';
import Ruter from './components/ruter';

class App extends Component {

  state = {
    moduleIdx: 0,
    modules: [
      <Clock style={{color: 'white', fontSize: '160px', lineHeight: '100%', position: 'absolute', bottom: 0, right: '10px'}}/>,   
      <AnalogClock />,
      <Ruter />,
      // <Weather />
    ],
  }

  render() {
    const mod = (a, m) => (a + m) % m;
    const swipeLeft = () => {
      this.setState({moduleIdx: mod(1 + this.state.moduleIdx, this.state.modules.length)});
    }
    const swipeRight = () => {
      this.setState({moduleIdx: mod(1 - this.state.moduleIdx, this.state.modules.length)});
    }

    return (
      <div className="app-main">
        <nav></nav>
        <main style={{width: '100%', height: '100%', position: 'relative'}}>
          <Swipeable onSwipeLeft={swipeLeft} onSwipeRight={swipeRight}>
            <div style={{userSelect:'none', width: '100%', height: '100%'}}>
              {this.state.modules[this.state.moduleIdx]}
            </div>
          </Swipeable>
        </main>
      </div>
    );
  }
}

export default App;
