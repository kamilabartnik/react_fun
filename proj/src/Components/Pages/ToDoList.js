import React, {Component} from 'react';
import ToDoListItem from './Items/ToDoListItems';


class ToDoList extends Component{
  myTasks = [
    'Be zer0 waste',
    'Dream fish'
  ]

  render(){
    return(
      <div>
        <ToDoListItem title='my stuff' tasks={this.myTasks} />
      </div>

    )
  }
}

export default ToDoList;