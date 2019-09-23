import React, { Component } from 'react';
import NavBarDemo from './NavBarDemo';
import '../css/NavBar.css'


class NavBar extends Component {


  render() {
    return (
      <div className="MenuBlock">
        <NavBarDemo menu="menuBasic" title="React Basic" />
        <NavBarDemo menu="menuReactFun" title="React Fun" />
        <NavBarDemo menu="menuGames" title="Games" />
        <NavBarDemo menu="menuCSS" title="CSS Fun" />
        <NavBarDemo menu="menuApi" title="API Fun" />
      </div>
    )
  }
}

export default NavBar;