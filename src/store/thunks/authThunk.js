import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import { loginUser } from "../slices/auth-slice";

export const signInThunk = createAsyncThunk(
  "auth/signInThunk",
  async ({ user, navigate }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.post("/auth", user);
      dispatch(loginUser(data.token));
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
