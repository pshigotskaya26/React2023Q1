import Header from '../../components/header/header';
import React from 'react';
import './index.css';
import MyForm from '../../components/myForm/myForm';
const Form = () => {
    return (React.createElement("section", { className: "form" },
        React.createElement(Header, null),
        React.createElement("div", { className: "container" },
            React.createElement("h1", { className: "form__title" }, "Form"),
            React.createElement(MyForm, null))));
};
export default Form;
