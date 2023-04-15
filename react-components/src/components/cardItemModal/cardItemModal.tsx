import React, { Fragment } from 'react';
import './index.css';
import { useGetSingleProductQuery } from '../../store/singleProduct/singleProduct.api';

interface CardItemModalProps {
  idCardItem: number;
  updateIsModal: (val: boolean) => void;
}

const CardItemModal: React.FC<CardItemModalProps> = (props) => {
  const getEpisodes = (arrayEpisodes: string[]) => {
    const convertArray = arrayEpisodes.map((item) => {
      return item.slice(item.lastIndexOf('/') + 1);
    });

    return convertArray.join(', ');
  };

  const handleBurgerClose = (event: React.MouseEvent) => {
    if (event.currentTarget) {
      props.updateIsModal(false);
    }
  };

  const handleModalClose = (event: React.MouseEvent) => {
    if (event.currentTarget) {
      props.updateIsModal(false);
    }
  };

  const { data, isLoading, isError } = useGetSingleProductQuery(props.idCardItem);
  return (
    <Fragment>
      <div className="modal" onClick={handleModalClose}></div>

      <div className="modal-content">
        <div className="modal__burger" onClick={handleBurgerClose}>
          <div className="burger-close">
            <span></span>
          </div>
        </div>
        <h3 className="modal__title">Detail information: </h3>
        {isError && <div className="error-fetch">Could not fatch the api data</div>}
        {isLoading && <div className="loader">Loading...</div>}
        {data && (
          <div className="modal__description">
            <div className="modal__image">
              <img className="modal-image" src={`${data.image}`} alt={`${data.name}`} />
            </div>
            <div className="modal__info">
              <h4 className="modal__subtitle">{data.name}</h4>
              <p className="modal__text">
                <span className="modal__item">ID: </span>
                {data.id}
              </p>
              <p className="modal__text">
                <span className="modal__item">Status: </span>
                {data.status}
              </p>
              <p className="modal__text">
                <span className="modal__item">Species: </span>
                {data.species}
              </p>
              <p className="modal__text">
                <span className="modal__item">Location: </span>
                {data.location.name}
              </p>
              <p className="modal__text">
                <span className="modal__item">Type: </span>
                {data.type}
              </p>
              <p className="modal__text">
                <span className="modal__item">Created: </span>
                {new Date(data.created).toLocaleDateString()}
              </p>
              <p className="modal__text">
                <span className="modal__item">Gender: </span>
                {data.gender}
              </p>
              <p className="modal__text">
                <span className="modal__item">Episode: </span>
                {getEpisodes(data.episode)}
              </p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CardItemModal;
