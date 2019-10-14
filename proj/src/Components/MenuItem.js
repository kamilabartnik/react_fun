import React, { Component } from 'react';


class MenuItem extends Component {

  render() {
    return (
      
      <a className="menu-text" data-toggle="modal" href={this.props.href}>
          <div><li>{this.props.title}      </li>
      </div>
      
      </a>
      

    )
  }
}

export default MenuItem;