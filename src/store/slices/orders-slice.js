import { createSlice } from "@reduxjs/toolkit";
import { getAllOrdersThunk } from "../thunks/orderThunk";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllOrdersThunk.fulfilled, (state, action) => {
      state.orders = action.payload;
    });
  },
});
