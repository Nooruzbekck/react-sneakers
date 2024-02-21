import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import { deleteCartThunk } from "./cartThunk";

export const getAllOrdersThunk = createAsyncThunk(
  "orders/getAllOrdersThunk",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/orders");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const postOrderThunk = createAsyncThunk(
  "orders/postOrderThunk",
  async ({ newOrders, setDataId }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.post("/orders", newOrders);
      const items = data.items;
      setDataId(data.id);
      for (const iterator of items) {
        const { id } = iterator;
        dispatch(deleteCartThunk(id));
      }

      dispatch(getAllOrdersThunk());
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
