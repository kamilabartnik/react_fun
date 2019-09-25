import React, { Component } from 'react';
import NavBarDemo from './NavBarDemo';
import '../css/NavBar.css'

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
                <NavBarDemo className={NavBarDemo} {...menu} />
              </div> })}
      </div>
    )
  }
}

export default NavBar;