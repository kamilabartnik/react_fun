import React, { Component } from 'react';
import '../css/NavBar.css';
import MenuDrop from './MenuDrop';

const menusNav = [
  {menu:"menuBasic", title:"Basic"},
  {menu:"menuReactFun", title:"React Fun"},
  {menu:"menuApi", title:"API Fun"},
  {menu:"menuGames", title:"Games"},
  {menu:"menuCSS", title:"CSS Fun"},

]

class NavBar extends Component {


  render() {
    return (
      <div className="menu-block">
        {menusNav.map((menu, index) => {
        return <div  key={index} className="nav">
                <MenuDrop {...menu} />
              </div> })}
      </div>
    )
  }
}

export default NavBar;