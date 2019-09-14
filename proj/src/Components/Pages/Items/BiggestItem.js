import React, {Component} from 'react';


class BiggestItem extends Component{
  constructor(props) {
    super(props);

    this.state = {
      bigNum: 1,
      fromParent: Number(props.value),
      current: Number(props.value),
    }
 
  }

  bigTab = e => {
    console.log(this.state.big);
    this.setState({bigNum: e.target.value}, console.log(this.state.big));
  }

  // componentDidUpdate(nextProps) {
  //   if (nextProps.value !== this.state.fromParent) {
  //     this.setState({
  //       fromParent: Number(nextProps.value),
  //       current: Number(nextProps.value),
  //     })
  //   }
  // }

  render(){
    return(
      <div>
        <p>Podaj liczbę:</p>
        <input onChange={this.bigTab} type="number"></input><br />
      </div>
    )
  }
}

export default BiggestItem;