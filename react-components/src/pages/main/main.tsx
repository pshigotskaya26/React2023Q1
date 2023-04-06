import React, { useEffect, useState } from 'react';
import './index.css';
import Search from '../../components/search/search';
import CardsList from '../../components/cardsList/cardsList';
import Header from '../../components/header/header';

const Home = () => {
  const [apiData, setApiDAta] = useState({});

  const getApiData = async () => {
    await fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setApiDAta(data));
  };

  useEffect(() => {
    (async () => await getApiData())();
  }, []);

  console.log('apiData: ', apiData);
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
