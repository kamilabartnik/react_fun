import React, { Component } from "react";
import '../../css/Pages/search.css';


const UsersList = ({ users }) => {
  if (users.length > 0) {
    return (
      <ul className="searchList">
        {users.map(user => <li key={user}>{user}</li>)}
      </ul>
    );
  }

  return (
    <p>No results!</p>
  );
};

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

        <input onInput={this.filterUsers} />
        <UsersList users={this.state.filteredUsers} />

      </div>
    )
  }
}
    
export default Search;