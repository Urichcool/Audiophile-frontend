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
    getOtherGoods: builder.query<IGoods, void>({
      query: () => "goods/other",
    }),
    getGoodsById: builder.query<IGoods, string>({
      query: (id) => `goods/${id}`,
    }),
    getAllHeadphones: builder.query<IGoods, void>({
      query: () => "headphones",
    }),
    getAllEarphones: builder.query<IGoods, void>({
      query: () => "earphones",
    }),
    getAllSpeakers: builder.query<IGoods, void>({
      query: () => "speakers",
    }),
  }),
});

export const {
  useGetNewGoodsQuery,
  useGetOtherGoodsQuery,
  useGetGoodsByIdQuery,
} = goodsApi;
