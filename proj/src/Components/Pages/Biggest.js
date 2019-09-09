import React, {Component} from 'react';

class Biggest extends Component{
  constructor(props){
    super(props);
    this.state = { value: null}
  }

handleChange = (e) => {

}

  render(){
    return(
      <div>
        <p>How many numbers you want to pass?</p>
        <input type="number" min="2" max="6" value={this.state.value} onChange={this.handleChange} />
        <p>Największa liczba to: </p>
      </div>
    )
  }
}

export default Biggest;