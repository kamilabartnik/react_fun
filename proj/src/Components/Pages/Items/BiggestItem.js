import React, {Component} from 'react';


class BiggestItem extends Component{
  constructor(props) {
    super(props);

    this.state = {
      bigNum: '',
    }
  }

  bigTab = e => {
    this.setState({bigNum: e.target.value})
    //tab.map(t => console.log(t));
  }

  render(){
    return(
      <div>
        <p>Choose number:
        <input className="bigInput" onBlur={this.props.handleInput} type="number" />
        {this.state.bigNum}</p>
      </div>
    )
  }
}

export default BiggestItem;