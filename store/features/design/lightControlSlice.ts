import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface lightState {
  isBright: boolean;
}

const initialState: lightState = {
  isBright: true,
};

export const lightControlSlice = createSlice({
  name: "lightControl",
  initialState,
  reducers: {
    setLightState: (state, action: PayloadAction<boolean>) => {
      state.isBright = action.payload;
    },
  },
});

export const { setLightState } = lightControlSlice.actions;
export default lightControlSlice.reducer;
