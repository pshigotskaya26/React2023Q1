import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const productApi = createApi({
    reducerPath: 'searchResults',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api/',
        timeout: 3000,
    }),
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => ({
                url: 'character',
                timeout: 3000,
            }),
        }),
        getSearchProducts: build.query({
            query: (searchVal) => ({
                url: `character?name=${searchVal}`,
                timeout: 3000,
            }),
        }),
    }),
});
export const { useGetProductsQuery, useGetSearchProductsQuery } = productApi;
