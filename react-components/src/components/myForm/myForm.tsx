import React, { useState, Fragment } from 'react';
import './index.css';
import CardsListFrom from '../cardListForm/cardListForm';
import { Form } from '../form/form';
import { IProductForm } from '../../types/interfaces/IProductForm';
import { IStateForm } from '../../types/interfaces/IStateForm';
import { IFormErrors } from '../../types/interfaces/IFormErrors';

const MyForm = () => {
  const [cardsAr, setCardsAr] = useState<IProductForm[]>([]);

  const updateData = (CardsFromForm: IProductForm[]) => {
    setCardsAr(CardsFromForm);
  };

  //   const updateData = (value: IStateForm) => {
  //     this.setState({
  //       cardsAr: value.cardsAr,
  //       formErrors: {
  //         name: value.formErrors.name,
  //         birthday: value.formErrors.birthday,
  //         country: value.formErrors.country,
  //         isConsent: value.formErrors.isConsent,
  //         male: value.formErrors.male,
  //         thumbnail: value.formErrors.thumbnail,
  //       },
  //       nameValid: value.nameValid,
  //       birthdayValid: value.birthdayValid,
  //       countryValid: value.countryValid,
  //       isConsentValid: value.isConsentValid,
  //       maleValid: value.maleValid,
  //       thumbnailValid: value.thumbnailValid,
  //       formValid: value.formValid,
  //     });
  //   };
  console.log('cardsAr MYFORM: ', cardsAr);
  return (
    <Fragment>
      <Form cards={cardsAr} updateData={updateData} />
      <CardsListFrom cards={cardsAr} />
    </Fragment>
  );
};

/*
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

  updateData = (value: IStateForm) => {
    this.setState({
      cardsAr: value.cardsAr,
      formErrors: {
        name: value.formErrors.name,
        birthday: value.formErrors.birthday,
        country: value.formErrors.country,
        isConsent: value.formErrors.isConsent,
        male: value.formErrors.male,
        thumbnail: value.formErrors.thumbnail,
      },
      nameValid: value.nameValid,
      birthdayValid: value.birthdayValid,
      countryValid: value.countryValid,
      isConsentValid: value.isConsentValid,
      maleValid: value.maleValid,
      thumbnailValid: value.thumbnailValid,
      formValid: value.formValid,
    });
  };

  render() {
    return (
      <Fragment>
        <Form
          forwardRefFrom={this.formRef}
          forwardRefInputName={this.inputNameRef}
          forwardRefInputBirthday={this.inputBirthdayRef}
          forwardRefSelectCountry={this.selectCountryRef}
          forwardRefCheckboxConsent={this.checkboxConsentRef}
          forwardRefInputRadioMaleFirst={this.radioMaleFirstRef}
          forwardRefInputRadioMaleSecond={this.radioMaleSecondRef}
          forwardRefInputFileImage={this.inputImageRef}
          passedState={this.state}
          updateData={this.updateData}
        />
        <CardsListFrom formValidValue={this.state.formValid} cards={this.state.cardsAr} />
      </Fragment>
    );
  }
}
*/
export default MyForm;
