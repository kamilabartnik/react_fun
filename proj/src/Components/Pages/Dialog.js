import * as React from 'react';
import { useState, useEffect } from 'react';
import DialogItem from './Items/DialogItem';


const Dialog = () => {
  const [value, handleChange] = useState(0);
  const [pass, handleClick] = useState(0);
  const [current, handleCrement] = useState(0);

  useEffect(() => pass = current);

  return (
    <div>
      <h2>Proste przekazywanie danych rodzic - dziecko<br /> i manipulacja liczbą z poziomu dziecka</h2>
      <input onChange={() => handleChange(pass)} type="number" /> <br />
      <button onClick={() => handleClick()}>Propagate to child</button>
      <p>
        <DialogItem value={current} />
      </p>
    </div>
  )
}

export default Dialog;

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     input: null,
  //     forwardValue: null
  //   }

  //   this.handleClick = this.handleClick.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({ input: event.target.value });
  // }

  // handleClick() {
  //   this.setState({ forwardValue: this.state.input });
  // }