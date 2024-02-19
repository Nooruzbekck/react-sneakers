import { createSlice } from "@reduxjs/toolkit";
import { getFavoritesThunk } from "../thunks/favoriteThunk";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
    favoriteStatus: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavoritesThunk.pending, (state) => {
        state.favoriteStatus = "loading...";
      })
      .addCase(getFavoritesThunk.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.favoriteStatus = null;
      })
      .addCase(getFavoritesThunk.rejected, (state, action) => {
        state.favoriteStatus = action.payload;
      });
  },
});
