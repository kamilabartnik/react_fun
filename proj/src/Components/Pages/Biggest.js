import React, { Component } from 'react';
// eslint-disable-next-line
import BiggestItem from './Items/BiggestItem';



class Biggest extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 2}
    this.table = [];
    this.handleNumber = this.handleNumber.bind(this);
  }

  handleNumber = event => {
    this.setState({value: event.target.value}, () => console.log(this.state.value));
    console.log(event.target.value);
    this.table = []
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log(state, props);
  // }

  inputHandle = e => {
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

  render() {

    for(let i=0; i< this.state.value; i++) {
      this.table.push(<div  key={i}><input  onBlur={this.bigTab} onChange={this.inputHandle} type="number" /><br /></div>)
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
          <span></span>

      </div>
    )
  }
}

export default Biggest;