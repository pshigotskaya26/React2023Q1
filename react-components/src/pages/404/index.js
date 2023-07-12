import Header from '../../components/header/header';
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const NotFound = () => {
    return (React.createElement("section", { className: "not-found" },
        React.createElement(Header, null),
        React.createElement("div", { className: "container not-found__container" },
            React.createElement("h1", { className: "not-found__title" }, "Not found page"),
            React.createElement("p", { className: "not-found__number" }, "404"),
            React.createElement("p", { className: "not-found__text" }, "Sorry! Page is not found."),
            React.createElement(Link, { to: "/" }, "GO HOME PAGE"))));
};
export default NotFound;
