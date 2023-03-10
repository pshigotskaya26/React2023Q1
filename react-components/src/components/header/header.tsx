import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <nav className="header__navigation">
            <ul className="navigation">
              <li className="navigation__item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navigation__item">
                <NavLink to="/about">About us</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
