import React from 'react';
import '../css/Pages/dropMenu.css';


class MenuDrop extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
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
        <div className="MenuBlock">
        <div className="button" onClick={this.showDropdownMenu}> My Setting </div>

        {this.state.displayMenu ? (
          <ul>
            <li><a className="active" href="#Create Page">Create Page</a></li>
            <li><a href="#Manage Pages">Manage Pages</a></li>
            <li><a href="#Create Ads">Create Ads</a></li>
            <li><a href="#Manage Ads">Manage Ads</a></li>
            <li><a href="#Activity Logs">Activity Logs</a></li>
            <li><a href="#Setting">Setting</a></li>
            <li><a href="#Log Out">Log Out</a></li>
          </ul>
        ) :
          (
            null
          )
        }
        <div className="button" onClick={this.showDropdownMenu}> My Setting </div>

        {this.state.displayMenu ? (
          <ul>
            <li><a className="active" href="#Create Page">Create Page</a></li>
            <li><a href="#Manage Pages">Manage Pages</a></li>
            <li><a href="#Create Ads">Create Ads</a></li>
            <li><a href="#Manage Ads">Manage Ads</a></li>
            <li><a href="#Activity Logs">Activity Logs</a></li>
            <li><a href="#Setting">Setting</a></li>
            <li><a href="#Log Out">Log Out</a></li>
          </ul>
        ) :
          (
            null
          )
        }
        </div>
      </div>

    );
  }
}

export default MenuDrop;