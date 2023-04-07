import React from 'react';
import './index.css';
import CardItem from '../../components/cardItem/cardItem';
import productsData from '../../data/products.json';
import { IProduct } from 'types/interfaces/IProduct';
import { ICharacter } from '../../types/interfaces/ICharacter';

//const products: IProduct[] = productsData;

interface CardsListProps {
  apiData: ICharacter[] | undefined;
}

const CardsList: React.FC<CardsListProps> = (props) => {
  return (
    <div className="cards">
      <h2 className="cards__title">Cards list:</h2>
      <div data-testid="cards__container" className="cards__container">
        {props.apiData &&
          props.apiData.map((productItem) => (
            <CardItem key={productItem.id} product={productItem} />
          ))}
      </div>
    </div>
  );
};

export default CardsList;
