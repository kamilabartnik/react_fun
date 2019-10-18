import * as React from 'react';
import { useState } from 'react';

const DialogItem = () => {

  const [fromParent, ReceiveProps] = useState(0);
  const [current, handleCrement] = useState(0);

  return (
    <div>
      <label>dziecko {current}</label>
      <button onClick={() => handleCrement(current + 1)}>+</button>
      <button onClick={() => handleCrement(current - 1)}>-</button>
    </div>
  );
}


export default DialogItem;

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     fromParent: Number(props.value),
  //     current: Number(props.value),
  //   }

  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

    // ReceiveProps(nextProps) => {
  //   if (nextProps.value !== this.state.fromParent) {
  //     this.setState({
  //       fromParent: Number(nextProps.value),
  //       current: Number(nextProps.value),
  //     })
  //   }
  // }

  // handleIncrement() {
  //   this.setState({ current: this.state.current + 1 })
  // }

  // handleDecrement() {
  //   this.setState({ current: this.state.current - 1 })
  // }