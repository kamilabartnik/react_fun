import React, {Component} from 'react';


class BiggestItem extends Component{
  render(){
    return(
      <div>
        <p>Podaj liczbę:</p>
        <input type="number"></input><br />
      </div>
    )
  }
}

export default BiggestItem;