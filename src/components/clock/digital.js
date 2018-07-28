import React, { Component } from 'react';

class DigitalClock extends Component {

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
    const t = this.state.time;
    const currentTimeString = [t.getHours(), t.getMinutes()]
      .map(x => `0${x}`.slice(-2))
      .join(":");
    const style = {...this.props.style};
    return (
      <div style={style}>{currentTimeString}</div>
    );
  }
}


export default DigitalClock;
