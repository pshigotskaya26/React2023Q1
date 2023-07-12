import React, { Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
const InputFileImage = (props) => {
    return (React.createElement(Fragment, null,
        React.createElement("label", { htmlFor: "image", className: "image__label" }, "Choose image:"),
        React.createElement("input", { ...props.registerAttr('inputFileImage', {
                required: 'Image is not choosen',
                validate: {
                    format: (files) => (files && files.length !== 0) || 'Image is not choosen',
                },
            }), type: "file", accept: "image/*", className: "image__input", "data-testid": "image__input" }),
        props.errorAttr.inputFileImage?.message && (React.createElement(ErrorMessage, { errorMessage: props.errorAttr.inputFileImage.message }))));
};
export default InputFileImage;
