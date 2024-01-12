import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./features/user/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSliceReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
