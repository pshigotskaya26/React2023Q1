import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDataAPI } from '../../types/interfaces/IDataAPI';

export const productApi = createApi({
  reducerPath: 'apiProducts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/',
    timeout: 3000,
  }),
  endpoints: (build) => ({
    getProducts: build.query<IDataAPI, void>({
      query: () => ({
        url: 'character',
        timeout: 3000,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
