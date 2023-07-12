import React, { Fragment } from 'react';
import './index.css';
import CardsListFrom from '../cardListForm/cardListForm';
import { Form } from '../form/form';
import { useTypedSelector } from '../../hooks/useTypedSelector';
const MyForm = () => {
    const { formSubmission } = useTypedSelector((state) => state);
    return (React.createElement(Fragment, null,
        React.createElement(Form, { cards: formSubmission }),
        React.createElement(CardsListFrom, { cards: formSubmission })));
};
export default MyForm;
