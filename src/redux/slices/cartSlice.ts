import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Reducer, Slice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IInitialCartState {
  products: { id: string; name: string; quantity: number; price: number }[];
}

const initialState: IInitialCartState = {
  products: [],
};

const cartSlice: Slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (
      state: IInitialCartState,
      action: PayloadAction<{
        id: string;
        name: string;
        quantity: number;
        price: number;
      }>
    ) => {
      state.products.push(action.payload);
    },
    clearCart: (state: IInitialCartState) => {
      state.products = [];
    },
  },
});

export const switchMenu = cartSlice.actions.clearCart;

export const selectCartProducts = (state: RootState) => state.products;

export const cartSliceReducer: Reducer = cartSlice.reducer;
