import CardsListFrom from '../cardListForm/cardListForm';
import React, { Component, Fragment } from 'react';
import CardMaleEnum from '../../types/enums/cardMaleEnum';
import './index.css';

class MyForm extends Component {
  state = {
    cardsArray: [],
    inputName: '',
    inputBirthday: '',
    selectCountry: '',
    checkboxConsent: '',
    radioMale: '',
    fileImage: '',
  };

  inputNameRef = React.createRef<HTMLInputElement>();
  inputBirthdayRef = React.createRef<HTMLInputElement>();
  selectCountryRef = React.createRef<HTMLSelectElement>();
  checkboxConsentRef = React.createRef<HTMLInputElement>();
  radioMaleFirstRef = React.createRef<HTMLInputElement>();
  radioMaleSecondRef = React.createRef<HTMLInputElement>();
  inputImageRef = React.createRef<HTMLInputElement>();

  handleInputChange = () => {
    this.setState({
      inputName: this.inputNameRef.current?.value,
      inputBirthday: this.inputBirthdayRef.current?.value,
      selectCountry: this.selectCountryRef.current?.value,
      radioMale: this.radioMaleFirstRef.current?.checked
        ? this.radioMaleFirstRef.current?.value
        : this.radioMaleSecondRef.current?.value,
      fileImage: this.inputImageRef.current?.files
        ? this.inputImageRef.current?.files['0'].name
        : '',
    });
  };

  handleInputClick = () => {
    this.setState({
      checkboxConsent: this.checkboxConsentRef.current?.checked,
    });
  };

  render() {
    console.log('this.inputName', this.state.inputName);
    console.log('this.inputBirthday', this.state.inputBirthday);
    console.log('this.selectCountry', this.state.selectCountry);
    console.log('this.checkboxConsent', this.state.checkboxConsent);
    console.log('this.radioMale', this.state.radioMale);
    console.log('fileImage: -------- ', this.state.fileImage);

    const {
      cardsArray,
      inputName,
      inputBirthday,
      selectCountry,
      checkboxConsent,
      radioMale,
      fileImage,
    } = this.state;

    return (
      <Fragment>
        <form className="my-form">
          <div className="my-form__content">
            <div className="form-group form-group__first">
              <div className="form-item">
                <label htmlFor="name">Name:</label>
                <input
                  ref={this.inputNameRef}
                  id="name"
                  type="text"
                  className="name__input"
                  name="name"
                  placeholder="enter name"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="birthday">Birthday:</label>
                <input
                  ref={this.inputBirthdayRef}
                  id="birthday"
                  type="date"
                  className="birthday__input"
                  name="Birthday"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-item">
                <label htmlFor="country">Country:</label>
                <select
                  ref={this.selectCountryRef}
                  onChange={this.handleInputChange}
                  className="country__select"
                >
                  <option value="USA">USA</option>
                  <option value="Italy">Italy</option>
                </select>
              </div>
            </div>
            <div className="form-group form-group__second">
              <div className="form-item">
                <label htmlFor="consent" className="consent__label">
                  <input
                    ref={this.checkboxConsentRef}
                    id="consent"
                    className="consent__checkbox"
                    type="checkbox"
                    onClick={this.handleInputClick}
                  />
                  I consent to my personal data
                </label>
              </div>
              <div className="form-item">
                <label htmlFor="switcher" className="switcher__label">
                  Male/Female:
                </label>
                <fieldset id="switcher-group" className="switcher">
                  {/* <label className="switcher-group-item"> */}
                  <input
                    ref={this.radioMaleFirstRef}
                    type="radio"
                    name="switcher"
                    value={CardMaleEnum.MALE}
                    onChange={this.handleInputChange}
                  />
                  {CardMaleEnum.MALE}
                  {/* </label> */}
                  {/* <label className="switcher-group-item"> */}
                  <input
                    ref={this.radioMaleSecondRef}
                    type="radio"
                    name="switcher"
                    value={CardMaleEnum.FEMALE}
                    onChange={this.handleInputChange}
                  />
                  {CardMaleEnum.FEMALE}
                  {/* </label> */}
                </fieldset>
              </div>
              <div className="form-item">
                <label htmlFor="image" className="image__label">
                  Choose image:
                </label>
                <input
                  ref={this.inputImageRef}
                  type="file"
                  className="image__input"
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="my-form__button">
            <button className="btn btn-submit">Submit</button>
          </div>
        </form>
        <CardsListFrom cards={cardsArray} />
      </Fragment>
    );
  }
}

export default MyForm;
