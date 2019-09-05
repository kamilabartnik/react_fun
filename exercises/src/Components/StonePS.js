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

    this.state = {text: '', value: ''};
    this.game = this.game.bind(this);
  }

  game(num) {
    random = (Math.round(Math.random() * 2));
    console.log(gesture[random]);
    if (random === num) {
      this.setState(() => ({text: "It's a draw", value: gesture[random]}));
    } else if (random === 2 && num === 0) {
      this.setState(() => ({text: 'You win!', value: gesture[random]}));
    } else if (random > num || (random === 0 && num === 2)) {
      this.setState(() => ({text: 'You loose', value: gesture[random]}));
    } else {
      this.setState(() => ({text: 'You win!', value: gesture[random]}));
    }
  }

  reset(){
    this.setState(() => ({text: '', value: ''}))
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
        <div className="gameInfo">
          <div className="oponent"> Oponent played: {this.state.value} </div>
          <div className="result">Result: {this.state.text} </div>
        </div>
        <button className="reset" onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default StonePS;