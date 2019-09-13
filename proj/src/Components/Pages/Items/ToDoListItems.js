import React, {Component} from 'react';
import DialogItem from './Items/DialogItem';
import { thisExpression } from '@babel/types';


class Dialog extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default ToDoList;