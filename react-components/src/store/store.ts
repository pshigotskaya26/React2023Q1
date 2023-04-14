import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './product/product.api';
import { serchTextReducer } from './searchText/searchText.slice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    searchText: serchTextReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
