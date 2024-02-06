import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AreaData {
  area: string;
}

const initialState: AreaData = {
  area: "",
};

export const areaSlice = createSlice({
  name: "area",
  initialState,
  reducers: {
    setArea: (state, action: PayloadAction<string>) => {
      state.area = action.payload;
    },
    initializeArea: (state) => {
      state.area = "";
    },
  },
});

export const { setArea, initializeArea } = areaSlice.actions;
export default areaSlice.reducer;
