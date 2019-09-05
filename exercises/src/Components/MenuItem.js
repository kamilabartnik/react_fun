import React, { Component } from 'react';


class MenuItem extends Component {

  render() {
    return (
      <a className="menu-link" data-toggle="modal" href={this.props.href}>
        <button className="play-btn">
          <div className="menu-hover"></div>
          <h4>{this.props.title}</h4>
        </button>
      </a>
    )
  }
}

export default MenuItem;