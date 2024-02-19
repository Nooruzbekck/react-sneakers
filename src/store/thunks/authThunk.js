import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const signInThunk = createAsyncThunk(
  "auth/signInThunk",
  async ({ user, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth", user);
      navigate("/");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signUpThunk = createAsyncThunk(
  "auth/signUpThunk",
  async ({ user, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register", user);
      navigate("/login");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
