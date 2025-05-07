import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://code-commando.com/api/v1/" }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "category",
    }),
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetCategoriesQuery, useGetAllProductsQuery } = productApi;
