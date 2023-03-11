import React, { Component } from 'react';
import './index.css';
import Search from '../../components/search/search';
import CardsList from '../../components/cardsList/cardsList';

class Home extends Component {
  render() {
    return (
      <section className="home">
        <div className="container">
          <h1 className="home__title">Home</h1>
          <Search />
          <CardsList />
        </div>
      </section>
    );
  }
}

export default Home;
