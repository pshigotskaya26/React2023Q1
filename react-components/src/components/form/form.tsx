import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './index.css';
import InputName from '../inputName/inputName';
import InputBirthday from '../inputBirthday/inputBirthday';
import SelectCountry from '../selectCountry/selectCountry';
import CheckboxConsent from '../checkboxConsent/checkboxConsent';
import InputRadioMale from '../inputRadioMale/inputRadioMale';
import InputFileImage from '../inputFileImage/inputFileImage';
import { IProductForm } from '../../types/interfaces/IProductForm';
import { useActions } from '../../hooks/useActions';

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
  const { addProductForm } = useActions();

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm<FormInputs>({
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data: FormInputs) => {
    const img = URL.createObjectURL(data.inputFileImage[0]);

    createCard(
      data.inputName,
      data.inputBirthday,
      data.selectCountry,
      data.checkboxConsent,
      data.inputRadioMale,
      img
    );
  };

  const createCard = (
    name: string,
    birthday: string,
    country: string,
    consent: string,
    male: string,
    image: string
  ) => {
    const card: IProductForm = {
      id: props.cards.length + 1,
      name: name,
      birthday: birthday,
      country: country,
      isConsent: consent,
      male: male,
      thumbnail: image,
    };

    addProductForm(card);

    //props.updateData(props.cards.concat([card]));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form className="my-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="my-form__content">
        <div className="form-group form-group__first">
          <div className="form-item">
            <InputName registerAttr={register} errorAttr={errors} />
          </div>
          <div className="form-item">
            <InputBirthday registerAttr={register} errorAttr={errors} />
          </div>
          <div className="form-item">
            <SelectCountry registerAttr={register} errorAttr={errors} />
          </div>
        </div>
        <div className="form-group form-group__second">
          <div className="form-item">
            <CheckboxConsent registerAttr={register} errorAttr={errors} />
          </div>
          <div className="form-item">
            <InputRadioMale registerAttr={register} errorAttr={errors} />
          </div>
          <div className="form-item">
            <InputFileImage registerAttr={register} errorAttr={errors} />
          </div>
        </div>
      </div>
      <div className="my-form__button">
        <button data-testid="my-form-button" className="btn btn-submit">
          Submit
        </button>
      </div>
    </form>
  );
};
