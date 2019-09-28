import React, { Component } from "react";
import Board from './Items/Board';
import '../../css/Pages/TicTacToe.css'

class TicTacToe extends Component {

  render() {
    return (
      <div className="tttGame">
        <h1>Tic Tac Toe Game</h1>
      <Board />
      </div>
    );
  }
}

export default TicTacToe;