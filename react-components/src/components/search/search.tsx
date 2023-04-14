import React, { useState } from 'react';
import './index.css';

import { store } from '../../store/store';

interface SearchProps {
  searchInputValue: string;
  //   //updateSearchValue: (value: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  //const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');

  const handleInputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    //setSearchValue(value);
  };

  const handleSubmit = (event: React.MouseEvent) => {
    //event.preventDefault();
    //localStorage.setItem('searchValue', searchValue);
    // props.updateSearchValue(searchValue);
  };

  //const stateSearchText = store.getState().searchText;

  return (
    <div className="search">
      <div className="search__container">
        <form className="search-form">
          <input
            value={props.searchInputValue}
            data-testid="search__input"
            className="search__input"
            type="search"
            placeholder="search something"
            onInput={handleInputSearchChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
export default Search;
