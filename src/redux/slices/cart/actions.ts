import type { PayloadAction } from "@reduxjs/toolkit";
import { IInitialCartState } from "./cartSlice";

export const switchCartModalAction = (
  state: IInitialCartState,
  action: PayloadAction<boolean>
): void => {
  state.isCartModalOpen = action.payload;
};

export const addProductAction = (
  state: IInitialCartState,
  action: PayloadAction<{
    id: string;
    name: string;
    quantity: number;
    price: number;
    totalPrice: number;
    picture: string;
  }>
): void => {
  const product:
    | {
        id: string;
        name: string;
        quantity: number;
        price: number;
        totalPrice: number;
      }
    | undefined = state.products.find(({ id }) => id === action.payload.id);
  const stateProductIndex: number = state.products.findIndex(
    ({ id }) => action.payload.id === id
  );
  if (product) {
    state.products[stateProductIndex].quantity += action.payload.quantity;
    state.products[stateProductIndex].totalPrice += action.payload.totalPrice;
  } else {
    state.products.push(action.payload);
  }
};

export const clearCartAction = (
  state: IInitialCartState,
  action: PayloadAction<[]>
): void => {
  state.products = action.payload;
};

export const getTotalAction = (
  state: IInitialCartState,
  action: PayloadAction<number>
): void => {
  state.total = action.payload;
};

export const increaseQuantityAction = (
  state: IInitialCartState,
  action: PayloadAction<{ id: string; price: number; quantity: number }>
): void => {
  const product:
    | {
        id: string;
        name: string;
        quantity: number;
        price: number;
        totalPrice: number;
      }
    | undefined = state.products.find(({ id }) => id === action.payload.id);
  const stateProductIndex: number = state.products.findIndex(
    ({ id }) => action.payload.id === id
  );
  if (product) {
    state.products[stateProductIndex].quantity += action.payload.quantity;
    state.products[stateProductIndex].totalPrice += action.payload.price;
  }
};

export const decreaseQuantityAction = (
  state: IInitialCartState,
  action: PayloadAction<{ id: string; price: number; quantity: number }>
): void => {
  const product:
    | {
        id: string;
        name: string;
        quantity: number;
        price: number;
        totalPrice: number;
      }
    | undefined = state.products.find(({ id }) => id === action.payload.id);
  const stateProductIndex: number = state.products.findIndex(
    ({ id }) => action.payload.id === id
  );
  if (product) {
    state.products[stateProductIndex].quantity -= action.payload.quantity;
    if (!state.products[stateProductIndex].quantity) {
      state.products.splice(stateProductIndex, 1);
    } else {
      state.products[stateProductIndex].totalPrice -= action.payload.price;
    }
  }
};
