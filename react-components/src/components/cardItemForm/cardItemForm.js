import React from 'react';
import './index.css';
import cardIsConsentEnum from '../../types/enums/cardIsConsentEnum';
const CardItemForm = (props) => {
    return (React.createElement("div", { className: "card-item" },
        React.createElement("div", { className: "card-item__image" },
            React.createElement("img", { className: "card-image", src: `${props.product.thumbnail}`, alt: `${props.product.name}` })),
        React.createElement("div", { className: "card-item__content" },
            React.createElement("h3", { className: "card-item__name" }, props.product.name),
            React.createElement("div", { className: "card-item__description" },
                React.createElement("div", { className: "card-info card-birthday" },
                    React.createElement("span", { "data-testid": "card-birthday", className: "card-text card-birthday__text" }, "Birthday:"),
                    React.createElement("span", { className: "card-value card-birthday__value" }, props.product.birthday)),
                React.createElement("div", { className: "card-info card-country" },
                    React.createElement("span", { "data-testid": "card-country", className: "card-text card-country__text" }, "Country:"),
                    React.createElement("span", { className: "card-value card-country__value" }, props.product.country)),
                React.createElement("div", { className: "card-info card-male" },
                    React.createElement("span", { "data-testid": "card-male", className: "card-text card-male__text" }, "Male:"),
                    React.createElement("span", { className: "card-value card-male__value" }, props.product.male)),
                React.createElement("div", { className: "card-info card-consent" },
                    React.createElement("span", { "data-testid": "card-consent", className: "card-text card-consent__text" }, "Is consent:"),
                    React.createElement("span", { "data-testid": "card-consent-value", className: "card-value card-consent__value" }, props.product.isConsent ? cardIsConsentEnum.AGREE : cardIsConsentEnum.DISAGREE))))));
};
export default CardItemForm;
