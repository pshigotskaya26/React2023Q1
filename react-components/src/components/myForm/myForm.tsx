import CardsListFrom from '../cardListForm/cardListForm';
import ErrorMessage from '../ErrorMessage/errorMessage';
import React, { Component, Fragment } from 'react';
import CardMaleEnum from '../../types/enums/cardMaleEnum';
import cardIsConsentEnum from '../../types/enums/cardIsConsentEnum';
import { IProductForm } from '../../types/interfaces/IProductForm';
import './index.css';

class MyForm extends Component {
  baseCardsArray: IProductForm[] = [];

  state = {
    cardsAr: this.baseCardsArray,
    formErrors: {
      name: '1',
      birthday: '1',
      country: '1',
      isConsent: '1',
      male: '1',
      thumbnail: '1',
    },
    nameValid: false,
    birthdayValid: false,
    countryValid: false,
    isConsentValid: false,
    maleValid: false,
    thumbnailValid: false,
    formValid: false,
  };

  inputNameRef = React.createRef<HTMLInputElement>();
  inputBirthdayRef = React.createRef<HTMLInputElement>();
  selectCountryRef = React.createRef<HTMLSelectElement>();
  checkboxConsentRef = React.createRef<HTMLInputElement>();
  radioMaleFirstRef = React.createRef<HTMLInputElement>();
  radioMaleSecondRef = React.createRef<HTMLInputElement>();
  inputImageRef = React.createRef<HTMLInputElement>();

  handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dataFromForm = {
      cardsArray: this.state.cardsAr,
      inputName: this.inputNameRef.current?.value,
      inputBirthday: this.inputBirthdayRef.current?.value,
      selectCountry: this.selectCountryRef.current?.value,
      checkboxConsent: this.checkboxConsentRef.current?.checked
        ? cardIsConsentEnum.AGREE
        : cardIsConsentEnum.DISAGREE,
      radioMale: this.radioMaleFirstRef.current?.checked
        ? this.radioMaleFirstRef.current?.value
        : this.radioMaleSecondRef.current?.value,
      fileImage: this.inputImageRef?.current?.files
        ? URL.createObjectURL(this.inputImageRef.current?.files[0])
        : '',
    };

    const {
      cardsArray,
      inputName,
      inputBirthday,
      selectCountry,
      checkboxConsent,
      radioMale,
      fileImage,
    } = dataFromForm;

    const card: IProductForm = {
      id: cardsArray.length + 1,
      name: inputName,
      birthday: inputBirthday,
      country: selectCountry,
      isConsent: checkboxConsent,
      male: radioMale,
      thumbnail: fileImage,
    };

    cardsArray.push(card);

    this.setState({
      cardsAr: cardsArray,
    });
  };

  validateFields = (objectCard: IProductForm) => {};

  render() {
    const { name, birthday, country, isConsent, male, thumbnail } = this.state.formErrors;
    return (
      <Fragment>
        <form className="my-form" onSubmit={this.handleSubmit}>
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
                />
                {name && <ErrorMessage errorMessage={name} />}
              </div>
              <div className="form-item">
                <label htmlFor="birthday">Birthday:</label>
                <input
                  ref={this.inputBirthdayRef}
                  id="birthday"
                  type="date"
                  className="birthday__input"
                  name="Birthday"
                />
                {birthday && <ErrorMessage errorMessage={birthday} />}
              </div>
              <div className="form-item">
                <label htmlFor="country">Country:</label>
                <select ref={this.selectCountryRef} className="country__select">
                  <option value="USA">USA</option>
                  <option value="Italy">Italy</option>
                </select>
                {country && <ErrorMessage errorMessage={country} />}
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
                  />
                  I consent to my personal data
                </label>
                {isConsent && <ErrorMessage errorMessage={isConsent} />}
              </div>
              <div className="form-item">
                <label htmlFor="switcher" className="switcher__label">
                  Male/Female:
                </label>
                <fieldset id="switcher-group" className="switcher">
                  <label className="switcher-group-item">
                    <input
                      ref={this.radioMaleFirstRef}
                      type="radio"
                      name="switcher"
                      value={CardMaleEnum.MALE}
                    />
                    {CardMaleEnum.MALE}
                  </label>
                  <label className="switcher-group-item">
                    <input
                      ref={this.radioMaleSecondRef}
                      type="radio"
                      name="switcher"
                      value={CardMaleEnum.FEMALE}
                    />
                    {CardMaleEnum.FEMALE}
                  </label>
                </fieldset>
                {male && <ErrorMessage errorMessage={male} />}
              </div>
              <div className="form-item">
                <label htmlFor="image" className="image__label">
                  Choose image:
                </label>
                <input ref={this.inputImageRef} type="file" className="image__input" />
                {thumbnail && <ErrorMessage errorMessage={thumbnail} />}
              </div>
            </div>
          </div>
          <div className="my-form__button">
            <button className="btn btn-submit">Submit</button>
          </div>
        </form>
        <CardsListFrom cards={this.state.cardsAr} />
      </Fragment>
    );
  }
}

export default MyForm;
