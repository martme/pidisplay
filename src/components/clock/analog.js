import React, { Component } from 'react';

class AnalogClock extends Component {

  state = {
    time: new Date(),
  }

  componentDidMount() {
    this.tick = setInterval(() => {
      this.setState({time: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    const hand = (width, length, progress) => {
      console.log(progress);
      const style = {
        position: 'absolute', 
        width: '0', 
        height: '0', 
        top: '50%', 
        left: '50%',
        background: '#fff', 
        transform: `rotate(${progress}deg)`, 
        transformOrigin: '100% 0 0', 
        padding: `${length/2}% ${width}px 0 0`
      };
      return <div style={style}></div>
    }

    const t = this.state.time;
    const hours = t.getHours() + t.getMinutes()/60 + t.getSeconds()/3600;
    const minutes = t.getMinutes() + t.getSeconds()/3600;
    const seconds = t.getSeconds();

    console.log(hours, minutes, seconds);

    return (
      <div style={{paddingTop: 33}}>
        <div style={{width: '400px', height: '400px', margin: '0 auto', border: '5px solid white', borderRadius: '200px', position: 'relative'}}>
          {hand(6, 60, 120 + 360 * hours / 24)}
          {hand(3, 80, 180 + 360 * minutes / 60)}
          {hand(2, 80, 180 + 360 * seconds / 60)}
          <div style={{position: 'absolute', border: '5px solid white', boxSizing: 'border-box', width: 10, height: 10, borderRadius: 5, background: 'white', top: 'calc(50% - 5px)', left: 'calc(50% - 5px)'}}></div>
        </div>
      </div>
    );
  }
}


export default AnalogClock;
