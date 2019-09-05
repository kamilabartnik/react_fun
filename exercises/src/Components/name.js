import React, {Component} from 'react';


class Name extends Component{

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <div>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <span>Hello {this.state.value}</span>
      </div>
    );
  }
}

export default Name;