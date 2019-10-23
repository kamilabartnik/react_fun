import * as React from 'react';
import { useState, useEffect } from 'react';

const DialogItem = (props) => {

  let [current, handleCrement] = useState(0);

  useEffect(() => {
    current = Number(props.value);
  });

  return (
    <div>
      <label> { current } </label>
      <button onClick={() => handleCrement(current + 1)}>+</button>
      <button onClick={() => handleCrement(current - 1)}>-</button>
    </div>
  );
}


export default DialogItem;