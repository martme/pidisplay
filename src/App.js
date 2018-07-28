import React, { Component } from 'react';
import { DigitalClockPage, AnalogClockPage, RuterPage } from './pages';
// import Weather from './components/weather';
// import Ruter from './components/ruter';

class App extends Component {
  state = {
    moduleIdx: 0,
    modules: [
      <DigitalClockPage />,
      <AnalogClockPage />,
      <RuterPage />,
      // <Weather />
    ],
  }

  render() {
    const mod = (a, m) => (a + m) % m;
    const swipeLeft = () => {
      this.setState({moduleIdx: mod(1 + this.state.moduleIdx, this.state.modules.length)});
    }

    return (
      <main className="app-main">
        <div onClick={swipeLeft} style={{userSelect:'none', width: '100%', height: '100%'}}>
          {this.state.modules[this.state.moduleIdx]}
        </div>
      </main>
    );
  }
}

export default App;
