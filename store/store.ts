import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./features/user/authSlice";
import userSliceReducer from "./features/user/userSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSliceReducer,
      user: userSliceReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
