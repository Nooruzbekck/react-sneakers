import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const getCartItemsThunk = createAsyncThunk(
  "cart/getCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/cart");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const addToCartThunk = createAsyncThunk(
  "cart/addToCartThunk",
  async (cartData, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.post("/cart", cartData);
      dispatch(getCartItemsThunk());
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteCartThunk = createAsyncThunk(
  "cart/deleteCart",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete(`/cart/${id}`);
      dispatch(getCartItemsThunk());
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
