import React, { Component } from 'react';
import './index.css';

import CardItem from '../../components/cardItem/cardItem';

class CardsList extends Component {
  render() {
    return (
      <div className="cards">
        <h2 className="cards__title">Card's list:</h2>
        <div className="cards__container">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />

          <CardItem />
        </div>
      </div>
    );
  }
}

export default CardsList;
