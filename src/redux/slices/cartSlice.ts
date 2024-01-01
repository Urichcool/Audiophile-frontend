import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Reducer, Slice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IInitialCartState {
  products: { id: string; name: string; quantity: number; price: number;  picture:string}[];
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
        picture:string
      }>
    ) => {
      const product:
        | { id: string; name: string; quantity: number; price: number }
        | undefined = state.products.find(({ id }) => id === action.payload.id);
      if (product) {
        state.products[
          state.products.findIndex(({ id }) => action.payload.id === id)
        ].quantity += action.payload.quantity;
        state.products[
          state.products.findIndex(({ id }) => action.payload.id === id)
        ].price += action.payload.price;
      } else {
        state.products.push(action.payload);
      }
    },
    clearCart: (state: IInitialCartState) => {
      state.products = [];
    },
  },
});

export const switchMenu = cartSlice.actions.clearCart;
export const addProduct = cartSlice.actions.addProduct;


export const selectCartProducts = (state: RootState) => state.cart.products;

export const cartSliceReducer: Reducer = cartSlice.reducer;
