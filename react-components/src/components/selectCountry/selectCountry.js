import React, { Fragment } from 'react';
import './index.css';
import ErrorMessage from '../ErrorMessage/errorMessage';
import CardCountryEnum from '../../types/enums/cardCountryEnum';
const SelectCountry = (props) => {
    return (React.createElement(Fragment, null,
        React.createElement("label", { htmlFor: "country" }, "Country:"),
        React.createElement("select", { className: "country__select", "data-testid": "country__select", ...props.registerAttr('selectCountry', {
                validate: (value) => {
                    if (value === '') {
                        return 'Country is not choosen';
                    }
                    else {
                        return true;
                    }
                },
            }) },
            React.createElement("option", { value: "", hidden: true }, "No selected"),
            React.createElement("option", { value: CardCountryEnum.USA }, CardCountryEnum.USA),
            React.createElement("option", { value: CardCountryEnum.BELARUS }, CardCountryEnum.BELARUS),
            React.createElement("option", { value: CardCountryEnum.ITALY }, CardCountryEnum.ITALY),
            React.createElement("option", { value: CardCountryEnum.RUSSIA }, CardCountryEnum.RUSSIA),
            React.createElement("option", { value: CardCountryEnum.POLAND }, CardCountryEnum.POLAND)),
        props.errorAttr.selectCountry?.message && (React.createElement(ErrorMessage, { errorMessage: props.errorAttr.selectCountry.message }))));
};
export default SelectCountry;
