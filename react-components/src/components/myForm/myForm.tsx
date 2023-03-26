import React, { Component, Fragment } from 'react';
import './index.css';
import CardsListFrom from '../cardListForm/cardListForm';
import InputName from '../inputName/inputName';
import InputBirthday from '../inputBirthday/inputBirthday';
import SelectCountry from '../selectCountry/selectCountry';
import CheckboxConsent from '../checkboxConsent/checkboxConsent';
import InputRadioMale from '../inputRadioMale/inputRadioMale';
import InputFileImage from '../inputFileImage/inputFileImage';
import CardMaleEnum from '../../types/enums/cardMaleEnum';
import cardIsConsentEnum from '../../types/enums/cardIsConsentEnum';
import { IProductForm } from '../../types/interfaces/IProductForm';
import { IDataForm } from '../../types/interfaces/IDataForm';

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

  formRef = React.createRef<HTMLFormElement>();
  inputNameRef = React.createRef<HTMLInputElement>();
  inputBirthdayRef = React.createRef<HTMLInputElement>();
  selectCountryRef = React.createRef<HTMLSelectElement>();
  checkboxConsentRef = React.createRef<HTMLInputElement>();
  radioMaleFirstRef = React.createRef<HTMLInputElement>();
  radioMaleSecondRef = React.createRef<HTMLInputElement>();
  inputImageRef = React.createRef<HTMLInputElement>();

  handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    let fileIMG: string = '';

    if (this.inputImageRef.current && this.inputImageRef.current.files?.length === 0) {
      fileIMG = '';
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
    };

    await this.validateFields(dataFromForm);
    await this.validateForm();
    await this.createCard(dataFromForm);
    await this.ressetForm();
    //await this.showMessage();
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
  };

  validateForm = () => {
    let {
      nameValid,
      birthdayValid,
      countryValid,
      isConsentValid,
      maleValid,
      thumbnailValid,
      formValid,
    } = this.state;

    formValid =
      nameValid && birthdayValid && countryValid && isConsentValid && maleValid && thumbnailValid;

    if (formValid) {
      this.setState({
        formValid: formValid,
      });
    } else {
      this.setState({
        formValid: false,
      });
    }
  };

  createCard = (formData: IDataForm) => {
    let { formValid } = this.state;

    if (formValid) {
      const {
        cardsArray,
        inputName,
        inputBirthday,
        selectCountry,
        checkboxConsent,
        radioMale,
        fileImage,
      } = formData;

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
    }
  };

  ressetForm = () => {
    let { formValid } = this.state;

    if (formValid) {
      this.formRef.current?.reset();
    }
  };

  render() {
    const { name, birthday, country, isConsent, male, thumbnail } = this.state.formErrors;
    return (
      <Fragment>
        <form className="my-form" onSubmit={this.handleSubmit} ref={this.formRef}>
          <div className="my-form__content">
            <div className="form-group form-group__first">
              <div className="form-item">
                <InputName forwardRef={this.inputNameRef} name={name} />
              </div>
              <div className="form-item">
                <InputBirthday forwardRef={this.inputBirthdayRef} name={birthday} />
              </div>
              <div className="form-item">
                <SelectCountry forwardRef={this.selectCountryRef} name={country} />
              </div>
            </div>
            <div className="form-group form-group__second">
              <div className="form-item">
                <CheckboxConsent forwardRef={this.checkboxConsentRef} name={isConsent} />
              </div>
              <div className="form-item">
                <InputRadioMale
                  forwardRefFirst={this.radioMaleFirstRef}
                  forwardRefSecond={this.radioMaleSecondRef}
                  name={male}
                />
              </div>
              <div className="form-item">
                <InputFileImage forwardRef={this.inputImageRef} name={thumbnail} />
              </div>
            </div>
          </div>
          <div className="my-form__button">
            <button className="btn btn-submit">Submit</button>
          </div>
        </form>
        <CardsListFrom formValidValue={this.state.formValid} cards={this.state.cardsAr} />
      </Fragment>
    );
  }
}

export default MyForm;
