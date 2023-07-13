import Header from '../../components/header/header';
import React from 'react';
import './index.css';

const About = () => {
  return (
    <section className="about">
      <Header />
      <div className="container">
        <h1 className="about__title">About us</h1>
        <p>
          React-redux is a simple study project SPA that is designed to learn React, Redux Toolkit,
          React Hook Form and use API and get data after sending request to API.
        </p>
        <h2 className="about__subtitle">Done:</h2>
        <ul className="about__list">
          <li className="about__item">
            getting API data after sending the request to API with the searching parameters and
            getting the list of results is updating
          </li>
          <li className="about__item">validation the form using React Hook Form</li>
          <li className="about__item">
            saving all information when navigate between routes (Search, About and Form) using Redux
            Toolkit
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
