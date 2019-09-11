import React, { Component } from 'react';
import BiggestItem from './Items/BiggestItem';



class Biggest extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 2}
    this.table = [];
    this.big = [];
    this.handleNumber = this.handleNumber.bind(this);
  }

  handleNumber = (event) => {
    this.setState({value: event.target.value}, () => console.log(this.state.value));
    console.log(event.target.value);
    this.table = []
  }

  render() {

    for(let i=0; i< this.state.value; i++) {
      this.table.push(<BiggestItem onBlur={(n) => this.big.push(n)} key={i} />)
    }

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
        {this.big.length > 1 ?
            <span>{this.big.map((n) => <p key={n}>{this.big}</p>)}</span>
            : null}
      </div>
    )
  }
}

export default Biggest;