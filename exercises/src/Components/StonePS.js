import React, { Component } from 'react';
import paper from '../assets/img/paper.jpg';
import scissors from '../assets/img/scissors.jpg';
import stone from '../assets/img/stone.jpg';


const gesture = ["Paper", "Scissors", "Stone"]
let random;

function game(num) {
  random = (Math.round(Math.random() * 2));
  console.log(gesture[random]);
  if (random === num) {
    return console.log("draw")
  } else if (random === 2 && num === 0) {
    return console.log("win")
  } else if (random > num || (random === 0 && num === 2)) {
    return console.log("loose")
  } else {
    return console.log("win")
  }
}

class StonePS extends Component {

  render() {
    return (
      <div>
        <button onClick={() => game(0)}>
          <img src={paper} alt="Paper" />
        </button>
        <button onClick={() => game(1)}>
          <img src={scissors} alt="Scissors" />
        </button>
        <button onClick={() => game(2)}>
          <img src={stone} alt="Stone" />
        </button>
      </div>
    );
  }
}

export default StonePS;