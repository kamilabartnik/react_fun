import React, { Component } from 'react';
import BiggestItem from './Items/BiggestItem';
import '../../css/Pages/biggest.css'


class Biggest extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 2};
    this.bigNum= 0;
    this.table = [];
    this.handleNumber = this.handleNumber.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleNumber = event => {
    this.setState({value: event.target.value});
    this.table = []
  }

  handleInput = (e) => {
    console.log(e);
    this.bigNum = e;
  }

  render() {

    for(let i=0; i< this.state.value; i++) {
      this.table.push(<div className="forInput" key={i}><BiggestItem handleInput={(e) => this.handleInput(e)} type="number" /><br /></div>)
    }
    

    return (
      <div>
        <p className="pbig">How many numbers do you want to pass?</p>
        <input className="inputNumbers" type="number" min="2" max="6" onChange={this.handleNumber} defaultValue={this.state.value} />
        <div>
          {this.state.value > 1 ?
            <span>{this.table}</span>
            : null}
        </div>
        <p className="pbig">The biggest number: {this.bigNum}</p>

      </div>
    )
  }
}

export default Biggest;