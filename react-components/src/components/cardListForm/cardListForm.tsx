import React, { Component } from 'react';
import './index.css';
import CardItemForm from '../cardItemForm/cardItemForm';
import { IProductForm } from 'types/interfaces/IProductForm';

interface CardsListFormProps {
  cards: IProductForm[];
}

class CardsListForm extends Component<CardsListFormProps> {
  constructor(props: CardsListFormProps) {
    super(props);
  }
  render() {
    return (
      <div className="cards">
        <h2 className="cards__title">Card's list:</h2>
        <div data-testid="cards__container" className="cards__container">
          {this.props.cards.map((cardItemForm) => (
            <CardItemForm key={cardItemForm.id} product={cardItemForm} />
          ))}
        </div>
      </div>
    );
  }
}

export default CardsListForm;
