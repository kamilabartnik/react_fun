import React, {Component} from 'react';

class ToDoItemItem extends Component{
  static defaultProps = {
    done: false
  }

  state = {
    done: this.props.done
  }

  toggleDone = () => {
    this.setState({done: !this.state.done})
  }

  render(){
    return(
      <div onClick={this.toggleDone} className={this.state.done ? 'done-to-do' : ''}>
        <p>{this.props.task.text}</p>
      </div>
    )
  }

}

export default ToDoItemItem;