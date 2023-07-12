import React, { Fragment } from 'react';
import './index.css';
import { useGetSingleProductQuery } from '../../store/singleProduct/singleProduct.api';
const CardItemModal = (props) => {
    const getEpisodes = (arrayEpisodes) => {
        const convertArray = arrayEpisodes.map((item) => {
            return item.slice(item.lastIndexOf('/') + 1);
        });
        return convertArray.join(', ');
    };
    const handleBurgerClose = (event) => {
        if (event.currentTarget) {
            props.updateIsModal(false);
        }
    };
    const handleModalClose = (event) => {
        if (event.currentTarget) {
            props.updateIsModal(false);
        }
    };
    const { data, isLoading, isError } = useGetSingleProductQuery(props.idCardItem);
    return (React.createElement(Fragment, null,
        React.createElement("div", { className: "modal", onClick: handleModalClose }),
        React.createElement("div", { className: "modal-content" },
            React.createElement("div", { className: "modal__burger", onClick: handleBurgerClose },
                React.createElement("div", { className: "burger-close" },
                    React.createElement("span", null))),
            React.createElement("h3", { className: "modal__title" }, "Detail information: "),
            isError && React.createElement("div", { className: "error-fetch" }, "Could not fatch the api data"),
            isLoading && React.createElement("div", { className: "loader" }, "Loading..."),
            data && (React.createElement("div", { className: "modal__description" },
                React.createElement("div", { className: "modal__image" },
                    React.createElement("img", { className: "modal-image", src: `${data.image}`, alt: `${data.name}` })),
                React.createElement("div", { className: "modal__info" },
                    React.createElement("h4", { className: "modal__subtitle" }, data.name),
                    React.createElement("p", { className: "modal__text" },
                        React.createElement("span", { className: "modal__item" }, "ID: "),
                        data.id),
                    React.createElement("p", { className: "modal__text" },
                        React.createElement("span", { className: "modal__item" }, "Status: "),
                        data.status),
                    React.createElement("p", { className: "modal__text" },
                        React.createElement("span", { className: "modal__item" }, "Species: "),
                        data.species),
                    React.createElement("p", { className: "modal__text" },
                        React.createElement("span", { className: "modal__item" }, "Location: "),
                        data.location.name),
                    React.createElement("p", { className: "modal__text" },
                        React.createElement("span", { className: "modal__item" }, "Type: "),
                        data.type),
                    React.createElement("p", { className: "modal__text" },
                        React.createElement("span", { className: "modal__item" }, "Created: "),
                        new Date(data.created).toLocaleDateString()),
                    React.createElement("p", { className: "modal__text" },
                        React.createElement("span", { className: "modal__item" }, "Gender: "),
                        data.gender),
                    React.createElement("p", { className: "modal__text" },
                        React.createElement("span", { className: "modal__item" }, "Episode: "),
                        getEpisodes(data.episode))))))));
};
export default CardItemModal;
