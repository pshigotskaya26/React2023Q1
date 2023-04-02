import React from 'react';
import './index.css';
import Search from '../../components/search/search';
import CardsList from '../../components/cardsList/cardsList';
import Header from '../../components/header/header';

const Home = () => {
  return (
    <section className="home">
      <Header />
      <div className="container">
        <h1 className="home__title">Home</h1>
        <Search />
        <CardsList />
      </div>
    </section>
  );
};

export default Home;
