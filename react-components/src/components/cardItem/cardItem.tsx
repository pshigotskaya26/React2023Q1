import React, { Fragment, useState } from 'react';
import './index.css';
import { ICharacter } from '../../types/interfaces/ICharacter';
import CardItemModal from '../cardItemModal/cardItemModal';

interface CardItemProps {
  product: ICharacter;
}

const CardItem: React.FC<CardItemProps> = (props) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleClickCardItem = () => {
    setIsModal(true);
  };

  const updateIsModal = (booleanValue: boolean) => {
    setIsModal(booleanValue);
  };

  return (
    <Fragment>
      <div className="card-item" onClick={handleClickCardItem}>
        <div className="card-item__image">
          <img
            className="card-image"
            src={`${props.product.image}`}
            alt={`${props.product.name}`}
          />
        </div>
        <div className="card-item__content">
          <h3 className="card-item__title">{props.product.name}</h3>
          <div className="card-item__description"></div>
        </div>
      </div>
      {isModal && <CardItemModal updateIsModal={updateIsModal} idCardItem={props.product.id} />}
    </Fragment>
  );
};

export default CardItem;
