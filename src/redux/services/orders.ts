import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ICheckOutValues {
  shippingData: {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    radioValue: string;
    eMoneyNumber?: string;
    eMoneyPin?: string;
  };
  products: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    picture: string;
    totalPrice: number;
    category: string;
  }[];
  total: number,
}

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://audiophile-backend.onrender.com/",
  }),
  endpoints: (builder) => ({
    postNewOrder: builder.mutation<
      { addedOrder: boolean },
      ICheckOutValues
    >({
      query: (order:ICheckOutValues) => ({
        url: `/order/new`,
        body: order,
        method: "POST",
      }),
    }),
    
  }),
});

export const {usePostNewOrderMutation } = ordersApi;