import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IDataAPI } from '../../types/interfaces/IDataAPI';

export const productApi = createApi({
  reducerPath: 'searchResults',
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
    getSearchProducts: build.query<IDataAPI, string>({
      query: (searchVal) => ({
        url: `character?name=${searchVal}`,
        timeout: 3000,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetSearchProductsQuery } = productApi;
