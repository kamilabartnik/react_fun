import React, { Component } from 'react';
import '../css/menu.css';
import MenuItem from './MenuItem';
import img from '../assets/img/stone.jpg';


const menus = [
  {title: 'Play StonePaperScissors', image: img, href:'/StonePaperScissors'},
  {title: 'Get random number', image: img, href:'/RandomNumber'},
  {title: 'See few even numbers', image: img, href:'/EvenNumber'},
  {title: 'See your name near "Hello!"', image: img, href:'/HelloName'},
]


class MenuApp extends Component {
  
  render() {
    return (
      <div>
        <div>
          <section className="bg-light page-section" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                </div>
              </div>
              <div className="row">
                {menus.map((item, index) => {
                  return <MenuItem {...item} key={index} />
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default MenuApp;