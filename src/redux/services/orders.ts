import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICheckOutFormValues } from "../../components/Checkout/CheckoutFormData";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://audiophile-backend.onrender.com/",
  }),
  endpoints: (builder) => ({
    postNewOrder: builder.mutation<
      { addedOrder: boolean },
      ICheckOutFormValues
    >({
      query: (order:ICheckOutFormValues) => ({
        url: `/order/new`,
        body: order,
        method: "POST",
      }),
    }),
  }),
});

export const {usePostNewOrderMutation } = ordersApi;