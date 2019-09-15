import React, {Component} from 'react';

class ToDoItemItem extends Component{
  state = {
    done: false
  }

  toggleDone = () => {
    this.setState({done: !this.state.done})
  }

  render(){
    return(
      <div onClick={this.toggleDone}>
        <p>{this.props.task.text}</p>
      </div>
    )
  }

}

export default ToDoItemItem;