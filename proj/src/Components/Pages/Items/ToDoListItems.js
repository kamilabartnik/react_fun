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
    //list.push({text:draft});
    this.setState({tasks: [...list, {text: draft}]});
    this.setState({draft: ''});
  }

  render(){
    const { tasks, draft } = this.state;
    const {title} = this.props;

    return(
      <div>
        <h1>{title}</h1>

        {tasks.map((task, i) => <ToDoItemItem key={i} task={task} />)}
        <input type ='text' onChange={this.updateDraft} value={draft} />
        <button onClick={this.addToDo}>Add</button>
      </div>
    )
  }
}

export default ToDoListItem;