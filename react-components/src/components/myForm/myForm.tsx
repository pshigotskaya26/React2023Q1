import Header from '../../components/header/header';
import React, { Component } from 'react';
import './index.css';

class MyForm extends Component {
  render() {
    return (
      <form className="my-form">
        <div className="my-form__content">
          <div className="form-group form-group__first">
            <div className="form-item">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                className="name__input"
                name="name"
                placeholder="enter name"
              />
            </div>

            <div className="form-item">
              <label htmlFor="birthday">Birthday:</label>
              <input id="birthday" type="date" className="birthday__input" name="Birthday" />
            </div>

            <div className="form-item">
              <label htmlFor="country">Country:</label>
              <select className="country__select">
                <option value="USA">USA</option>
                <option value="Italy">Italy</option>
              </select>
            </div>
          </div>
          <div className="form-group form-group__second">
            <div className="form-item">
              <label htmlFor="consent" className="consent__label">
                <input id="consent" className="consent__checkbox" type="checkbox" required />I
                consent to my personal data
              </label>
            </div>
            <div className="form-item">
              <label htmlFor="switcher" className="switcher__label">
                Male/Female:
              </label>
              <fieldset id="switcher-group" className="switcher">
                <label className="switcher-group-item">
                  <input type="radio" name="switcher-group" value="male" />
                  male
                </label>
                <label className="switcher-group-item">
                  <input type="radio" name="switcher-group" value="female" checked />
                  female
                </label>
              </fieldset>
            </div>
            <div className="form-item">
              <label htmlFor="image" className="image__label">
                Choose image:
              </label>
              <input type="file" className="image__input" />
            </div>
          </div>
        </div>
        <div className="my-form__button">
          <button className="btn btn-submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default MyForm;
