import React from 'react';
import './index.css';
import CardItem from '../../components/cardItem/cardItem';
const CardsList = (props) => {
    return (React.createElement("div", { className: "cards" },
        React.createElement("h2", { className: "cards__title" }, "Cards list:"),
        React.createElement("div", { "data-testid": "cards__container", className: "cards__container" }, props.apiData &&
            props.apiData.map((productItem) => (React.createElement(CardItem, { key: productItem.id, product: productItem }))))));
};
export default CardsList;
