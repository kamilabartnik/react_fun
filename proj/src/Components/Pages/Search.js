import * as React from 'react';
import { Component } from 'react';
import '../../css/Pages/search.css';
import UsersList from './Items/UserList';


const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

class Search extends Component {
  constructor() {
    super();

    this.state = {
      filteredUsers: allUsers
    };
    this.filterUsers = this.filterUsers.bind(this)
  }

  filterUsers(e) {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text)
    this.setState({
      filteredUsers
    })
  }

  getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()))
  }

  render() {
    return (
      <div className="search">
        <h2>Przy wpisywaniu znaków do inputa<br /> zostają jedynie posiadające te znaki imiona</h2>
        <div>
          <input onInput={this.filterUsers} />
        </div>
        <div className="search-user">
          <UsersList users={this.state.filteredUsers} />
        </div>
      </div>
    )
  }
}

export default Search;