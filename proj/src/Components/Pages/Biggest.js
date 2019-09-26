import React, { Component } from 'react';
import BiggestItem from './Items/BiggestItem';
import '../../css/Pages/biggest.css'


class Biggest extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 2, bigNum: 0}
    this.table = [];
    this.handleNumber = this.handleNumber.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleNumber = event => {
    this.setState({value: event.target.value});
    this.table = []
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(state, props);
  // }

  handleInput = e => {
    const { bigNum } = this.state;
    this.setState({bigNum: e.target.value}, () => console.log(bigNum));
  }

  bigTab = e => {
    const { bigNum, tab } = this.state;
    const temp = tab;
    temp.push(bigNum)
    this.setState({tab: temp, bigNum: 0})
    //tab.map(t => console.log(t));
  }
  handleIncrement() {
    this.setState({ value: this.state.value + 1 })
  }

  handleDecrement() {
    this.setState({ value: this.state.value - 1 })
  }

  render() {

    for(let i=0; i< this.state.value; i++) {
      this.table.push(<div className="forInput" key={i}><BiggestItem handle={this.handleInput} type="number" /><br /></div>)
    }
    

    return (
      <div>
        <p className="pbig">How many numbers do you want to pass?</p>
        <label onChange={this.handleNumber}>{this.state.value}</label>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <input className="inputNumbers" type="number" min="2" max="6" onChange={this.handleNumber} defaultValue={this.state.value} />
        <div>
          {this.state.value > 1 ?
            <span>{this.table}</span>
            : null}
        </div>
        <p className="pbig">The biggest number: </p>
          <span></span>

      </div>
    )
  }
}

export default Biggest;