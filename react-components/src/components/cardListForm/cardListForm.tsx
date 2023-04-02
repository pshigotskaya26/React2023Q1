import React from 'react';
import './index.css';
import CardItemForm from '../cardItemForm/cardItemForm';
//import ConfirmMessage from '../confirmMessage/confirmMessage';
import { IProductForm } from 'types/interfaces/IProductForm';

interface CardsListFormProps {
  cards: IProductForm[];
}

const CardsListForm: React.FC<CardsListFormProps> = (props) => {
  return (
    <div className="cards">
      <h2 className="cards__title">Cards list:</h2>
      {/* {this.props.formValidValue && <ConfirmMessage />} */}
      <div data-testid="cards__container" className="cards__container">
        {props.cards.map((cardItemForm) => (
          <CardItemForm key={cardItemForm.id} product={cardItemForm} />
        ))}
      </div>
    </div>
  );
};

export default CardsListForm;
