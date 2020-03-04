import React, { Component } from "react";
import './Date.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  tick() {
    this.setState({ date: new Date() });
  }
  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  render() {
    return (
      <div className="Date">
        <h2>The Time is: <span className="Date-time">{this.state.date.toLocaleTimeString()}</span>
        </h2>
      </div>
    );
  }
}

export default Clock;
