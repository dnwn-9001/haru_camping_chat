import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store/store";

export interface authState {
  isLoggedIn: boolean;
}

const initialState: authState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    userLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export const selectAuthState = (state: RootState) => state.auth.isLoggedIn;
export default authSlice.reducer;
