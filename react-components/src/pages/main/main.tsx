import React, { useEffect, useState } from 'react';
import './index.css';
import Search from '../../components/search/search';
import CardsList from '../../components/cardsList/cardsList';
import Header from '../../components/header/header';
import { IDataAPI } from '../../types/interfaces/IDataAPI';

const Home = () => {
  const [apiData, setApiDAta] = useState<IDataAPI>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const getApiData = async () => {
    await fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data: IDataAPI) => {
        setTimeout(() => {
          setApiDAta(data);
          setIsLoading(false);
        }, 3000);
      });
  };

  useEffect(() => {
    (async () => {
      await getApiData();
      console.log('useeffect');
    })();
  }, []);

  console.log('apiData: ', apiData?.results);
  return (
    <section className="home">
      <Header />
      <div className="container">
        <h1 className="home__title">Home</h1>
        <Search />
        {isLoading && <div className="loader">Loading...</div>}
        <CardsList apiData={apiData?.results} />
      </div>
    </section>
  );
};

export default Home;
