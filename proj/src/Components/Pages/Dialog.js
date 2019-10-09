import React, {Component} from 'react';
import DialogItem from './Items/DialogItem';


class Dialog extends Component{
  constructor(props) {
    super(props);

    this.state = {
      input: null,
      forwardValue: null
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleClick() {
    this.setState({ forwardValue: this.state.input });
  }

  render() {
    return(
      <div>
        <h2>Proste przekazywanie danych rodzic - dziecko<br /> i manipulacja liczbą z poziomu dziecka</h2>
        <input onChange={this.handleChange} type="number"/> <br />
        <button onClick={this.handleClick}>Propagate to child</button>
        <p>
        {this.state.forwardValue && <DialogItem value={this.state.forwardValue} />}
        </p>
      </div>
    )
  }
}

export default Dialog;