import React, { Component } from 'react';
import './index.css';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="search__container">
          <input className="search__input" type="search" placeholder="search something" />
          <button>Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
