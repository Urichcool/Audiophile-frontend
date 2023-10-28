import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IGoods } from "../../interfaces/goods/goods";

export const goodsApi = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://audiophile-backend.onrender.com/",
  }),
  endpoints: (builder) => ({
    getNewGoods: builder.query<IGoods, void>({
      query: () => "goods/new",
    }),
  }),
});

export const { useGetNewGoodsQuery } = goodsApi;