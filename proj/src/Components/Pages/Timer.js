import React, {Component} from 'react';
import DateComponent from './Items/DateComponent';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { dateVis: true };
  }

  onButtonClick() {
    this.setState(state => ({ dateVis: !state.dateVis }));
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick.bind(this)}>Zniknij</button>
        {this.state.dateVis && <DateComponent />}
      </div>
    );
  }
}



export default Timer;