import React from 'react';
import MenuItem from './MenuItem';

const menuBasic = [

  { title: 'Random name', href: '/RandomNumber' },
  { title: 'Few numbers', href: '/EvenNumber' },
  { title: '"Hello!"', href: '/HelloName' },
  { title: 'Select a file', href: '/FileSelector' },
  { title: 'Family Dialog', href: '/Dialog' },
  { title: 'Timer', href: '/Timer' },
]

const menuReactFun = [
  { title: 'Biggest', href: '/Biggest' },
  { title: 'Do do list', href: '/ToDoList' },
  { title: 'Calc', href: '/Calc' },
  { title: 'Styled Button', href: '/BWS' },
  { title: 'Chart Animation', href: '/Chart'},
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



class MenuDrop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      show: false,
      menus: (this.props.menu === "menuBasic" ? this.menus = menuBasic
              : this.props.menu === "menuReactFun" ? this.menus = menuReactFun
              : this.props.menu === "menuGames" ? this.menus = menuGames
              : this.props.menu === "menuCSS" ? this.menus = menuCSS
              : this.menus = menuApi )
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