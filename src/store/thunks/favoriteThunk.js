import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const getFavoritesThunk = createAsyncThunk(
  "favorites/getFavoritesThunk",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/favorites");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const postFavoriteThunk = createAsyncThunk(
  "favorites/postFavoriteThunk",
  async (favoriteData, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.post("/favorites", favoriteData);
      return dispatch(getFavoritesThunk());
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const removeFavoriteThunk = createAsyncThunk(
  "favorites/removeFavoriteThunk",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete(`/favorites/${id}`);
      return dispatch(getFavoritesThunk());
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
