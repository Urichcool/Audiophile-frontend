import { Store, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { goodsApi } from "./services/goods";
import { mobileMenuSliceReducer } from "./slices/mobileMenuSlice";


export const store:Store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    mobileMenu:mobileMenuSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
