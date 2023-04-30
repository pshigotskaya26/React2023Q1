import Header from '../../components/header/header';
import React from 'react';
import './index.css';

const About = () => {
  return (
    <section className="about">
      <Header />
      <div className="container">
        <h1 className="about__title">About us</h1>
      </div>
    </section>
  );
};

export default About;
