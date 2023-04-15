import React, { useState, Fragment } from 'react';
import './index.css';
import CardsListFrom from '../cardListForm/cardListForm';
import { Form } from '../form/form';
import { IProductForm } from '../../types/interfaces/IProductForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const MyForm = () => {
  //const [cardsAr, setCardsAr] = useState<IProductForm[]>([]);
  const { formSubmission } = useTypedSelector((state) => state);

  //   const updateData = (CardsFromForm: IProductForm[]) => {
  //     setCardsAr(CardsFromForm);
  //   };

  //   return (
  //     <Fragment>
  //       <Form cards={formSubmission} updateData={updateData} />
  //       <CardsListFrom cards={formSubmission} />
  //     </Fragment>
  //   );

  return (
    <Fragment>
      <Form cards={formSubmission} />
      <CardsListFrom cards={formSubmission} />
    </Fragment>
  );
};

export default MyForm;
