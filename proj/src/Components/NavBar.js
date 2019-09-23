import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
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


class NavBar extends Component {
  render() {
    return (
      <div className="MenuBlock">
        <Dropdown className="MenuDrop">
          <DropdownButton className="dropdown-item-button" title="Basic React">
            <Dropdown.Item className="dropdown-item">
            {menuBasic.map((item, index) => {
              return <MenuItem {...item} key={index} />
            })}
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        <Dropdown className="MenuDrop">
          <DropdownButton className="dropdown-item-button" title="React Fun">
          <Dropdown.Item className="dropdown-item">
            {menuReactFun.map((item, index) => {
              return <MenuItem {...item} key={index} />
            })}
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        <Dropdown className="MenuDrop">
          <DropdownButton className="dropdown-item-button" title="Games">
          <Dropdown.Item className="dropdown-item">
            {menuGames.map((item, index) => {
              return <MenuItem {...item} key={index} />
            })}
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        <Dropdown className="MenuDrop">
          <DropdownButton className="dropdown-item-button" title="CSS Fun">
          <Dropdown.Item className="dropdown-item">
            {menuCSS.map((item, index) => {
              return <MenuItem {...item} key={index} />
            })}
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
        <Dropdown className="MenuDrop">
          <DropdownButton className="dropdown-item-button" title="API fun">
          <Dropdown.Item className="dropdown-item">
            {menuApi.map((item, index) => {
              return <MenuItem {...item} key={index} />
            })}
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>
    )
  }
}

export default NavBar;