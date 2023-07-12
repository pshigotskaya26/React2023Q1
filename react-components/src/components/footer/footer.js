import React from 'react';
import './index.css';
const Footer = () => {
    return (React.createElement("footer", { className: "footer" },
        React.createElement("div", { className: "container footer__container" },
            React.createElement("a", { className: "footer-link footer-link__github", href: "https://github.com/pshigotskaya26", target: "_blank", rel: "noreferrer" },
                React.createElement("span", { className: "icon icon_github" })),
            React.createElement("p", { className: "footer-text" }, "2023"),
            React.createElement("a", { className: "footer-link footer-link__rsschool", href: "https://rs.school/js/", target: "_blank", rel: "noreferrer" },
                React.createElement("span", { className: "icon icon_rsschool" })))));
};
export default Footer;
