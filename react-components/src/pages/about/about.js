import Header from '../../components/header/header';
import React from 'react';
import './index.css';
const About = () => {
    return (React.createElement("section", { className: "about" },
        React.createElement(Header, null),
        React.createElement("div", { className: "container" },
            React.createElement("h1", { className: "about__title" }, "About us"))));
};
export default About;
