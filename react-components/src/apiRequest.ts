import { productApi } from './store/product/product.api';
import { IDataAPI } from './types/interfaces/IDataAPI';
//import { TypeRootState } from './store/store';
import { useDispatch } from 'react-redux';
//import { store } from './store/store';

/*
const apiRequest = async (store: TypeRootState) => {
  store.useDispatch(productApi.endpoints.getProducts.initiate());
  //store.dispatch(productApi.endpoints.getProducts.initiate());

  return await Promise.all(store.dispatch(productApi.util.getRunningQueriesThunk()));
};

export { apiRequest };

*/
