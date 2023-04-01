import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './index.css';
import InputName from '../inputName/inputName';
import InputBirthday from '../inputBirthday/inputBirthday';
import SelectCountry from '../selectCountry/selectCountry';
import CheckboxConsent from '../checkboxConsent/checkboxConsent';
import InputRadioMale from '../inputRadioMale/inputRadioMale';
import InputFileImage from '../inputFileImage/inputFileImage';
import ErrorMessage from '../ErrorMessage/errorMessage';

import { IStateForm } from '../../types/interfaces/IStateForm';
import { IDataForm } from '../../types/interfaces/IDataForm';
import { IProductForm } from '../../types/interfaces/IProductForm';
import cardIsConsentEnum from '../../types/enums/cardIsConsentEnum';
import CardMaleEnum from '../../types/enums/cardMaleEnum';
import CardCountryEnum from '../../types/enums/cardCountryEnum';

export interface FormInputs {
  inputName: string;
  inputBirthday: string;
  selectCountry: string;
  inputRadioMale: string;
  checkboxConsent: string;
  inputFileImage: FileList;
}

interface FormProps {
  cards: IProductForm[];
}

export const Form: React.FC<FormProps> = (props) => {
  console.log('props: ', props.cards);
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm<FormInputs>({
    reValidateMode: 'onSubmit',
  });

  const [formCardsAr, setFormCardsAr] = useState<IProductForm[]>(props.cards);
  const [inputName, setInputName] = useState<string>('');
  const [inputBirthday, setInputBirthday] = useState<string>('');
  const [selectCountry, setSelectCountry] = useState<string>('');
  const [checkboxConsent, setCheckboxConsent] = useState<string>('');
  const [inputRadioMale, setInputRadioMale] = useState<string>('');
  const [inputFileImage, setInputFileImage] = useState<string>('');

  const onSubmit = (data: FormInputs) => {
    console.log('date in submit: ', data);
    data.inputName ? setInputName(data.inputName) : setInputName('');
    data.inputBirthday ? setInputBirthday(data.inputBirthday) : setInputBirthday('');
    data.selectCountry ? setSelectCountry(data.selectCountry) : setSelectCountry('');
    data.checkboxConsent ? setCheckboxConsent(data.checkboxConsent) : setCheckboxConsent('');
    data.inputRadioMale ? setInputRadioMale(data.inputRadioMale) : setInputRadioMale('');
    data.inputFileImage
      ? setInputFileImage(URL.createObjectURL(data.inputFileImage[0]))
      : setInputFileImage('');

    //     isSubmitSuccessful =
    //       data.checkboxConsent &&
    //       data.inputBirthday &&
    //       data.inputFileImage &&
    //       data.inputName &&
    //       data.inputRadioMale &&
    //       data.selectCountry;
  };
  console.log('inputName: ', inputName);
  console.log('inputBirthday: ', inputBirthday);
  console.log('selectCountry: ', selectCountry);
  console.log('checkboxConsent: ', checkboxConsent);
  console.log('inputRadioMale: ', inputRadioMale);
  console.log('inputFileImage: ', inputFileImage);
  //   useEffect(() => {
  //     if (isSubmitSuccessful) {
  //       console.log('reset in useeffect: ');
  //       reset();
  //     }
  //   }, [reset, isSubmitSuccessful]);

  return (
    <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="my-form__content">
        <div className="form-group form-group__first">
          {/* <div className="form-item">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              className="name__input"
              placeholder="enter name"
              data-testid="name__input"
              {...register('inputName', {
                pattern: {
                  value: /^[A-ZА-Я]{1}[а-яА-Яa-zA-Z]{2,}$/,
                  message:
                    "Name is invalid: first letter must be in Upper case and name's length must be >=3", // JS only: <p>error message</p> TS only support string
                },
                required:
                  'Name is invalid: first letter must be in Upper case and name"s length must be >=3',
              })}
            />
            {errors.inputName?.message && <ErrorMessage errorMessage={errors.inputName.message} />}
          </div> */}

          <div className="form-item">
            <InputName registerAttr={register} errorAttr={errors} />
          </div>

          <div className="form-item">
            <InputBirthday registerAttr={register} errorAttr={errors} />
            {/* <label htmlFor="birthday">Birthday:</label>
            <input
              id="birthday"
              type="date"
              className="birthday__input"
              {...register('inputBirthday', {
                validate: (value) =>
                  Date.parse(value) <= Date.now() || "Birthday must be less now' date",
              })}
            />
            {errors.inputBirthday && <ErrorMessage errorMessage={errors.inputBirthday?.message} />} */}
          </div>
          <div className="form-item">
            <SelectCountry registerAttr={register} errorAttr={errors} />
            {/* <label htmlFor="country">Country:</label>
            <select
              className="country__select"
              {...register('selectCountry', {
                validate: (value) => {
                  if (value === '') {
                    return 'Country is not choosen';
                  } else {
                    return true;
                  }
                },
              })}
            >
              <option value="" hidden>
                No selected
              </option>
              <option value={CardCountryEnum.USA}>{CardCountryEnum.USA}</option>
              <option value={CardCountryEnum.BELARUS}>{CardCountryEnum.BELARUS}</option>
              <option value={CardCountryEnum.ITALY}>{CardCountryEnum.ITALY}</option>
              <option value={CardCountryEnum.RUSSIA}>{CardCountryEnum.RUSSIA}</option>
              <option value={CardCountryEnum.POLAND}>{CardCountryEnum.POLAND}</option>
            </select>
            {errors.selectCountry?.message && (
              <ErrorMessage errorMessage={errors.selectCountry.message} />
            )} */}
          </div>
        </div>
        <div className="form-group form-group__second">
          <div className="form-item">
            <CheckboxConsent registerAttr={register} errorAttr={errors} />
            {/* <label htmlFor="consent" className="consent__label">
              <input
                {...register('checkboxConsent', {
                  validate: (value) => {
                    if (value) {
                      return value;
                    } else if (!value) {
                      return 'Consent is not choosen';
                    }
                  },
                })}
                id="consent"
                className="consent__checkbox"
                type="checkbox"
              />
              I consent to my personal data
            </label>
            {errors.checkboxConsent?.message && (
              <ErrorMessage errorMessage={errors.checkboxConsent.message} />
            )} */}
          </div>
          <div className="form-item">
            <InputRadioMale registerAttr={register} errorAttr={errors} />
            {/* <label htmlFor="switcher" className="switcher__label">
              Male/Female:
            </label>
            <fieldset id="switcher-group" className="switcher">
              <label className="switcher-group-item">
                <input
                  {...register('inputRadioMale', {
                    validate: (value) => {
                      if (value && (value === CardMaleEnum.MALE || value === CardMaleEnum.FEMALE)) {
                        return true;
                      } else if (!value) {
                        return 'Male is not choosen';
                      }
                    },
                  })}
                  type="radio"
                  value={CardMaleEnum.MALE}
                />
                {CardMaleEnum.MALE}
              </label>
              <label className="switcher-group-item">
                <input
                  {...register('inputRadioMale', {
                    validate: (value) => {
                      if (value && (value === CardMaleEnum.MALE || value === CardMaleEnum.FEMALE)) {
                        return true;
                      } else if (!value) {
                        return 'Male is not choosen';
                      }
                    },
                  })}
                  type="radio"
                  value={CardMaleEnum.FEMALE}
                />
                {CardMaleEnum.FEMALE}
              </label>
            </fieldset>
            {errors.inputRadioMale?.message && (
              <ErrorMessage errorMessage={errors.inputRadioMale.message} />
            )} */}
          </div>
          <div className="form-item">
            <InputFileImage registerAttr={register} errorAttr={errors} />
            {/* <label htmlFor="image" className="image__label">
              Choose image:
            </label>
            <input
              {...register('inputFileImage', {
                validate: {
                  format: (files: FileList) =>
                    (files && files.length !== 0) || 'Image is not choosen',
                },
              })}
              type="file"
              accept="image/*"
              className="image__input"
            />
            {errors.inputFileImage?.message && (
              <ErrorMessage errorMessage={errors.inputFileImage.message} />
            )} */}
          </div>
        </div>
      </div>
      <div className="my-form__button">
        <button className="btn btn-submit">Submit</button>
      </div>
    </form>
  );
};

//export default Form;

/*
interface FormProps {
  //passedState: IStateForm;
  forwardRefFrom: React.RefObject<HTMLFormElement>;
  forwardRefInputName: React.RefObject<HTMLInputElement>;
  forwardRefInputBirthday: React.RefObject<HTMLInputElement>;
  forwardRefSelectCountry: React.RefObject<HTMLSelectElement>;
  forwardRefCheckboxConsent: React.RefObject<HTMLInputElement>;
  forwardRefInputRadioMaleFirst: React.RefObject<HTMLInputElement>;
  forwardRefInputRadioMaleSecond: React.RefObject<HTMLInputElement>;
  forwardRefInputFileImage: React.RefObject<HTMLInputElement>;
  //updateData: (value: IStateForm) => void;
}

class Form extends Component<FormProps> {
  state = this.props.passedState;
  constructor(props: FormProps) {
    super(props);
  }

  handleSubmit = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();

    let fileIMG = '';

    if (
      this.props.forwardRefInputFileImage.current &&
      this.props.forwardRefInputFileImage.current.files?.length === 0
    ) {
      fileIMG = '';
    } else if (
      this.props.forwardRefInputFileImage.current &&
      this.props.forwardRefInputFileImage.current.files &&
      this.props.forwardRefInputFileImage.current.files?.length !== 0
    ) {
      fileIMG = URL.createObjectURL(this.props.forwardRefInputFileImage.current.files[0]);
    }

    const dataFromForm: IDataForm = {
      cardsArray: this.state.cardsAr,
      inputName: this.props.forwardRefInputName.current?.value,
      inputBirthday: this.props.forwardRefInputBirthday.current?.value,
      selectCountry: this.props.forwardRefSelectCountry.current?.value,
      checkboxConsent: this.props.forwardRefCheckboxConsent.current?.checked
        ? cardIsConsentEnum.AGREE
        : cardIsConsentEnum.DISAGREE,
      radioMale: this.props.forwardRefInputRadioMaleFirst.current?.checked
        ? this.props.forwardRefInputRadioMaleFirst.current?.value
        : this.props.forwardRefInputRadioMaleSecond.current?.checked
        ? this.props.forwardRefInputRadioMaleSecond.current?.value
        : '',
      fileImage: fileIMG,
    };

    await this.validateFields(dataFromForm);
    await this.validateForm();
    await this.createCard(dataFromForm);
    await this.ressetForm();
  };

  validateFields = (formData: IDataForm) => {
    const formErrorsObj = {
      name: '',
      birthday: '',
      country: '',
      isConsent: '',
      male: '',
      thumbnail: '',
    };

    let nameValidValue: boolean = this.state.nameValid;
    let birthdayValidValue: boolean = this.state.birthdayValid;
    let countryValidValue: boolean = this.state.countryValid;
    let isConsentValidValue: boolean = this.state.isConsentValid;
    let thumbnailValidValue: boolean = this.state.thumbnailValid;
    let maleValidValue: boolean = this.state.maleValid;

    //validate inputName field
    if (formData.inputName && /^[A-ZА-Я]{1}[а-яА-Яa-zA-Z]{2,}$/.test(formData.inputName) === true) {
      nameValidValue = true;
      formErrorsObj.name = '';
    } else {
      nameValidValue = false;
      formErrorsObj.name =
        "Name is invalid: first letter must be in Upper case and name's length must be >=3";
    }

    //validate birthday field
    if (formData.inputBirthday && Date.parse(formData.inputBirthday) <= Date.now()) {
      birthdayValidValue = true;
      formErrorsObj.birthday = '';
    } else if (formData.inputBirthday && Date.parse(formData.inputBirthday) > Date.now()) {
      birthdayValidValue = false;
      formErrorsObj.birthday = "Birthday must be less now' date";
    } else {
      birthdayValidValue = false;
      formErrorsObj.birthday = 'Birthday is not choosen';
    }

    //validate country field
    if (formData.selectCountry) {
      countryValidValue = true;
      formErrorsObj.country = '';
    } else {
      countryValidValue = false;
      formErrorsObj.country = 'Country is not choosen';
    }

    //validate agree/disagree checkbox
    if (formData.checkboxConsent && formData.checkboxConsent === cardIsConsentEnum.AGREE) {
      isConsentValidValue = true;
      formErrorsObj.isConsent = '';
    } else {
      isConsentValidValue = false;
      formErrorsObj.isConsent = 'Consent is not choosen';
    }

    //validate radioMale field
    if (
      formData.radioMale &&
      (formData.radioMale === CardMaleEnum.MALE || formData.radioMale === CardMaleEnum.FEMALE)
    ) {
      maleValidValue = true;
      formErrorsObj.male = '';
    } else if (!formData.radioMale) {
      maleValidValue = false;
      formErrorsObj.male = 'Male is not choosen';
    }

    //validate thumbnail image
    if (formData.fileImage) {
      thumbnailValidValue = true;
      formErrorsObj.thumbnail = '';
    } else {
      thumbnailValidValue = false;
      formErrorsObj.thumbnail = 'Image is not choosen';
    }

    this.setState({
      nameValid: nameValidValue,
      birthdayValid: birthdayValidValue,
      countryValid: countryValidValue,
      isConsentValid: isConsentValidValue,
      maleValid: maleValidValue,
      thumbnailValid: thumbnailValidValue,
      formErrors: formErrorsObj,
    });

    this.props.updateData(this.state);
  };

  validateForm = () => {
    const { nameValid, birthdayValid, countryValid, isConsentValid, maleValid, thumbnailValid } =
      this.state;

    const formValidValue =
      nameValid && birthdayValid && countryValid && isConsentValid && maleValid && thumbnailValid;

    if (formValidValue) {
      this.setState({
        formValid: formValidValue,
      });
      this.props.updateData(this.state);
    } else {
      this.setState({
        formValid: false,
      });
      this.props.updateData(this.state);
    }
  };

  createCard = (formData: IDataForm) => {
    const { formValid } = this.state;

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
      this.props.updateData(this.state);
    }
  };

  ressetForm = () => {
    const { formValid, cardsAr } = this.state;

    if (formValid) {
      this.props.forwardRefFrom.current?.reset();
      this.setState({
        cardsAr: cardsAr,
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
      });
      this.props.updateData(this.state);
    }
  };

  render() {
    const { name, birthday, country, isConsent, male, thumbnail } = this.state.formErrors;
    return (
      <form className="my-form" onSubmit={this.handleSubmit} ref={this.props.forwardRefFrom}>
        <div className="my-form__content">
          <div className="form-group form-group__first">
            <div className="form-item">
              <InputName forwardRef={this.props.forwardRefInputName} name={name} />
            </div>
            <div className="form-item">
              <InputBirthday forwardRef={this.props.forwardRefInputBirthday} name={birthday} />
            </div>
            <div className="form-item">
              <SelectCountry forwardRef={this.props.forwardRefSelectCountry} name={country} />
            </div>
          </div>
          <div className="form-group form-group__second">
            <div className="form-item">
              <CheckboxConsent forwardRef={this.props.forwardRefCheckboxConsent} name={isConsent} />
            </div>
            <div className="form-item">
              <InputRadioMale
                forwardRefFirst={this.props.forwardRefInputRadioMaleFirst}
                forwardRefSecond={this.props.forwardRefInputRadioMaleSecond}
                name={male}
              />
            </div>
            <div className="form-item">
              <InputFileImage forwardRef={this.props.forwardRefInputFileImage} name={thumbnail} />
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

export default Form;

*/
