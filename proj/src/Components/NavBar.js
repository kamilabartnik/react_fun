import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import MenuItem from './MenuItem';
import '../css/NavBar.css'

const menuBasic = [

  { title: 'Get random name', href: '/RandomNumber' },
  { title: 'See few even numbers', href: '/EvenNumber' },
  { title: 'See your name near "Hello!"', href: '/HelloName' },
  { title: 'Select a file', href: '/FileSelector' },
  { title: 'Family Dialog', href: '/Dialog' },
  { title: 'Timer', href: '/Timer' },
  { title: 'Rick and Morthy', href: '/RickAndMorthy' },
  { title: 'StarWars', href: '/StarWars' },
  { title: 'Race', href: '/Race' },
  { title: 'Color Wheel', href: './ColorWheel' }
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

class NavBar extends Component {
  render() {
    return (
      <div>
        <Dropdown className="MenuDrop">
          <DropdownButton className="dropdown-item-button" title="Basic React">
            <div className="dropdown-item">
            {menuBasic.map((item, index) => {
              return <MenuItem {...item} key={index} />
            })}
            </div>
          </DropdownButton>
        </Dropdown>
        <Dropdown className="MenuDrop">
          <DropdownButton className="dropdown-item-button" title="React Fun">
          <div className="dropdown-item">
            {menuReactFun.map((item, index) => {
              return <MenuItem {...item} key={index} />
            })}
            </div>
          </DropdownButton>
        </Dropdown>
        <Dropdown className="MenuDrop">
          <DropdownButton className="dropdown-item-button" title="Games">
          <div className="dropdown-item">
            {menuGames.map((item, index) => {
              return <MenuItem {...item} key={index} />
            })}
            </div>
          </DropdownButton>
        </Dropdown>
      </div>
    )
  }
}

export default NavBar;