import React, { useState } from 'react';
import './index.css';
import { useActions } from '../../hooks/useActions';
const Search = (props) => {
    const [searchValue, setSearchValue] = useState(props.searchInputValue);
    const { addSerchText } = useActions();
    const handleInputSearchChange = (event) => {
        const value = event.target.value;
        setSearchValue(value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        addSerchText(searchValue);
    };
    return (React.createElement("div", { className: "search" },
        React.createElement("div", { className: "search__container" },
            React.createElement("form", { className: "search-form" },
                React.createElement("input", { value: searchValue, "data-testid": "search__input", className: "search__input", type: "search", placeholder: "search something", onInput: handleInputSearchChange }),
                React.createElement("button", { type: "submit", onClick: handleSubmit }, "Search")))));
};
export default Search;
