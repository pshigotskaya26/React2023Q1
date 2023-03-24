import { IProductForm } from './IProductForm';

export interface IDataForm {
  cardsArray: IProductForm[];
  inputName: string | undefined;
  inputBirthday: string | undefined;
  selectCountry: string | undefined;
  checkboxConsent: string | undefined;
  radioMale: string | undefined;
  fileImage: string | undefined;
}
