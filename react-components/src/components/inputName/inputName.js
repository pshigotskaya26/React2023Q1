import React, { Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
const InputName = (props) => {
    return (React.createElement(Fragment, null,
        React.createElement("label", { htmlFor: "name" }, "Name:"),
        React.createElement("input", { id: "name", type: "text", className: "name__input", placeholder: "enter name", "data-testid": "name__input", ...props.registerAttr('inputName', {
                pattern: {
                    value: /^[A-ZА-Я]{1}[а-яА-Яa-zA-Z]{2,}$/,
                    message: "Name is invalid: first letter must be in Upper case and name's length must be >=3", // JS only: <p>error message</p> TS only support string
                },
                required: 'Name is invalid: first letter must be in Upper case and name"s length must be >=3',
            }) }),
        props.errorAttr.inputName?.message && (React.createElement(ErrorMessage, { errorMessage: props.errorAttr.inputName?.message }))));
};
export default InputName;
