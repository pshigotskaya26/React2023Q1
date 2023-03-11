import React, { Component } from 'react';
import './index.css';

class CardItem extends Component {
  render() {
    return (
      <div className="card-item">
        <div className="card-item__image">
          <img
            className="card-image"
            src="https://i.dummyjson.com/data/products/78/thumbnail.jpg"
            alt=""
          />
        </div>
        <div className="card-item__content">
          <h3 className="card-item__title">Title of the product</h3>
          <div className="card-item__description">
            <div className="card-info card-category">
              <span className="card-text card-category__text">Category: </span>
              <span className="card-value card-category__value">groceries</span>
            </div>

            <div className="card-info card-brand">
              <span className="card-text card-brand__text">Brand: </span>
              <span className="card-value card-brand__value">Saaf & Khaas</span>
            </div>

            <div className="card-info">
              <div className="card-price">
                <span className="card-price__value">19</span> $
              </div>
              <div className="card-raiting">4.69</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardItem;
