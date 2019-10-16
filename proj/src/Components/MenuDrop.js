import * as React from 'react';
import { Component } from 'react';
import MenuItem from './MenuItem';

const menuBasic = [

  // { title: 'Random name', href: '/react_fun/#/RandomNumber' },
  // { title: 'Few numbers', href: '/react_fun/#/EvenNumber' },
  { title: '"Hello!"', href: '/react_fun/#/hello-name#/' },
  { title: 'Select a file', href: '/react_fun/#/file-selector#' },
  { title: 'Family Dialog', href: '/react_fun/#/dialog#' },
  { title: 'Timer', href: '/react_fun/#/timer#' },
]

const menuReactFun = [
  { title: 'Biggest', href: '/react_fun/#/biggest' },
  { title: 'Do do list', href: '/react_fun/#/to-do-list' },
  { title: 'Calc', href: '/react_fun/#/calc' },
// { title: 'Styled Button', href: '/react_fun/#BWS' },
  { title: 'Chart Animation', href: '/react_fun/#/chart'},
  {title: 'Search', href: '/react_fun/#/search'},
]

const menuGames = [
  { title: 'Play Stone Paper Scissors', href: '/react_fun/#/sps' },
  { title: 'Tic Tac Toe', href: '/react_fun/#/tic-tac-toe'},
]

const menuCSS = [
  { title: 'Race', href: '/react_fun/#/race' },
  { title: 'Color Wheel', href: '/react_fun/#/color-wheel' }
]

const menuApi = [
  { title: 'Rick and Morthy', href: '/react_fun/#/rick-and-morthy' },
  // { title: 'StarWars', href: '/react_fun/#/star-wars' },
]

const mapToMenu = {
  "menuBasic": menuBasic,
  "menuReactFun": menuReactFun,
  "menuGames": menuGames,
  "menuCSS": menuCSS,
  "menuApi": menuApi,
}

class MenuDrop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      show: false,
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
        <div className="button-drop" onClick={this.showDropdownMenu}> {this.props.title} </div>
        <ul>
        
        {this.state.displayMenu ? mapToMenu[this.props.menu].map((menu, index) => {
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