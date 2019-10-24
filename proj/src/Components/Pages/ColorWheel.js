import * as React from 'react';
import { Component } from 'react';
import '../../css/Pages/ColorWheel.scss';


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
        <div className="dark-circle"></div>
        <div className={this.state.active ? 'circle' : 'circle active'}></div>
        <button className="wheel-btn" onClick={this.handleWheel}> Wheel the wheel </button>

      </div>

    );
  }
}

export default ColorWheel;