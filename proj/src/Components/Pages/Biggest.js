import * as React from 'react';
import { Component } from 'react';
import BiggestItem from './Items/BiggestItem';
import '../../css/Pages/biggest.scss'

class Biggest extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 2, bigNum: 0};
    this.table = [];
    this.handleNumber = this.handleNumber.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleInpNumber = this.handleInpNumber.bind(this);
  }

  handleNumber = (event) => {
    this.setState({value: event.currentTarget.value});
    this.table = [];
  }

  handleInput = (e) => {
    if(this.state.bigNum<e){
      this.setState({bigNum:e});
    }
  }

  handleInpNumber = (number, key) => {
    this.table = Array(Number(number)).fill( <div className="forInput" key={key}><BiggestItem handleInput={(e) => this.handleInput(e)} type="number" min="0" /><br /></div>);
  }
  
  render() {
    return (
      <div>
        <p className="pbig">How many numbers do you want to pass?</p> 
        <input className="input-numbers" type="number" min="2" max="6" onBlur={this.handleNumber} defaultValue={this.state.value} />
        <button onClick={this.handleInpNumber(this.state.value)}>ok</button>
       
        <div>
          {this.state.value > 1 ?
            <span>{this.table}</span>
            : null}
        </div>
        <p className="pbig">The biggest number:  
        {this.state.bigNum}
        </p>
      </div>
    )
  }
}

export default Biggest;