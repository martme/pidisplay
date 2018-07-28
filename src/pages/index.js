import React, { Component } from 'react';
import DigitalClockPage from './digital-clock-page';
import AnalogClockPage from './analog-clock-page';
import RuterPage from './ruter-page';

class Page extends Component {
  render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  }
}
  
export default Page
export {
  DigitalClockPage,
  AnalogClockPage,
  RuterPage
};