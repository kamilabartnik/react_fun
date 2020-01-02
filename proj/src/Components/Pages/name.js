import * as React from 'react';
import { Component } from 'react';
import '../../css/Pages/hello.scss'


class Name extends Component{

  constructor(props) {
    super(props);
    this.state = {value: '...'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleClick = () => {
    this.setState({value:''});
  }


  render() {
    return (
      <div className="name">

        <label>
          <input id="input-name" type="text" value={this.state.value} onChange={this.handleChange} onClick={this.handleClick} />
        </label>
        <br />
        <span id="hello">Hello {this.state.value}</span>

      </div>
    );
  }
}

export default Name;