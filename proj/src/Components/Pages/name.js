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
      <div className="name">

        <label>
          <input id="input-name" type="text" value={this.state.value} onChange={this.handleChange} onClick={this.handleClick} />
        </label>
        <br />
        <span id="hello">Hello {this.state.value}</span>
        <div className="description">
        <h2>Krótkim słówkiem wstępu: stronka złożyłam z rzeczy, których się uczyłam w międzyczasie,
          także jest lekko bez sensu, ale posiada już pewne cechy, które są słabe i może z luzem wytknąć :D
          Za wszelkie uwagi jestem bardzo wdzięczna.
        </h2>
        <h3>
          Basic to mega proste rzeczy :)
          <br />
          API Fun to tylko ściągnięcie API :)
          <br />
          CSS Fun jest zabawą w CSS i też nie ma żadnego przesłania ;D
        </h3>
        </div>
      </div>
    );
  }
}

export default Name;