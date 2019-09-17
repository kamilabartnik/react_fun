import React, {Component} from 'react';


class BiggestItem extends Component{
  constructor(props) {
    super(props);

    this.state = {
      bigNum: '',
      tab: [],
    }
  }

  inputHandle = e => {
    const { bigNum } = this.state;
    this.setState({bigNum: e.target.value}, () => console.log(bigNum));
  }

  bigTab = e => {
    const { bigNum, tab } = this.state;
    const temp = tab;
    temp.push(bigNum)
    this.setState({tab: temp, bigNum: 0})
    //tab.map(t => console.log(t));
  }

  render(){
    return(
      <div>
        <p>Podaj liczbę:</p>
        <input onBlur={this.bigTab} onChange={this.inputHandle} type="number" /><br />
        <p>{this.state.tab}</p>
      </div>
    )
  }
}

export default BiggestItem;