import React from "react";


const UsersList = ({ users }) => {
  if (!users) {
    return (
      <p>No results!</p>
    );
  }

  return (
    <ul className="search-list">
      {users.map(user => <li key={user}>{user}</li>)}
    </ul>
  );
};

export default UsersList;