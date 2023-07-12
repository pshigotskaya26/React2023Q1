import React from 'react';
import './index.css';
import CardItemForm from '../cardItemForm/cardItemForm';
const CardsListForm = (props) => {
    return (React.createElement("div", { className: "cards" },
        React.createElement("h2", { className: "cards__title" }, "Cards list:"),
        React.createElement("div", { "data-testid": "cards__container", className: "cards__container" }, props.cards.map((cardItemForm) => (React.createElement(CardItemForm, { key: cardItemForm.id, product: cardItemForm }))))));
};
export default CardsListForm;
