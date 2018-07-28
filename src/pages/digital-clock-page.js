import React, { Component } from 'react';
import { DigitalClock } from '../components/clock';
import Page from '.';

class DigitalClockPage extends Component {
  
  render() {
    const style = {
      fontSize: 'calc(100vmin / 5)',
      position: 'absolute',
      bottom: '0.2em',
      right: '0.2em',
    }
    return (
      <Page>
        <DigitalClock style={style} />
      </Page>
    )
  }
}


export default DigitalClockPage;