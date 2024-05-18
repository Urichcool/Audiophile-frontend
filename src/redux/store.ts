import { Store, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { goodsApi } from "./services/goods";
import { ordersApi } from "./services/orders";
import { mobileMenuSliceReducer } from "./slices/mobile-menu/mobileMenuSlice";
import { cartSliceReducer } from "./slices/cart/cartSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import { checkOutModalSliceReducer } from "./slices/checkout-modal/checkOutModalSlice";

const persistConfig = {
  key: "cart",
  storage,
  whitelist: ["products"],
};

export const store: Store = configureStore({
  reducer: {
    [goodsApi.reducerPath]: goodsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    mobileMenu: mobileMenuSliceReducer,
    cart: persistReducer(persistConfig, cartSliceReducer),
    checkOutModal: checkOutModalSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(goodsApi.middleware)
      .concat(ordersApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
