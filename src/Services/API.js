import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => 'products',
            providesTags: ['products'], // On set le tag pour les produits
        }),
        addComment: builder.mutation({
            query: (productId, username, comment) => ({
                url: `/products/${productId}/comments`,
                method: 'POST',
                body: {
                    username,
                    comment
                }
            }),
        }),
        fetchProducts: builder.query({
            query: (productId) => ({
                url: `/products/${productId}/comments`,
                method: 'GET',
            }),
            invalidatesTags: ['products'], // On invalide le tag
        }),
    }),
});

export const { useGetProductsQuery, useFetchProductsQuery, useAddCommentMutation } = productsAPI;
