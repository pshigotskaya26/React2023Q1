import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
const Header = () => {
    const pathPage = window.location.pathname.slice(1);
    return (React.createElement("header", { className: "header" },
        React.createElement("div", { className: "container header__container" },
            pathPage === '' ? (React.createElement("h2", { "data-testid": "header__title" }, "Current page: Home")) : pathPage === 'about' ? (React.createElement("h2", { "data-testid": "header__title" }, "Current page: About us")) : pathPage === 'form' ? (React.createElement("h2", null, "Current page: Form")) : (React.createElement("h2", { "data-testid": "header__title" }, "Current page: Not Found")),
            React.createElement("nav", { className: "header__navigation" },
                React.createElement("ul", { className: "navigation" },
                    React.createElement("li", { className: "navigation__item" },
                        React.createElement(NavLink, { to: "/" }, "Home")),
                    React.createElement("li", { className: "navigation__item" },
                        React.createElement(NavLink, { to: "/about" }, "About us")),
                    React.createElement("li", { className: "navigation__item" },
                        React.createElement(NavLink, { to: "/form" }, "Form")))))));
};
export default Header;
