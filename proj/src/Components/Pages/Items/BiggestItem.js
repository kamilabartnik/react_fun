import React, {Component} from 'react';


class BiggestItem extends Component{
  constructor(props) {
    super(props);

    this.state = {
      fromParent: Number(props.value),
      current: Number(props.value),
    }
  }

  componentDidUpdate(nextProps) {
    if (nextProps.value !== this.state.fromParent) {
      this.setState({
        fromParent: Number(nextProps.value),
        current: Number(nextProps.value),
      })
    }
  }

  render(){
    return(
      <div>
        <p>Podaj liczbę:</p>
        <input defaultValue={this.state.current} type="number"></input><br />
      </div>
    )
  }
}

export default BiggestItem;