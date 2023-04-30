import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './product/product.api';
import { singleProductApi } from './singleProduct/singleProduct.api';
import { rootReducer } from './rootReducer';

export const initStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware, singleProductApi.middleware),
    preloadedState,
  });
};
export type RootStore = ReturnType<typeof initStore>;
export type RootState = ReturnType<typeof rootReducer>;
