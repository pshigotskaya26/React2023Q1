import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const Header = () => {
  //const pathPage = window.location.pathname.slice(1);

  return (
    <header className="header">
      <div className="container header__container">
        {/* {pathPage === '' ? (
          <h2 data-testid="header__title">Current page: Home</h2>
        ) : pathPage === 'about' ? (
          <h2 data-testid="header__title">Current page: About us</h2>
        ) : pathPage === 'form' ? (
          <h2>Current page: Form</h2>
        ) : (
          <h2 data-testid="header__title">Current page: Not Found</h2>
        )} */}
        <nav className="header__navigation">
          <ul className="navigation">
            <li className="navigation__item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/about">About us</NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/form">Form</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
