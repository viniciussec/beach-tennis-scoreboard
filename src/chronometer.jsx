import React, { Component } from "react";

class Chronometer extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
  };

  incrementChronometer = () => {
    if (this.props.start) {
      let seconds = this.state.seconds;
      let minutes = this.state.minutes;
      let hours = this.state.hours;

      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
      this.setState({
        seconds,
        minutes,
        hours,
      });
    }
  };

  formatChronometer(seconds, minutes, hours) {
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    hours = hours < 10 ? "0" + hours : hours;

    return `${hours}:${minutes}:${seconds}`;
  }

  componentDidMount() {
    setInterval(() => this.incrementChronometer(), 1000);
  }

  render() {
    return (
      <div className="p-3 text-white bg-green-800 border border-white rounded-md drop-shadow-md">
        {this.formatChronometer(
          this.state.seconds,
          this.state.minutes,
          this.state.hours
        )}
      </div>
    );
  }
}

export default Chronometer;
