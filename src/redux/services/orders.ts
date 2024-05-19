import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IOrder {
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
}

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://audiophile-backend.onrender.com/",
  }),
  endpoints: (builder) => ({
    postNewOrder: builder.mutation<
      { addedOrder: boolean },
      IOrder
    >({
      query: (order:IOrder) => ({
        url: `/order/new`,
        body: order,
        method: "POST",
      }),
    }),
    
  }),
});

export const {usePostNewOrderMutation } = ordersApi;