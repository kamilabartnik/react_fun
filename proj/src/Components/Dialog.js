import React, {Component} from 'react';


class Dialog extends Component{
  render(){
    return(
      <div>
        <dialog open>
          <h1>Tytuł</h1>
          <p>Treść</p>
        </dialog>
      </div>
    )
  }
}

export default Dialog;