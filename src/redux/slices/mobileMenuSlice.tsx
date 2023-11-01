import { createSlice } from "@reduxjs/toolkit";
import type {
  Action,
  PayloadAction,
  Reducer,
  Selector,
  Slice,
} from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IInitialMobileMenuState {
  isOpen: boolean;
}

const initialState: IInitialMobileMenuState = {
  isOpen: false,
};

const mobileMenuSlice: Slice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    switchMenu: (
      state: IInitialMobileMenuState,
      action: PayloadAction<boolean>
    ) => {
      state.isOpen = action.payload;
    },
  },
});

export const switchMenu: Action = mobileMenuSlice.actions.switchMenu;

export const selectIsMenuOpen: Selector = (state: RootState) =>
  state.mobileMenu.isOpen;

export const mobileMenuSliceReducer: Reducer = mobileMenuSlice.reducer;
