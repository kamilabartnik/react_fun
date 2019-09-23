import React, { Component } from 'react';
import MenuItem from './MenuItem';
import '../css/NavBar.css'

const menuBasic = [

  { title: 'Get random name', href: '/RandomNumber' },
  { title: 'See few even numbers', href: '/EvenNumber' },
  { title: 'See your name near "Hello!"', href: '/HelloName' },
  { title: 'Select a file', href: '/FileSelector' },
  { title: 'Family Dialog', href: '/Dialog' },
  { title: 'Timer', href: '/Timer' },
]

const menuReactFun = [
  { title: 'Biggest', href: '/Biggest' },
  { title: 'Do do list', href: '/ToDoList' },
  { title: 'Calc', href: '/Calc' },
  { title: 'Styled Button', href: '/BWS' },
]

const menuGames = [
  { title: 'Play Stone Paper Scissors', href: '/StonePaperScissors' },
]

const menuCSS = [
  { title: 'Race', href: '/Race' },
  { title: 'Color Wheel', href: './ColorWheel' }
]

const menuApi = [
  { title: 'Rick and Morthy', href: '/RickAndMorthy' },
  { title: 'StarWars', href: '/StarWars' },
]


class NavBarDemo extends Component {
  constructor(props){
    super(props);

    this.state = {
      show: false
    }
    this.doSomething = this.doSomething.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.hide = this.hide.bind(this);
  }

  doSomething(e){
    e.preventDefault();
    console.log(e.target.innerHTML);
  }

  toggleShow(){
    this.setState({show: !this.state.show});
  }

  hide(e){
    if(e && e.relatedTarget){
      e.relatedTarget.click();
    }
    this.setState({show: false});
  }

 
  
  render(){
    return(
      <div className="dropdown">
        <button 
          className="btn btn-primary dropdown-toggle"
          type="button"
          onClick={this.toggleShow}
          onBlur={this.hide}
        >

        {this.props.title}
          
        </button>
        <div className="MenuDrop">
        {
          this.state.show &&
          menuBasic.map((item, index) => {
            return <MenuItem {...item} key={index} />
          })
        }
        </div>
      </div>
    );
  }
}

export default NavBarDemo;