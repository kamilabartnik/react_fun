import React, { Component } from 'react';
import '../css/menu.css';
import MenuItem from './MenuItem';
import img from '../assets/img/stone.jpg';


const menus = [
  {title: 'Play Stone Paper Scissors', image: img, href:'/StonePaperScissors'},
  {title: 'Get random name', image: img, href:'/RandomNumber'},
  {title: 'See few even numbers', image: img, href:'/EvenNumber'},
  {title: 'See your name near "Hello!"', image: img, href:'/HelloName'},
  {title: 'Select a file', image: img, href:'/FileSelector'},
  {title: 'Dialog', image: img, href:'/Dialog'}
]


class MenuApp extends Component {
  
  render() {
    return (
      <div className="menuBar">
        <section className="bg-light page-section" id="portfolio">
          {menus.map((item, index) => {
            return <MenuItem {...item} key={index} />
          })}
        </section>
      </div>
    )
  }
}

export default MenuApp;