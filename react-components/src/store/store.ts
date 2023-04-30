import {
  configureStore,
  EnhancedStore,
  Action,
  StateFromReducersMapObject,
  Dispatch,
  AnyAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
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

// export type Store = ReturnType<typeof initStore>;
// export type RootState = StateFromReducersMapObject<typeof rootReducer>;
// export type AppDispatch = Store['dispatch'];
// export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

// export const useAppDispatch = (): Dispatch<AnyAction> &
//   ThunkDispatch<RootState, undefined, AnyAction> => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//export type RootState = ReturnType<typeof store>;

//export { initStore };
