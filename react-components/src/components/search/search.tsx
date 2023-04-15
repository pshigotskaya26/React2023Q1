import React, { useState } from 'react';
import './index.css';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface SearchProps {
  searchInputValue: string;
  //   //updateSearchValue: (value: string) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const [searchValue, setSearchValue] = useState<string>(props.searchInputValue);
  const { addSerchText } = useActions();
  const { searchText } = useTypedSelector((state) => state);

  const handleInputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();

    //store.dispatch(addSerchText(searchValue));
    addSerchText(searchValue);
  };

  //const stateSearchText = store.getState().searchText;
  console.log('searchText: ', searchText);
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
