import React, {Component} from 'react';
import DateComponent from './Items/DateComponent';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { dateVis: true, text: 'Zniknij' };
  }

  onButtonClick() {
    this.setState(state => ({ dateVis: !state.dateVis, text:'Pokaż' }));
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick.bind(this)}>{this.state.text}</button>
        {this.state.dateVis && <DateComponent />}
      </div>
    );
  }
}



export default Timer;