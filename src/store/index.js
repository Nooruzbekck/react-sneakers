import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { itemsSlice } from "./slices/items-slice";
import { cartSlice } from "./slices/cart-slice";
import { favoritesSlice } from "./slices/favorites-slice";
import { ordersSlice } from "./slices/orders-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authSlice } from "./slices/auth-slice";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  items: itemsSlice.reducer,
  cart: cartSlice.reducer,
  favorites: favoritesSlice.reducer,
  order: ordersSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
