import * as React from 'react';
import { Component } from 'react';

const numbers = [2, 5, 7, 10, 34, 16, 9, 1];

class Table extends Component{
  render(){
    return(
      <div>
        {numbers.map((number, i) => 
        <div>
          {number%2 === 0 ?
          <li key={i}>{number}</li>
          :null}
        </div>)}
      </div>
    )
  }
}

export default Table;