import React, {Component} from 'react';
import ToDoListItem from './Items/ToDoListItem';


class ToDoList extends Component{
  render(){
    return(
      <div>
        <ToDoListItem title='my stuff' />
      </div>

    )
  }
}

export default ToDoList;