import Header from '../../components/header/header';
import React from 'react';
import './index.css';
import MyForm from '../../components/myForm/myForm';

const Form = () => {
  return (
    <section className="form">
      <Header />
      <div className="container">
        <h1 className="form__title">Form</h1>
        <MyForm />
      </div>
    </section>
  );
};

export default Form;
