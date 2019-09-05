import React, { Component } from 'react';
import paper from '../assets/img/paper.jpg';
import scissors from '../assets/img/scissors.jpg';
import stone from '../assets/img/stone.jpg';
import '../css/stonePS.css'

const gesture = ["Paper", "Scissors", "Stone"]
let random;

class StonePS extends Component {

  constructor(props) {
    super(props);

    this.result = {text: 'gfs'};

    this.game = this.game.bind(this);
  }

  game(num) {
    random = (Math.round(Math.random() * 2));
    console.log(gesture[random]);
    if (random === num) {
      return {text: 'draw'};
    } else if (random === 2 && num === 0) {
      return console.log("win");
    } else if (random > num || (random === 0 && num === 2)) {
      return console.log("loose");
    } else {
      return console.log("win");
    }
  }

  render() {
    return (
      <div className="choose">
        <button onClick={() => this.game(0)}>
          <img src={paper} alt="Paper" /> Paper
        </button>
        <button onClick={() => this.game(1)}>
          <img src={scissors} alt="Scissors" /> Scissors
        </button>
        <button onClick={() => this.game(2)}>
          <img src={stone} alt="Stone" /> Stone
        </button>
        <div>wynik: {this.result.text}</div>
      </div>
    );
  }
}

export default StonePS;