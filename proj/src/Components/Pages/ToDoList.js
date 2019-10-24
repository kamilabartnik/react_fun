import * as React from 'react';
import { Component } from 'react';
import ToDoListItem from './Items/ToDoListItems';
import '../../css/Pages/toDoList.scss';


class ToDoList extends Component{
  myTasks = [
    {done: true, text: 'Be zer0 waste'},
    {done: false, text: 'Dream fish'}
  ]

  render(){
    return(
      <div>
        <ToDoListItem title='my stuff' tasks={this.myTasks} />
        <h2>Mamy możliwość dopisywania kolejnych pozycji oraz skreślania ich</h2>
        
      </div>

    )
  }
}

export default ToDoList;