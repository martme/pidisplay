import React, { Component } from 'react';
import 'whatwg-fetch';
import moment from 'moment';

import Clock from '../clock';
import { ruterAPI } from '../../api';

class Weather extends Component {

  state = {
  };

  componentDidMount() { 
    ruterAPI.stops.forEach(stop => {
      ruterAPI.getDepartures(stop)
        .then((data) => {
          this.setState({[data.id]: data});
          console.log(data);
      })
      .catch(err => console.error('it failed :/', err));
    })
    
  }

  componentWillUnmount() {
  }

  render() {
    const stops = Object.keys(this.state || {})
      .map(x => ({ ...this.state[x] }));

    const minutesFromNow = (date) => {
      return Math.round((date.getTime() - new Date().getTime()) / 60000)
    }

    const style = {
      stop: {
        display: 'inline-block',
        padding: '4px 8px 0px 8px',
        fontSize: '30px',
        fontFamily: 'Consolas, monospace',
        backgroundColor: '#555',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      },
    };

    style.subway = {
      ...style.stop,
      margin: '-4px 8px 0 -8px',
      borderRight: '4px solid #000',
      backgroundColor: 'orange',
      color: '#fff',
    }
    style.bus = {
      ...style.stop,
      margin: '-4px 8px 0 -8px',
      borderRight: '4px solid #000',
      backgroundColor: 'red',
      color: '#fff',
    }

    let lines = [];
    return (
      <div style={{height: '100%', ...this.props.style}}>
        <Clock style={{fontSize: '50px', height: '50px', padding: '3px', position: 'absolute', bottom: '20px', right: '20px', backgroundColor: '#555'}}/>
        
        <div style={{overflowY: 'scroll', height: '100%', padding: '1em', boxSizing: 'border-box'}}>
          {stops.map((stop, stopIdx) => (
            <div key={stopIdx} style={{width: '100%', marginBottom: '40px'/*, height: '100%'*/}}>
              {stop.lines.map((line, lineIdx) => (
                <div key={lineIdx} style={{display: 'flex', flexDirection: 'row', justifyContent: 'bottom'}}>
                  <div>
                    <div style={{fontSize: '20px', marginTop: '15px'}}>{stop.name}</div>
                    <span style={{...style.stop}}>
                      <span style={{...style[stop.type]}}>{line.number}</span>
                      {line.destination}
                    </span>
                  </div>

                  <ul style={{margin: '0 0 0 30px', padding: 0, display: 'block', height: '80px'}}>
                    {line.arrivals.slice(0, 3).map((arrival, key) => (
                      <li key={key} style={{ display: 'inline-block', fontFamily: 'Georgia', fontSize: 80 - 20*key, marginRight: '0.5em'}}>
                        {`${minutesFromNow(arrival.eta)}`}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <pre style={style}>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    );
  }
}


export default Weather;
