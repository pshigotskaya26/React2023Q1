import { IProductForm } from '../interfaces/IProductForm';
import { IFormErrors } from '../interfaces/IFormErrors';

export interface IStateForm {
  cardsAr: IProductForm[];
  formErrors: IFormErrors;
  nameValid: boolean;
  birthdayValid: boolean;
  countryValid: boolean;
  isConsentValid: boolean;
  maleValid: boolean;
  thumbnailValid: boolean;
  formValid: boolean;
}
