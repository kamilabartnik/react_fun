import * as React from 'react';
import { useState } from 'react';

const DialogItem = (props) => {

  const [current, handleCrement] = useState(props.value);

  // current = props.value;

  return (
    <div>
      <label> { current } </label>
      <button onClick={() => handleCrement(current + 1)}>+</button>
      <button onClick={() => handleCrement(current - 1)}>-</button>
    </div>
  );
}


export default DialogItem;