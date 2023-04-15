import React, { Fragment } from 'react';
import './index.css';
import CardsListFrom from '../cardListForm/cardListForm';
import { Form } from '../form/form';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const MyForm = () => {
  const { formSubmission } = useTypedSelector((state) => state);

  return (
    <Fragment>
      <Form cards={formSubmission} />
      <CardsListFrom cards={formSubmission} />
    </Fragment>
  );
};

export default MyForm;
