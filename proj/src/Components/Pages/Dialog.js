import * as React from 'react';
import { useState } from 'react';
import DialogItem from './Items/DialogItem';


const Dialog = () => {
  let [value, handleChange] = useState(0);
  let [pass, handleClick] = useState(0);


  return (
    <div>
      <h2>Proste przekazywanie danych rodzic - dziecko<br /> i manipulacja liczbą z poziomu dziecka</h2>
      <input onChange={(event) => handleChange(value = event.target.value)} type="number" /> <br />
      <button onClick={() => handleClick(pass = value)}>Propagate to child</button>
      <div>
        {pass ? <DialogItem value={pass} /> :null}
      </div>
    </div>
  )
}

export default Dialog;