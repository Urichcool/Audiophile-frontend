import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, Reducer, Slice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface IInitialMobileMenuState {
  isOpen: boolean;
}

const initialState: IInitialMobileMenuState = {
  isOpen: false,
};

const checkOutModalSlice: Slice = createSlice({
  name: "checkOutModal",
  initialState,
  reducers: {
    switchCheckOutModal: (
      state: IInitialMobileMenuState,
      action: PayloadAction<boolean>
    ) => {
      state.isOpen = action.payload;
    },
  },
});

export const switchCheckOutModal = checkOutModalSlice.actions.switchCheckOutModal;

export const selectIsCheckOutModalOpen = (state: RootState) => state.checkOutModal.isOpen;

export const checkOutModalSliceReducer: Reducer = checkOutModalSlice.reducer;
