import React, { Fragment, useState } from 'react';
import './index.css';
import { IProduct } from '../../types/interfaces/IProduct';
import { ICharacter } from '../../types/interfaces/ICharacter';
import CardItemModal from '../cardItemModal/cardItemModal';

interface CardItemProps {
  product: ICharacter;
}

const CardItem: React.FC<CardItemProps> = (props) => {
  const [isModal, setIsModal] = useState<boolean>(false);

  const handleClickCardItem = () => {
    setIsModal(true);
    console.log('click');
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
          <div className="card-item__description">
            {/* <div className="card-info card-category">
            <span data-testid="card-category" className="card-text card-category__text">
              Category:
            </span>
            <span className="card-value card-category__value">{}</span>
          </div>

          <div className="card-info card-brand">
            <span data-testid="card-brand" className="card-text card-brand__text">
              Brand:
            </span>
            <span className="card-value card-brand__value">{props.product.brand}</span>
          </div>

          <div className="card-info">
            <div className="card-price">
              <span className="card-price__value">{props.product.price}</span> $
            </div>
            <div data-testid="card-raiting" className="card-raiting">
              {props.product.rating}
            </div>
          </div> */}
          </div>
        </div>
      </div>
      {isModal && <CardItemModal updateIsModal={updateIsModal} idCardItem={props.product.id} />}
    </Fragment>
  );
};

export default CardItem;
