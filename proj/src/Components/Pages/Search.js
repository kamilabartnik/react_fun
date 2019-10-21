import * as React from 'react';
import '../../css/Pages/search.css';
import UsersList from './Items/UserList';


const allUsers = ['Michal', 'Kasia', 'Jacek', 'Marta', 'Tomek', 'Ania'];

function Search() {
  const [filteredUsers, setUsers] = React.useState(allUsers);

  function filterUsers(e) {
    const text = e.currentTarget.value.toLowerCase();
    const filteredUsers = getFilteredUsersForText(text);
    setUsers(filteredUsers);
  }

  function getFilteredUsersForText(text) {
    return allUsers.filter(user => user.toLowerCase().includes(text))
  }


  return (
    <div className="search">
      <h2>Przy wpisywaniu znaków do inputa<br /> zostają jedynie posiadające te znaki imiona</h2>
      <div>
        <input onInput={filterUsers} />

      </div>
      <div className="search-user">
        <UsersList users={filteredUsers} />
      </div>
    </div>
  )

}

export default Search;