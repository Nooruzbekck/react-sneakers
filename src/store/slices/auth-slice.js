import { createSlice } from "@reduxjs/toolkit";
import { signInThunk, signUpThunk } from "../thunks/authThunk";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    emailError: null,
    token: null,
  },
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.emailError = action.payload;
      });
    builder
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.emailError = action.payload;
      });
  },
});

export const { loginUser } = authSlice.actions;
