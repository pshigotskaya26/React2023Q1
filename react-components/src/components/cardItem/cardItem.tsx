import React, { Component } from 'react';
import './index.css';
import { IProduct } from '../../types/interfaces/IProduct';
import PropTypes from 'prop-types';

interface CardItemProps {
  product: IProduct;
}

class CardItem extends Component<CardItemProps> {
  constructor(props: CardItemProps) {
    super(props);
  }
  render() {
    return (
      <div className="card-item">
        <div className="card-item__image">
          <img
            className="card-image"
            src={`${this.props.product.thumbnail}`}
            alt={`${this.props.product.title}`}
          />
        </div>
        <div className="card-item__content">
          <h3 className="card-item__title">{this.props.product.title}</h3>
          <div className="card-item__description">
            <div className="card-info card-category">
              <span data-testid="card-category" className="card-text card-category__text">
                Category:
              </span>
              <span className="card-value card-category__value">{this.props.product.category}</span>
            </div>

            <div className="card-info card-brand">
              <span data-testid="card-brand" className="card-text card-brand__text">
                Brand:
              </span>
              <span className="card-value card-brand__value">{this.props.product.brand}</span>
            </div>

            <div className="card-info">
              <div className="card-price">
                <span className="card-price__value">{this.props.product.price}</span> $
              </div>
              <div data-testid="card-raiting" className="card-raiting">
                {this.props.product.rating}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
