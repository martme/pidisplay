import React, { Component } from 'react';
import { AnalogClock } from '../components/clock';
import Page from '.';

class AnalogClockPage extends Component {
  
  render() {
    return (
      <Page>
        <AnalogClock />
      </Page>
    )
  }
}

export default AnalogClockPage;