import React from 'react';
import MenuItem from './MenuItem';

const menuBasic = [

  // { title: 'Random name', href: '/react_fun/#/RandomNumber' },
  // { title: 'Few numbers', href: '/react_fun/#/EvenNumber' },
  { title: '"Hello!"', href: '/react_fun/#/HelloName#/' },
  { title: 'Select a file', href: '/react_fun/#/FileSelector#' },
  { title: 'Family Dialog', href: '/react_fun/#/Dialog#' },
  { title: 'Timer', href: '/react_fun/#/Timer#' },
]

const menuReactFun = [
  { title: 'Biggest', href: '/react_fun/#/Biggest' },
  { title: 'Do do list', href: '/react_fun/#/ToDoList' },
  { title: 'Calc', href: '/react_fun/#/Calc' },
// { title: 'Styled Button', href: '/react_fun/#BWS' },
  { title: 'Chart Animation', href: '/react_fun/#/Chart'},
  {title: 'Search', href: '/react_fun/#/Search'},
]

const menuGames = [
  { title: 'Play Stone Paper Scissors', href: '/react_fun/#/SPS' },
  { title: 'Tic Tac Toe', href: '/react_fun/#/TicTacToe'},
]

const menuCSS = [
  { title: 'Race', href: '/react_fun/#/Race' },
  { title: 'Color Wheel', href: '/react_fun/#/ColorWheel' }
]

const menuApi = [
  { title: 'Rick and Morthy', href: '/react_fun/#/RickAndMorthy' },
  { title: 'StarWars', href: '/react_fun/#/StarWars' },
]



class MenuDrop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      show: false,
      menus: (
        this.props.menu === "menuBasic" ? this.menus = menuBasic
              : this.props.menu === "menuReactFun" ? this.menus = menuReactFun
              : this.props.menu === "menuGames" ? this.menus = menuGames
              : this.props.menu === "menuCSS" ? this.menus = menuCSS
              : this.menus = menuApi 
              :null
              )
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }


  render() {
    return (
      <div className="dropdown" >
        <div>
        <div className="buttonDrop" onClick={this.showDropdownMenu}> {this.props.title} </div>
        <ul>
        
        {this.state.displayMenu ? this.state.menus.map((menu, index) => {
        return <MenuItem key={index} {...menu} /> })
              
        :null
        }
      </ul>
      </div>
      </div>

    );
  }
}

export default MenuDrop;