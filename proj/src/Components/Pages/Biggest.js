import React, { Component } from 'react';
import BiggestItem from './Items/BiggestItem';


class Biggest extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 2 }
  }

  handleNumber = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  render() {

    let table = [];

    for(let i=0; i< this.state.value; i++) {
        table.push(<BiggestItem key={i} /> )
      }

    return (
      <div>
        <p>How many numbers you want to pass?</p>
        <input type="number" min="2" max="6" defaultValue={this.state.value} onChange={this.handleNumber} />
        <div>
          {this.state.value > 1 ?
            <span>{table}</span>
            : null}
        </div>
        <p>Największa liczba to: </p>
      </div>
    )
  }
}

export default Biggest;