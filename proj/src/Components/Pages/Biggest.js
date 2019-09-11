import React, { Component } from 'react';
import BiggestItem from './Items/BiggestItem';



class Biggest extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 2}
    this.table = [];
  }

  handleNumber = (event) => {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
    this.table = []
    for(let i=0; i< this.state.value; i++) {
      this.table.push(<BiggestItem key={i} />)
    }

  }

  render() {



    return (
      <div>
        <p>How many numbers you want to pass?</p>
        <input type="number" min="2" max="6" onChange={this.handleNumber} defaultValue={this.state.value} />
        <div>
          {this.state.value > 1 ?
            <span>{this.table}</span>
            : null}
        </div>
        <p>Największa liczba to: </p>
      </div>
    )
  }
}

export default Biggest;