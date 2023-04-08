import React, { useState } from 'react';
import './index.css';

interface SearchProps {
  searchInputValue: string;
  updateSearchValue: (value: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');

  const handleInputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleInputSearchClick = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    localStorage.setItem('searchValue', searchValue);
    props.updateSearchValue(searchValue);
  };

  return (
    <div className="search">
      <div className="search__container">
        <form className="search-form">
          <input
            value={searchValue}
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
