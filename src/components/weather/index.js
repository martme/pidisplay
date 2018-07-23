import React, { Component } from 'react';
import 'whatwg-fetch';

// const TEN_MINUTES = 10*60*1000;
// const API_URL = "https://www.yr.no/sted/Norge/Oslo/Oslo/Haslevangen/varsel.xml";
// const xmlData = import ''
class Weather extends Component {

  state = {
    xmlData: null,
  }

  componentDidMount() {

    // fetch(API_URL, { mode: 'no-cors' })
    //   .then(response => {
    //     console.info('[weather::get]', response.xmlData);
    //   })
    //   .catch(error => {
    //     console.error('[weather::get]', error);
    //   });
    // this.tick = setInterval(() => {
    //   this.setState({time: new Date()});
    // }, TEN_MINUTES);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    const style = {...this.props.style};
    return (
      <div>
        <pre style={style}>TODO</pre>
      </div>
    );
  }
}


export default Weather;
