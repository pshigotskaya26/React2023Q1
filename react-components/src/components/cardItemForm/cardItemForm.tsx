import React, { Component } from 'react';
import './index.css';
import { IProductForm } from '../../types/interfaces/IProductForm';

interface CardItemFormProps {
  product: IProductForm;
}

class CardItemForm extends Component<CardItemFormProps> {
  constructor(props: CardItemFormProps) {
    super(props);
  }
  render() {
    return (
      <div className="card-item">
        <div className="card-item__image">
          <img
            className="card-image"
            src={`${this.props.product.thumbnail}`}
            alt={`${this.props.product.name}`}
          />
        </div>
        <div className="card-item__content">
          <h3 className="card-item__name">{this.props.product.name}</h3>
          <div className="card-item__description">
            <div className="card-info card-birthday">
              <span data-testid="card-birthday" className="card-text card-birthday__text">
                Birthday:
              </span>
              <span className="card-value card-birthday__value">{this.props.product.birthday}</span>
            </div>
            <div className="card-info card-country">
              <span data-testid="card-country" className="card-text card-country__text">
                Country:
              </span>
              <span className="card-value card-country__value">{this.props.product.country}</span>
            </div>
            <div className="card-info card-male">
              <span data-testid="card-male" className="card-text card-male__text">
                Male:
              </span>
              <span className="card-value card-male__value">{this.props.product.male}</span>
            </div>
            <div className="card-info card-consent">
              <span data-testid="card-consent" className="card-text card-consent__text">
                Is consent:
              </span>
              <span className="card-value card-consent__value">{this.props.product.isConsent}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItemForm;
