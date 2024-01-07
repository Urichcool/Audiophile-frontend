import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Reducer, Slice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IInitialCartState {
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
        totalPrice: number;
        picture: string;
      }>
    ) => {
      const product:
        | {
            id: string;
            name: string;
            quantity: number;
            price: number;
            totalPrice: number;
          }
        | undefined = state.products.find(({ id }) => id === action.payload.id);
      if (product) {
        state.products[
          state.products.findIndex(({ id }) => action.payload.id === id)
        ].quantity += action.payload.quantity;
        state.products[
          state.products.findIndex(({ id }) => action.payload.id === id)
        ].totalPrice += action.payload.totalPrice;
      } else {
        state.products.push(action.payload);
      }
    },
    clearCart: (state: IInitialCartState, action: PayloadAction<[]>) => {
      state.products = action.payload;
    },
    getTotal: (state: IInitialCartState, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    increaseQuantity: (
      state: IInitialCartState,
      action: PayloadAction<{ id: string; price: number; quantity: number }>
    ) => {
      const product:
        | {
            id: string;
            name: string;
            quantity: number;
            price: number;
            totalPrice: number;
          }
        | undefined = state.products.find(({ id }) => id === action.payload.id);
      if (product) {
        state.products[
          state.products.findIndex(({ id }) => action.payload.id === id)
        ].quantity += action.payload.quantity;
        state.products[
          state.products.findIndex(({ id }) => action.payload.id === id)
        ].totalPrice += action.payload.price;
      }
    },
    decreaseQuantity: (
      state: IInitialCartState,
      action: PayloadAction<{ id: string; price: number; quantity: number }>
    ) => {
      const product:
        | {
            id: string;
            name: string;
            quantity: number;
            price: number;
            totalPrice: number;
          }
        | undefined = state.products.find(({ id }) => id === action.payload.id);
      if (product) {
        state.products[
          state.products.findIndex(({ id }) => action.payload.id === id)
        ].quantity -= action.payload.quantity;
        if (
          !state.products[
            state.products.findIndex(({ id }) => action.payload.id === id)
          ].quantity 
        ) {
          state.products.splice(
            state.products.findIndex(({ id }) => action.payload.id === id),
            1
          );
        } else {
          state.products[
            state.products.findIndex(({ id }) => action.payload.id === id)
          ].totalPrice -= action.payload.price;
        }
      }
    },
  },
});

export const switchMenu = cartSlice.actions.clearCart;
export const addProduct = cartSlice.actions.addProduct;
export const switchCartModal = cartSlice.actions.switchCartModal;
export const clearCart = cartSlice.actions.clearCart;
export const getTotal = cartSlice.actions.getTotal;
export const increaseQuantity = cartSlice.actions.increaseQuantity;
export const decreaseQuantity = cartSlice.actions.decreaseQuantity;

export const selectCartProducts = (state: RootState) => state.cart.products;
export const selectIsCartModalOpen = (state: RootState) =>
  state.cart.isCartModalOpen;
export const selectTotal = (state: RootState) => state.cart.total;

export const cartSliceReducer: Reducer = cartSlice.reducer;
