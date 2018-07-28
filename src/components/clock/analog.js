import React, { Component } from 'react';
import './analog.css';

class AnalogClock extends Component {
  
  constructor() {
    super();
    this.state = this.getTime();
  }

  getTime() {
    const now = new Date();
    return {
      hours: now.getHours(),
      minutes: now.getMinutes(),
      seconds: now.getSeconds(),
    };
  }

  componentDidMount() {
    const tick = () => this.setState(this.getTime());
    this.tickInterval = setInterval(tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickInterval);
  }

  render() {
    const hours = this.state.hours * 30 + this.state.minutes / 2;
    const minutes = this.state.minutes * 6 + this.state.seconds / 10;
    const seconds = this.state.seconds * 6;

    // const hours = this.state.hours * 360 / 12;
    // const minutes = this.state.minutes * 6;
    // const seconds = this.state.seconds * 60 / 10;
    

    const style = {
      hours: { transform: `translate(-50%, -100%) rotate(${hours}deg)` },
      minutes: { transform: `translate(-50%, -100%) rotate(${minutes}deg)` },
      seconds: { transform: `translate(-50%, -100%) rotate(${seconds}deg)` },
    }
    
    return (
      <div className="analog-clock">
        <div className="hours" style={style.hours}></div>
        <div className="minutes" style={style.minutes}></div>
        <div className="seconds" style={style.seconds}></div>
      </div>
    )
  }
}


export default AnalogClock;
