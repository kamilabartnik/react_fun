import React, { Component } from 'react';


class MenuItem extends Component {

  render() {
    return (
      <div><li>
      <a className="menuText" data-toggle="modal" href={this.props.href}>
          {this.props.title}
      </a>
      
      </li>
      </div>
      
    )
  }
}

export default MenuItem;