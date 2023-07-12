import React from 'react';
import './index.css';
import Search from '../../components/search/search';
import CardsList from '../../components/cardsList/cardsList';
import Header from '../../components/header/header';
import { useGetProductsQuery, useGetSearchProductsQuery } from '../../store/product/product.api';
import { useTypedSelector } from '../../hooks/useTypedSelector';
const Home = () => {
    const { searchText } = useTypedSelector((state) => state);
    const { data: productsData, isLoading: productsIsLoading, isError: productsIsError, } = useGetProductsQuery();
    const { data: searchProductsData, isLoading: searchProductsIsLoading, isError: searchProductsIsError, } = useGetSearchProductsQuery(searchText);
    return (React.createElement("section", { className: "home" },
        React.createElement(Header, null),
        React.createElement("div", { className: "container" },
            React.createElement("h1", { className: "home__title" }, "Home"),
            React.createElement(Search, { searchInputValue: searchText }),
            searchText ? (searchProductsIsLoading ? (React.createElement("div", { className: "loader" }, "Loading...")) : searchProductsIsError ? (React.createElement("div", { className: "error-fetch" }, "Could not fatch the api data")) : (React.createElement(CardsList, { apiData: searchProductsData?.results }))) : productsIsLoading ? (React.createElement("div", { className: "loader" }, "Loading...")) : productsIsError ? (React.createElement("div", { className: "error-fetch" }, "Could not fatch the api data")) : (React.createElement(CardsList, { apiData: productsData?.results })))));
};
export default Home;
