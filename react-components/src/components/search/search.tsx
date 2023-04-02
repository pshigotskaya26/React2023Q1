import React, { useState, useEffect } from 'react';
import './index.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValue);
    };
  });

  const handleInputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <div className="search">
      <div className="search__container">
        <input
          value={searchValue}
          data-testid="search__input"
          className="search__input"
          type="search"
          placeholder="search something"
          onInput={handleInputSearchChange}
        />
        <button>Search</button>
      </div>
    </div>
  );
};
export default Search;
