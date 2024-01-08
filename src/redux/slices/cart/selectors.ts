import type { RootState } from "../../store";

export const selectCartProducts = (state: RootState) => state.cart.products;
export const selectIsCartModalOpen = (state: RootState) =>
  state.cart.isCartModalOpen;
export const selectTotal = (state: RootState) => state.cart.total;
