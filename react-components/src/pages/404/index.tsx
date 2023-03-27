import Header from '../../components/header/header';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class NotFound extends Component {
  render() {
    return (
      <section className="not-found">
        <Header />
        <div className="container not-found__container">
          <h1 className="not-found__title">Not found page</h1>
          <p className="not-found__number">404</p>
          <p className="not-found__text">Sorry! Page is not found.</p>
          <Link to="/">GO HOME PAGE</Link>
        </div>
      </section>
    );
  }
}

export default NotFound;
