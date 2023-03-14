import React, { Component, SyntheticEvent } from 'react';
import './index.css';

class Search extends Component {
  state = {
    searchValue: localStorage.getItem('searchValue') || '',
  };

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  handleInputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    this.setState({
      searchValue: value,
    });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="search">
        <div className="search__container">
          <input
            className="search__input"
            type="search"
            placeholder="search something"
            value={searchValue}
            onInput={this.handleInputSearchChange}
          />
          <button>Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
