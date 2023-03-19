import Header from '../../components/header/header';
import React, { Component } from 'react';
import './index.css';

class About extends Component {
  render() {
    return (
      <section className="about">
        <Header />
        <div className="container">
          <h1 className="about__title">About us</h1>
        </div>
      </section>
    );
  }
}

export default About;
