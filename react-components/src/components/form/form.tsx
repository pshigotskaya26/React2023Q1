import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './index.css';
import InputName from '../inputName/inputName';
import InputBirthday from '../inputBirthday/inputBirthday';
import SelectCountry from '../selectCountry/selectCountry';
import CheckboxConsent from '../checkboxConsent/checkboxConsent';
import InputRadioMale from '../inputRadioMale/inputRadioMale';
import InputFileImage from '../inputFileImage/inputFileImage';
import { IProductForm } from '../../types/interfaces/IProductForm';

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
  updateData: (value: IProductForm[]) => void;
}

export const Form: React.FC<FormProps> = (props) => {
  const [cardsFormAr, setCardsFormAr] = useState<IProductForm[]>([]);

  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm<FormInputs>({
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data: FormInputs) => {
    console.log('date in submit: ', data);
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
      id: cardsFormAr.length + 1,
      name: name,
      birthday: birthday,
      country: country,
      isConsent: consent,
      male: male,
      thumbnail: image,
    };

    cardsFormAr.push(card);
    setCardsFormAr(cardsFormAr);
    props.updateData(cardsFormAr);
  };

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
        <button className="btn btn-submit">Submit</button>
      </div>
    </form>
  );
};
