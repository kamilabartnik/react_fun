import * as React from 'react';
import { Component } from 'react';

const students = ["John", "Bill", "Emma", "Stella", "Rob"]
let random = (Math.round(Math.random() * 4));

class Randomizer extends Component{

  render() {
    return (
      <div>
        {students[random]}
      </div>
    );
  }
}

export default Randomizer;