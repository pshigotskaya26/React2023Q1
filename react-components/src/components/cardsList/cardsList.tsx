import React from 'react';
import './index.css';
import CardItem from '../../components/cardItem/cardItem';
import { ICharacter } from '../../types/interfaces/ICharacter';

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
