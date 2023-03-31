import React from 'react';
import './index.css';
import CardItem from '../../components/cardItem/cardItem';
import productsData from '../../data/products.json';
import { IProduct } from 'types/interfaces/IProduct';

const products: IProduct[] = productsData;

const CardsList = () => {
  return (
    <div className="cards">
      <h2 className="cards__title">Cards list:</h2>
      <div data-testid="cards__container" className="cards__container">
        {products.map((productItem) => (
          <CardItem key={productItem.id} product={productItem} />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
