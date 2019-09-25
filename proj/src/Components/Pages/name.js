import React, {Component} from 'react';
import '../../css/Pages/hello.css'


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
      <div>
        <label>
          <input id="inputName" type="text" value={this.state.value} onChange={this.handleChange} onClick={this.handleClick} />
        </label>
        <br />
        <span id="hello">Hello {this.state.value}</span>
      </div>
    );
  }
}

export default Name;