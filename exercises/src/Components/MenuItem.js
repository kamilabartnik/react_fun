import React, { Component } from 'react';


class MenuItem extends Component {

  render() {
    return (
      <div className="menu">
        <div className="menu-item">
          <a className="menu-link" data-toggle="modal" href={this.props.href}>
            <div className="menu-hover"></div>
            <img className="img-fluid" src={this.props.image} alt="" />
            <h4>{this.props.title}</h4>
          </a>
        </div>
      </div>
    )
  }
}

export default MenuItem;