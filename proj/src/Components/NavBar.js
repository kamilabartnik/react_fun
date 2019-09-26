import React, { Component } from 'react';
import '../css/NavBar.css';
import MenuDrop from './MenuDrop';

const menusNav = [
  {menu:"menuBasic", title:"React Basic"},
  {menu:"menuReactFun", title:"React Fun"},
  {menu:"menuApi", title:"API Fun"},
  {menu:"menuGames", title:"Games"},
  {menu:"menuCSS", title:"CSS Fun"},

]

class NavBar extends Component {


  render() {
    return (
      <div className="MenuBlock">
        {menusNav.map((menu, index) => {
        return <div  key={index} className="Nav">
                <MenuDrop {...menu} />
              </div> })}
      </div>
    )
  }
}

export default NavBar;