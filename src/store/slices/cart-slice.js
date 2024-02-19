import { createSlice } from "@reduxjs/toolkit";
import { getCartItemsThunk } from "../thunks/cartThunks";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    loading: null,
    totalPrice: 0,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItemsThunk.pending, (state) => {
        state.loading = "loading...";
      })
      .addCase(getCartItemsThunk.fulfilled, (state, action) => {
        state.loading = "успешно!";
        state.cartItems = action.payload;
        state.totalPrice = state.cartItems.reduce((acc, item) => {
          return (acc += item.price);
        }, 0);
      })
      .addCase(getCartItemsThunk.rejected, (state, action) => {
        state.loading = "отклонено!";
        state.cartItems = action.payload;
      });
  },
});
