import React, { Component } from 'react';
import '../../css/Pages/ColorWheel.css';


class ColorWheel extends Component {
  state = {
    active: false,
  }

  handleWheel = () => {
    const currentState = this.state.active;
    this.setState({active: !currentState});
  }

  render() {
    return (
      <div>
        <div className="switch"></div>
        <div className="dark"></div>
        <div className={this.state.active ? 'circle' : 'circle active'}></div>
        <button className="wheelBtn" onClick={this.handleWheel}> Wheel the wheel </button>

      </div>

    );
  }
}

export default ColorWheel;