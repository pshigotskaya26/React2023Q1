import { productApi } from './product/product.api';
import { singleProductApi } from './singleProduct/singleProduct.api';
import { serchTextReducer } from './searchText/searchText.slice';
import { formSubmissionReducer } from './formSubmission/formSubmission.slice';
import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  searchText: serchTextReducer,
  [singleProductApi.reducerPath]: singleProductApi.reducer,
  formSubmission: formSubmissionReducer,
});
