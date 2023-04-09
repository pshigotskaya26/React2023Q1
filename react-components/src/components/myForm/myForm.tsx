import React, { useState, Fragment } from 'react';
import './index.css';
import CardsListFrom from '../cardListForm/cardListForm';
import { Form } from '../form/form';
import { IProductForm } from '../../types/interfaces/IProductForm';

const MyForm = () => {
  const [cardsAr, setCardsAr] = useState<IProductForm[]>([]);

  const updateData = (CardsFromForm: IProductForm[]) => {
    setCardsAr(CardsFromForm);
  };

  return (
    <Fragment>
      <Form cards={cardsAr} updateData={updateData} />
      <CardsListFrom cards={cardsAr} />
    </Fragment>
  );
};

export default MyForm;
