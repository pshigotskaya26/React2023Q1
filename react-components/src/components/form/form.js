import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './index.css';
import InputName from '../inputName/inputName';
import InputBirthday from '../inputBirthday/inputBirthday';
import SelectCountry from '../selectCountry/selectCountry';
import CheckboxConsent from '../checkboxConsent/checkboxConsent';
import InputRadioMale from '../inputRadioMale/inputRadioMale';
import InputFileImage from '../inputFileImage/inputFileImage';
import { useActions } from '../../hooks/useActions';
export const Form = (props) => {
    const { addProductForm } = useActions();
    const { register, formState: { errors, isSubmitSuccessful }, handleSubmit, reset, } = useForm({
        reValidateMode: 'onSubmit',
    });
    const onSubmit = (data) => {
        const img = URL.createObjectURL(data.inputFileImage[0]);
        createCard(data.inputName, data.inputBirthday, data.selectCountry, data.checkboxConsent, data.inputRadioMale, img);
    };
    const createCard = (name, birthday, country, consent, male, image) => {
        const card = {
            id: props.cards.length + 1,
            name: name,
            birthday: birthday,
            country: country,
            isConsent: consent,
            male: male,
            thumbnail: image,
        };
        addProductForm(card);
    };
    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [reset, isSubmitSuccessful]);
    return (React.createElement("form", { className: "my-form", onSubmit: handleSubmit(onSubmit) },
        React.createElement("div", { className: "my-form__content" },
            React.createElement("div", { className: "form-group form-group__first" },
                React.createElement("div", { className: "form-item" },
                    React.createElement(InputName, { registerAttr: register, errorAttr: errors })),
                React.createElement("div", { className: "form-item" },
                    React.createElement(InputBirthday, { registerAttr: register, errorAttr: errors })),
                React.createElement("div", { className: "form-item" },
                    React.createElement(SelectCountry, { registerAttr: register, errorAttr: errors }))),
            React.createElement("div", { className: "form-group form-group__second" },
                React.createElement("div", { className: "form-item" },
                    React.createElement(CheckboxConsent, { registerAttr: register, errorAttr: errors })),
                React.createElement("div", { className: "form-item" },
                    React.createElement(InputRadioMale, { registerAttr: register, errorAttr: errors })),
                React.createElement("div", { className: "form-item" },
                    React.createElement(InputFileImage, { registerAttr: register, errorAttr: errors })))),
        React.createElement("div", { className: "my-form__button" },
            React.createElement("button", { "data-testid": "my-form-button", className: "btn btn-submit" }, "Submit"))));
};
