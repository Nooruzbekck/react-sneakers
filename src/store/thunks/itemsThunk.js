import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const getCardItemsThunk = createAsyncThunk(
  "items/getCardItemsThunk",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/items");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
