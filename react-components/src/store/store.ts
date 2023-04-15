import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './product/product.api';
import { singleProductApi } from './singleProduct/singleProduct.api';
import { serchTextReducer } from './searchText/searchText.slice';
import { formSubmissionReducer } from './formSubmission/formSubmission.slice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    searchText: serchTextReducer,
    [singleProductApi.reducerPath]: singleProductApi.reducer,
    formSubmission: formSubmissionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, singleProductApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
