import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Reducer, Slice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IInitialCartState {
  products: { id: string; name: string; quantity: number; price: number; picture: string }[];
  isCartModalOpen: boolean;
}

const initialState: IInitialCartState = {
  products: [],
  isCartModalOpen:false
};

const cartSlice: Slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    switchCartModal: (
      state: IInitialCartState,
      action: PayloadAction<boolean>
    ) => {
      state.isCartModalOpen = action.payload;
    },
    addProduct: (
      state: IInitialCartState,
      action: PayloadAction<{
        id: string;
        name: string;
        quantity: number;
        price: number;
        picture: string;
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
    clearCart: (state: IInitialCartState, action:PayloadAction<[]>):void => {
      state.products = action.payload;
    },
  },
});

export const switchMenu = cartSlice.actions.clearCart;
export const addProduct = cartSlice.actions.addProduct;
export const switchCartModal = cartSlice.actions.switchCartModal;
export const clearCart = cartSlice.actions.clearCart

export const selectCartProducts = (state: RootState) => state.cart.products;
export const selectIsCartModalOpen = (state: RootState) => state.cart.isCartModalOpen;

export const cartSliceReducer: Reducer = cartSlice.reducer;
