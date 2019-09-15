import React, {Component} from 'react';
import ToDoItemItem from './ToDoItemItem';

class ToDoListItem extends Component{
  state = {
    tasks: this.props.tasks,
    draft: ''
  }

  updateDraft = event => {
    this.setState({draft: event.target.value})
  }

  addToDo = () => {
    const {tasks, draft} = this.state;
    const list = tasks;
    list.push(draft);
    this.setState({tasks: list, draft: ''});
  }

  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        {this.props.tasks.map(task => <ToDoItemItem task={this.state.tasks} />)}
        <input type ='text' onChange={this.updateDraft} value={this.state.draft} />
        <button onClick={this.addToDo}>Add</button>
      </div>
    )
  }
}

export default ToDoListItem;