import Header from '../../components/header/header';
import React, { Component } from 'react';
import './index.css';
import MyForm from '../../components/myForm/myForm';

class Form extends Component {
  render() {
    return (
      <section className="form">
        <Header />
        <div className="container">
          <h1 className="form__title">Form</h1>
          <MyForm />
        </div>
      </section>
    );
  }
}

export default Form;
