import CardsListFrom from '../cardListForm/cardListForm';
import ErrorMessage from '../ErrorMessage/errorMessage';
import React, { Component, Fragment } from 'react';
import CardMaleEnum from '../../types/enums/cardMaleEnum';
import cardIsConsentEnum from '../../types/enums/cardIsConsentEnum';
import CardCountryEnum from '../../types/enums/cardCountryEnum';
import { IProductForm } from '../../types/interfaces/IProductForm';
import { IDataForm } from '../../types/interfaces/IDataForm';
import './index.css';

class MyForm extends Component {
  baseCardsArray: IProductForm[] = [];

  state = {
    cardsAr: this.baseCardsArray,
    formErrors: {
      name: '',
      birthday: '',
      country: '',
      isConsent: '',
      male: '',
      thumbnail: '',
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

    let fileIMG: string = '';
    if (this.inputImageRef.current && this.inputImageRef.current.files?.length === 0) {
      fileIMG = '';
      //       console.log('-----: ', typeof fileIMG);
    } else if (
      this.inputImageRef.current &&
      this.inputImageRef.current.files &&
      this.inputImageRef.current.files?.length !== 0
    ) {
      fileIMG = URL.createObjectURL(this.inputImageRef.current.files[0]);
    }
    const dataFromForm: IDataForm = {
      cardsArray: this.state.cardsAr,
      inputName: this.inputNameRef.current?.value,
      inputBirthday: this.inputBirthdayRef.current?.value,
      selectCountry: this.selectCountryRef.current?.value,
      checkboxConsent: this.checkboxConsentRef.current?.checked
        ? cardIsConsentEnum.AGREE
        : cardIsConsentEnum.DISAGREE,
      radioMale: this.radioMaleFirstRef.current?.checked
        ? this.radioMaleFirstRef.current?.value
        : this.radioMaleSecondRef.current?.checked
        ? this.radioMaleSecondRef.current?.value
        : '',
      fileImage: fileIMG,
      //       fileImage: this.inputImageRef?.current?.files
      //         ? URL.createObjectURL(this.inputImageRef.current.files[0])
      //         : '',
    };

    this.validateFields(dataFromForm);

    /*
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
    */
  };

  validateFields = (formData: IDataForm) => {
    let {
      formErrors,
      nameValid,
      birthdayValid,
      countryValid,
      isConsentValid,
      maleValid,
      thumbnailValid,
    } = this.state;

    //validate inputName field
    if (formData.inputName && /^[A-ZА-Я]{1}[а-яА-Яa-zA-Z]{2,}$/.test(formData.inputName) === true) {
      nameValid = true;
      formErrors.name = '';
    } else {
      nameValid = false;
      formErrors.name =
        "Name is invalid: first letter must be in Upper case and name's length must be >=3";
    }

    //validate birthday field
    if (formData.inputBirthday && Date.parse(formData.inputBirthday) <= Date.now()) {
      birthdayValid = true;
      formErrors.birthday = '';
    } else if (formData.inputBirthday && Date.parse(formData.inputBirthday) > Date.now()) {
      birthdayValid = false;
      formErrors.birthday = "Birthday must be less now' date";
    } else {
      birthdayValid = false;
      formErrors.birthday = 'Birthday is not choosen';
    }

    //validate country field
    if (formData.selectCountry) {
      countryValid = true;
      formErrors.country = '';
    } else {
      countryValid = false;
      formErrors.country = 'Country is not choosen';
    }

    //validate agree/disagree checkbox
    if (formData.checkboxConsent && formData.checkboxConsent === cardIsConsentEnum.AGREE) {
      isConsentValid = true;
      formErrors.isConsent = '';
    } else {
      isConsentValid = false;
      formErrors.isConsent = 'Consent is not choosen';
    }

    //validate radioMale field
    if (
      formData.radioMale &&
      (formData.radioMale === CardMaleEnum.MALE || formData.radioMale === CardMaleEnum.FEMALE)
    ) {
      maleValid = true;
      formErrors.male = '';
    } else if (!formData.radioMale) {
      maleValid = false;
      formErrors.male = 'Male is not choosen';
    }

    //validate thumbnail image
    if (formData.fileImage) {
      thumbnailValid = true;
      formErrors.thumbnail = '';
    } else {
      thumbnailValid = false;
      formErrors.thumbnail = 'Image is not choosen';
    }

    this.setState({
      nameValid: nameValid,
      birthdayValid: birthdayValid,
      countryValid: countryValid,
      isConsentValid: isConsentValid,
      maleValid: maleValid,
      thumbnailValid: thumbnailValid,
      formErrors: formErrors,
    });

    if (this.state.formValid === false) {
      return false;
    }
  };

  render() {
    console.log('this.state : ', this.state);
    console.log('this.inputImageRef: ', this.inputImageRef);
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
                  <option value="" hidden>
                    No selected
                  </option>
                  <option value={CardCountryEnum.USA}>{CardCountryEnum.USA}</option>
                  <option value={CardCountryEnum.BELARUS}>{CardCountryEnum.BELARUS}</option>
                  <option value={CardCountryEnum.ITALY}>{CardCountryEnum.ITALY}</option>
                  <option value={CardCountryEnum.RUSSIA}>{CardCountryEnum.RUSSIA}</option>
                  <option value={CardCountryEnum.POLAND}>{CardCountryEnum.POLAND}</option>
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
                <input
                  ref={this.inputImageRef}
                  type="file"
                  accept="image/*"
                  className="image__input"
                />
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
