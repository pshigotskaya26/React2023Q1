import React, { Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
import CardMaleEnum from '../../types/enums/cardMaleEnum';
const InputRadioMale = (props) => {
    return (React.createElement(Fragment, null,
        React.createElement("label", { htmlFor: "switcher", className: "switcher__label" }, "Male/Female:"),
        React.createElement("fieldset", { id: "switcher-group", className: "switcher" },
            React.createElement("label", { className: "switcher-group-item" },
                React.createElement("input", { ...props.registerAttr('inputRadioMale', {
                        validate: (value) => {
                            if (value && (value === CardMaleEnum.MALE || value === CardMaleEnum.FEMALE)) {
                                return true;
                            }
                            else if (!value) {
                                return 'Male is not choosen';
                            }
                        },
                    }), type: "radio", value: CardMaleEnum.MALE, "data-testid": "radio-male" }),
                CardMaleEnum.MALE),
            React.createElement("label", { className: "switcher-group-item" },
                React.createElement("input", { ...props.registerAttr('inputRadioMale', {
                        validate: (value) => {
                            if (value && (value === CardMaleEnum.MALE || value === CardMaleEnum.FEMALE)) {
                                return true;
                            }
                            else if (!value) {
                                return 'Male is not choosen';
                            }
                        },
                    }), type: "radio", value: CardMaleEnum.FEMALE, "data-testid": "radio-female" }),
                CardMaleEnum.FEMALE)),
        props.errorAttr.inputRadioMale?.message && (React.createElement(ErrorMessage, { errorMessage: props.errorAttr.inputRadioMale.message }))));
};
export default InputRadioMale;
