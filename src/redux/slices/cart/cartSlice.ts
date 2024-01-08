import { createSlice } from "@reduxjs/toolkit";
import type { Reducer, Slice } from "@reduxjs/toolkit";
import {
  switchCartModalAction,
  addProductAction,
  clearCartAction,
  getTotalAction,
  increaseQuantityAction,
  decreaseQuantityAction,
} from "./actions";

export interface IInitialCartState {
  products: {
    id: string;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
    picture: string;
  }[];
  isCartModalOpen: boolean;
  total: number;
}

const initialState: IInitialCartState = {
  products: [],
  isCartModalOpen: false,
  total: 0,
};

const cartSlice: Slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    switchCartModalAction,
    addProductAction,
    clearCartAction,
    getTotalAction,
    increaseQuantityAction,
    decreaseQuantityAction,
  },
});

export const switchCartModal = cartSlice.actions.switchCartModalAction;
export const addProduct = cartSlice.actions.addProductAction;
export const clearCart = cartSlice.actions.clearCartAction;
export const getTotal = cartSlice.actions.getTotalAction;
export const increaseQuantity = cartSlice.actions.increaseQuantityAction;
export const decreaseQuantity = cartSlice.actions.decreaseQuantityAction;

export const cartSliceReducer: Reducer = cartSlice.reducer;
