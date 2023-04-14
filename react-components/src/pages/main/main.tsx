import React, { useEffect, useState, useCallback } from 'react';
import './index.css';
import Search from '../../components/search/search';
import CardsList from '../../components/cardsList/cardsList';
import Header from '../../components/header/header';
import { IDataAPI } from '../../types/interfaces/IDataAPI';
import { useGetProductsQuery } from '../../store/product/product.api';
import { store } from '../../store/store';

import { serchTextReducer } from '../../store/searchText/searchText.slice';

const Home = () => {
  /*
  const [apiData, setApiDAta] = useState<IDataAPI>();
  const [filteredApiData, setFilteredApiData] = useState<IDataAPI>();
  const [searchInputValue, setSearchInputValue] = useState<string>(
    localStorage.getItem('searchValue') || ''
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const updateSearchValue = (searchValue: string) => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      setSearchInputValue(searchValue);
      setApiDAta(undefined);
      setFilteredApiData(undefined);
    }, 2000);
  };

  const getApiData = () => {
    setTimeout(async () => {
      await fetch('https://rickandmortyapi.com/api/character')
        .then((response) => {
          if (!response.ok) {
            throw Error('Could not fatch the api data');
          }
          return response.json();
        })
        .then((data: IDataAPI) => {
          setApiDAta(data);
          setIsLoading(false);
          setError('');
        })
        .catch((err: Error) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 3000);
  };

  const getFilteredApiData = useCallback(() => {
    if (searchInputValue !== '') {
      setTimeout(async () => {
        await fetch(`https://rickandmortyapi.com/api/character/?name=${searchInputValue}`)
          .then((response) => {
            if (!response.ok) {
              throw Error('Could not fatch the api data');
            }
            return response.json();
          })
          .then((data: IDataAPI) => {
            setFilteredApiData(data);
            setIsLoading(false);
            setError('');
          })
          .catch((err: Error) => {
            setError(err.message);
            setIsLoading(false);
          });
      });
    }
  }, [searchInputValue]);

  const checkSearch = useCallback(() => {
    if (searchInputValue !== '') {
      getFilteredApiData();
      setApiDAta(undefined);
    } else {
      getApiData();
      setFilteredApiData(undefined);
    }
  }, [searchInputValue, getFilteredApiData]);

  useEffect(() => {
    checkSearch();
  }, [checkSearch]);

  */

  const { data, isLoading, isFetching, isError } = useGetProductsQuery();
  console.log('store: ', store);
  console.log('serchTextReducer: ', serchTextReducer);
  const stateSearchText = store.getState().searchText;
  console.log('stateSearchText: ', stateSearchText);

  return (
    <section className="home">
      <Header />
      <div className="container">
        <h1 className="home__title">Home</h1>
        <Search searchInputValue={stateSearchText} />
        {isLoading && <div className="loader">Loading...</div>}
        {/* {error && <div className="error-fetch">{error}</div>} */}
        {isError && <div className="error-fetch">Could not fatch the api data</div>}
        {/* {searchInputValue ? (
          <CardsList apiData={filteredApiData?.results} />
        ) : (
          <CardsList apiData={apiData?.results} />
        )} */}

        <CardsList apiData={data?.results} />
      </div>
    </section>
  );
};

export default Home;
