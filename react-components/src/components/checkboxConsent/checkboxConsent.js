import React, { Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
const CheckboxConsent = (props) => {
    return (React.createElement(Fragment, null,
        React.createElement("label", { htmlFor: "consent", className: "consent__label" },
            React.createElement("input", { ...props.registerAttr('checkboxConsent', {
                    validate: (value) => {
                        if (value) {
                            return value;
                        }
                        else if (!value) {
                            return 'Consent is not choosen';
                        }
                    },
                }), id: "consent", className: "consent__checkbox", type: "checkbox", "data-testid": "consent__checkbox" }),
            "I consent to my personal data"),
        props.errorAttr.checkboxConsent?.message && (React.createElement(ErrorMessage, { errorMessage: props.errorAttr.checkboxConsent.message }))));
};
export default CheckboxConsent;
