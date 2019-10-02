import React, { Component } from "react";
import '../../css/Pages/search.css';

class Search extends Component {

  render() {
    return (
      <div className="search">
        <input type="search" />
          <ul className="searchList">
            <li>Michał</li>
            <li>Ania</li>
            <li>Kasia</li>
            <li>Tomek</li>
          </ul>
      </div>
    )
  }
}
    
export default Search;