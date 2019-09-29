import React from 'react';


function BiggestItem(props) {

  return (
    <div>
      <p>Choose number:
        <input className="bigInput" onBlur={props.handleInput} type="number" />
        {this.state.bigNum}</p>
    </div>
  )

}

export default BiggestItem;