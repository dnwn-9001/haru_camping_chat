import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";

export interface UserState {
  avatar_url: string;
  full_name: string;
  email: string;
}

const initialState: UserState = {
  avatar_url: "",
  full_name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserState>) => {
      const { avatar_url, email, full_name } = action.payload;
      state.avatar_url = avatar_url;
      state.email = email;
      state.full_name = full_name;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export const selectAvatarUrl = (state: RootState) => state.user.avatar_url;
export const selectEmail = (state: RootState) => state.user.email;
export const selectName = (state: RootState) => state.user.full_name;
export default userSlice.reducer;
