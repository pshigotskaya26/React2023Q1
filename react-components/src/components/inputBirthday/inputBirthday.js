import React, { Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
const InputBirthday = (props) => {
    return (React.createElement(Fragment, null,
        React.createElement("label", { htmlFor: "birthday" }, "Birthday:"),
        React.createElement("input", { id: "birthday", type: "date", className: "birthday__input", "data-testid": "birthday__input", ...props.registerAttr('inputBirthday', {
                validate: (value) => {
                    if (Date.parse(value) && Date.parse(value) <= Date.now()) {
                        return true;
                    }
                    else if (Date.parse(value) && Date.parse(value) > Date.now()) {
                        return "Birthday must be less now' date";
                    }
                    else {
                        return 'Birthday is not choosen';
                    }
                },
            }) }),
        props.errorAttr.inputBirthday?.message && (React.createElement(ErrorMessage, { errorMessage: props.errorAttr.inputBirthday.message }))));
};
export default InputBirthday;
