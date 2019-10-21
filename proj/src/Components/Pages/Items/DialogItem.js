import * as React from 'react';
import { useState } from 'react';

const DialogItem = (props) => {

  let [current, handleCrement] = useState(0);

  current = props.value;

  return (
    <div>
      <label> { current } </label>
      <button onClick={() => handleCrement(current + 1)}>+</button>
      <button onClick={() => handleCrement(current - 1)}>-</button>
    </div>
  );
}


export default DialogItem;