import React from 'react';


function BiggestItem(props) {

  return (
    <div>
      <p>Choose number:
        <input className="bigInput" onBlur={(e) => props.handleInput(e.target.value)} type="number" />
      </p>
    </div>
  )

}

export default BiggestItem;