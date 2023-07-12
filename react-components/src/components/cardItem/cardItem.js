import React, { Fragment, useState } from 'react';
import './index.css';
import CardItemModal from '../cardItemModal/cardItemModal';
const CardItem = (props) => {
    const [isModal, setIsModal] = useState(false);
    const handleClickCardItem = () => {
        setIsModal(true);
    };
    const updateIsModal = (booleanValue) => {
        setIsModal(booleanValue);
    };
    return (React.createElement(Fragment, null,
        React.createElement("div", { className: "card-item", onClick: handleClickCardItem },
            React.createElement("div", { className: "card-item__image" },
                React.createElement("img", { className: "card-image", src: `${props.product.image}`, alt: `${props.product.name}` })),
            React.createElement("div", { className: "card-item__content" },
                React.createElement("h3", { className: "card-item__title", "data-testid": "card-item__title" }, props.product.name))),
        isModal && React.createElement(CardItemModal, { updateIsModal: updateIsModal, idCardItem: props.product.id })));
};
export default CardItem;
