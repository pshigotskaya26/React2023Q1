export interface IProductForm {
  id: number;
  name?: string;
  birthday?: string;
  country?: string;
  isConsent?: string;
  male?: string;
  thumbnail?: Blob | MediaSource | string | null;
}
