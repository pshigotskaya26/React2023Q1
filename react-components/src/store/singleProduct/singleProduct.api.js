import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const singleProductApi = createApi({
    reducerPath: 'singleProduct',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://rickandmortyapi.com/api/',
        timeout: 3000,
    }),
    endpoints: (build) => ({
        getSingleProduct: build.query({
            query: (idCard) => ({
                url: `character/${idCard}`,
                timeout: 3000,
            }),
        }),
    }),
});
export const { useGetSingleProductQuery } = singleProductApi;
