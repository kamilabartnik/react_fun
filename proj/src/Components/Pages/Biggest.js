import React, { Component } from 'react';
import BiggestItem from './Items/BiggestItem';
import '../../css/Pages/biggest.css'

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
    this.setState({value: event.target.value}, () => console.log(this.state.value));
    // this.table = []
  }

  handleInput = (e) => {
    if(this.state.bigNum<e){
      console.log(e);
      this.setState({bigNum:e});
    }
    console.log(this.bigNum);
  }

  // handleInpNumber = (number) => {
  //   for(let i=0; i< number; i++) {
  //     this.table.push(<div className="forInput"><BiggestItem handleInput={(e) => this.handleInput(e)} type="number" /><br /></div>)
  //   }
  // }

  handleInpNumber = (number) => {
    this.table = Array(number).fill(<div className="forInput"><BiggestItem handleInput={(e) => this.handleInput(e)} type="number" /><br /></div>);
    
  }


  
  render() {
    return (
      <div>
        <p className="pbig">How many numbers do you want to pass?</p> 
        <input className="inputNumbers" type="number" min="2" max="6" onBlur={this.handleNumber} defaultValue={this.state.value} />
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