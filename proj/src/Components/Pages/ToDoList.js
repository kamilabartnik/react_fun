import React, {Component} from 'react';
import ToDoListItem from './Items/ToDoListItems';
import '../../css/toDoList.css';


class ToDoList extends Component{
  myTasks = [
    {done: true, text: 'Be zer0 waste'},
    {done: false, text: 'Dream fish'}
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