import React, { Fragment, useEffect, useState, useCallback } from 'react';
import './index.css';
import { ICharacter } from '../../types/interfaces/ICharacter';

interface CardItemModalProps {
  idCardItem: number;
  updateIsModal: (val: boolean) => void;
}

const CardItemModal: React.FC<CardItemModalProps> = (props) => {
  const [apiDataSingleCard, setApiDataSingleCard] = useState<ICharacter>();
  const [errorModal, setErrorModal] = useState<string>('');
  const [isLoadingModal, setIsLoadingModal] = useState<boolean>(true);

  const getApiDataSingleCard = useCallback(() => {
    setTimeout(async () => {
      await fetch(`https://rickandmortyapi.com/api/character/${props.idCardItem}`)
        .then((response) => {
          if (!response.ok) {
            throw Error('Could not fatch the api data');
          }
          return response.json();
        })
        .then((data: ICharacter) => {
          setApiDataSingleCard(data);
          setIsLoadingModal(false);
          setErrorModal('');
        })
        .catch((err: Error) => {
          setErrorModal(err.message);
          setIsLoadingModal(false);
        });
    }, 3000);
  }, [props.idCardItem]);

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

  useEffect(() => {
    getApiDataSingleCard();
  }, [getApiDataSingleCard]);

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
        {errorModal && <div className="error-fetch">{errorModal}</div>}
        {isLoadingModal && <div className="loader">Loading...</div>}
        {apiDataSingleCard && (
          <div className="modal__description">
            <div className="modal__image">
              <img
                className="modal-image"
                src={`${apiDataSingleCard.image}`}
                alt={`${apiDataSingleCard.name}`}
              />
            </div>
            <div className="modal__info">
              <h4 className="modal__subtitle">{apiDataSingleCard.name}</h4>
              <p className="modal__text">
                <span className="modal__item">ID: </span>
                {apiDataSingleCard.id}
              </p>
              <p className="modal__text">
                <span className="modal__item">Status: </span>
                {apiDataSingleCard.status}
              </p>
              <p className="modal__text">
                <span className="modal__item">Species: </span>
                {apiDataSingleCard.species}
              </p>
              <p className="modal__text">
                <span className="modal__item">Location: </span>
                {apiDataSingleCard.location.name}
              </p>
              <p className="modal__text">
                <span className="modal__item">Type: </span>
                {apiDataSingleCard.type}
              </p>
              <p className="modal__text">
                <span className="modal__item">Created: </span>
                {new Date(apiDataSingleCard.created).toLocaleDateString()}
              </p>
              <p className="modal__text">
                <span className="modal__item">Gender: </span>
                {apiDataSingleCard.gender}
              </p>
              <p className="modal__text">
                <span className="modal__item">Episode: </span>
                {getEpisodes(apiDataSingleCard.episode)}
              </p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CardItemModal;
