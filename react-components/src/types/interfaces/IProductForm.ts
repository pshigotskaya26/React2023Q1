export interface IProductForm {
  id: number;
  name?: string;
  birthday?: string;
  country?: string;
  isConsent?: boolean | string;
  male?: string;
  thumbnail?: Blob | MediaSource | string;
}
