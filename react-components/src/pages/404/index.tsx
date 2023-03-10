import React, { Component } from 'react';
import './index.css';

class NotFound extends Component {
  render() {
    return (
      <section className="not-found">
        <div className="container not-found__container">
          <p className="not-found__number">404</p>
          <p className="not-found__text">Sorry! Page is not found.</p>
        </div>
      </section>
    );
  }
}

export default NotFound;
