import React, { Component } from "react";
import Square from './Square';

class Board extends Component {
constructor(props){
  super(props);
  this.state = {
    counter: [0,1,2,3,4,5,6,7,8] 
  }
}

  render() {
    return (
      <div className="board">
        {this.state.counter.map((i) => <Square key={i} />)}
      </div>
    );
  }
}

export default Board;