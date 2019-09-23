import React, { Component } from 'react';
import NavBarDemo from './NavBarDemo';
import '../css/NavBar.css'

const menusNav = [
  {menu:"menuBasic", title:"React Basic"},
  {menu:"menuReactFun", title:"React Fun"},
  {menu:"menuGames", title:"Games"},
  {menu:"menuCSS", title:"CSS Fun"},
  {menu:"menuApi", title:"API Fun"}
]

class NavBar extends Component {


  render() {
    return (
      <div className="MenuBlock">
        {menusNav.map((menu, index) => {
        return <div className="Nav">
                <NavBarDemo className={NavBarDemo} key={index} {...menu} />
              </div> })}
      </div>
    )
  }
}

export default NavBar;