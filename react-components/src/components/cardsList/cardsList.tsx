import React, { Component } from 'react';
import './index.css';
import CardItem from '../../components/cardItem/cardItem';
import productsData from '../../data/products.json';
import { IProduct } from 'types/interfaces/IProduct';

const products: IProduct[] = productsData;

class CardsList extends Component {
  render() {
    return (
      <div className="cards">
        <h2 className="cards__title">Card's list:</h2>
        <div className="cards__container">
          {products.map((productItem) => (
            <CardItem key={productItem.id} product={productItem} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardsList;
