import React from 'react';
import './index.css';
import Search from '../../components/search/search';
import CardsList from '../../components/cardsList/cardsList';
import Header from '../../components/header/header';
import { useGetProductsQuery, useGetSearchProductsQuery } from '../../store/product/product.api';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Home = () => {
  const { searchText } = useTypedSelector((state) => state);

  const {
    data: productsData,
    isLoading: productsIsLoading,
    isError: productsIsError,
  } = useGetProductsQuery();

  const {
    data: searchProductsData,
    isLoading: searchProductsIsLoading,
    isError: searchProductsIsError,
  } = useGetSearchProductsQuery(searchText);

  return (
    <section className="home">
      <Header />
      <div className="container">
        <h1 className="home__title">Home</h1>
        <Search searchInputValue={searchText} />

        {searchText ? (
          searchProductsIsLoading ? (
            <div className="loader">Loading...</div>
          ) : searchProductsIsError ? (
            <div className="error-fetch">Could not fatch the api data</div>
          ) : (
            <CardsList apiData={searchProductsData?.results} />
          )
        ) : productsIsLoading ? (
          <div className="loader">Loading...</div>
        ) : productsIsError ? (
          <div className="error-fetch">Could not fatch the api data</div>
        ) : (
          <CardsList apiData={productsData?.results} />
        )}
      </div>
    </section>
  );
};

export default Home;
