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
    getOtherGoods: builder.query<IGoods[], void>({
      query: () => "goods/other",
    }),
    getGoodsById: builder.query<IGoods, string>({
      query: (id) => `goods/${id}`,
    }),
    getAllHeadphones: builder.query<IGoods[], void>({
      query: () => "headphones",
    }),
    getAllEarphones: builder.query<IGoods[], void>({
      query: () => "earphones",
    }),
    getAllSpeakers: builder.query<IGoods[], void>({
      query: () => "speakers",
    }),
    getGoodsStock: builder.query<{ stock: number }, string>({
      query: (id) => `stock/check/${id}`,
    }),
    checkGoodsCartStock: builder.mutation<
      { isEnoughCartStock: boolean },
      { id: string; quantity: number }[]
    >({
      query: (cart) => ({
        url: `stock/check/cart`,
        body: cart,
        method: "POST",
      }),
    }),
    getGoodsOutFromStock: builder.mutation<
      { wasUpdated: boolean },
      { id: string; quantity: number }[]
    >({
      query: (cart) => ({
        url: `stock/update/stock`,
        body: cart,
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useGetNewGoodsQuery,
  useGetOtherGoodsQuery,
  useGetGoodsByIdQuery,
  useGetAllHeadphonesQuery,
  useGetAllEarphonesQuery,
  useGetAllSpeakersQuery,
  useGetGoodsStockQuery,
  useCheckGoodsCartStockMutation,
  useGetGoodsOutFromStockMutation,
} = goodsApi;
