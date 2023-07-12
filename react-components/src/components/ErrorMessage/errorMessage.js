import React from 'react';
import './index.css';
const ErrorMessage = (props) => {
    return (React.createElement("span", { "data-testid": "error-message", className: "error-message" }, props.errorMessage));
};
export default ErrorMessage;
