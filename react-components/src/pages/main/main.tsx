import React, { useEffect, useState } from 'react';
import './index.css';
import Search from '../../components/search/search';
import CardsList from '../../components/cardsList/cardsList';
import Header from '../../components/header/header';
import { IDataAPI } from '../../types/interfaces/IDataAPI';

const Home = () => {
  const [apiData, setApiDAta] = useState<IDataAPI>();
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [error, setError] = useState<string>('');

  const getApiData = async () => {
    await fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw Error('Could not fatch the api data');
        }
        return response.json();
      })
      .then((data: IDataAPI) => {
        setApiDAta(data);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setIsLoading(false);
        //console.log(err.message);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getApiData();
    }, 3000);
  }, []);

  //   useEffect(() => {
  //     (async () => {
  //       await getApiData();
  //       console.log('useeffect');
  //     })();
  //   }, []);

  console.log('apiData: ', apiData?.results);
  return (
    <section className="home">
      <Header />
      <div className="container">
        <h1 className="home__title">Home</h1>
        <Search />
        {isLoading && <div className="loader">Loading...</div>}
        {error && <div className="error-fetch">{error}</div>}
        <CardsList apiData={apiData?.results} />
      </div>
    </section>
  );
};

export default Home;
