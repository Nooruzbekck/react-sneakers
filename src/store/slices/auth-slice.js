import { createSlice } from "@reduxjs/toolkit";
import { signInThunk, signUpThunk } from "../thunks/authThunk";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    emailError: null,
  },
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.pending, (state, action) => {})
      .addCase(signUpThunk.fulfilled, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.emailError = action.payload;
      });
    builder
      .addCase(signInThunk.pending, (state, action) => {})
      .addCase(signInThunk.fulfilled, (state) => {
        state.isLoggedIn = true;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.emailError = action.payload;
      });
  },
});

export const { loginUser } = authSlice.actions;
