import { createSlice } from "@reduxjs/toolkit";
import { getCardItemsThunk } from "../thunks/itemsThunks";

export const itemsSlice = createSlice({
  name: "cardItems",
  initialState: {
    loading: null,
    items: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardItemsThunk.pending, (state) => {
        state.loading = "loading...";
      })
      .addCase(getCardItemsThunk.fulfilled, (state, action) => {
        state.loading = "успешно!";
        state.items = action.payload;
      })
      .addCase(getCardItemsThunk.rejected, (state, action) => {
        state.loading = "отклонено!";
        state.items = action.payload;
      });
  },
});
