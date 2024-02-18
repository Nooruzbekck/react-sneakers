import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./slices/items-slice";
import { cartSlice } from "./slices/cart-slice";

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
