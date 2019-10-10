import React, { Component } from 'react';
import paper from '../../assets/img/paper.jpg';
import scissors from '../../assets/img/scissors.jpg';
import stone from '../../assets/img/stone.jpg';
import '../../css/Pages/stonePS.css'

const gesture = ["Paper", "Scissors", "Stone"]
let random;

class StonePS extends Component {

  constructor(props) {
    super(props);

    this.state = { text: '', value: '', plWin: 0, plLoos: 0 };
    this.game = this.game.bind(this);
  }

  game(num) {
    random = (Math.round(Math.random() * 2));
    if (random === num) {
      this.setState(() => ({ text: "It's a draw", value: gesture[random] }));
    } else if (random === 2 && num === 0) {
      this.setState(() => ({ text: 'You win!', value: gesture[random], plWin: this.state.plWin + 1 }));
    } else if (random > num || (random === 0 && num === 2)) {
      this.setState(() => ({ text: 'You loose', value: gesture[random], plLoos: this.state.plLoos + 1 }));
    } else {
      this.setState(() => ({ text: 'You win!', value: gesture[random], plWin: this.state.plWin + 1 }));
    }
  }

  reset() {
    this.setState(() => ({ text: '', value: '', plLoos: 0, plWin: 0 }))
  }

  render() {
    return (
      <div className="stoneDiv">
        <div className="choose">
          <div className="img">
            <button onClick={() => this.game(0)}>
              <img src={paper} alt="Paper" />
            </button>
            <button onClick={() => this.game(1)}>
              <img src={scissors} alt="Scissors" />
            </button>
            <button onClick={() => this.game(2)}>
              <img src={stone} alt="Stone" />
            </button>
          </div>
          <div className="gameInfo">
            <div className="oponent"> Oponent played: {this.state.value} </div>
            <div className="result">Result: {this.state.text} </div>
            <div className="sumResults">
              <div className="win">You win {this.state.plWin} times </div>
              <div className="lost">Program wins {this.state.plLoos} times</div>
            </div>
          </div>
        </div>
        <button className="reset" onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default StonePS;