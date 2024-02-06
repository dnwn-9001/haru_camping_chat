import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "@/store/features/user/authSlice";
import userSliceReducer from "@/store/features/user/userSlice";
import chatSliceReducer from "@/store/features/chat/chatSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSliceReducer,
      user: userSliceReducer,
      chat: chatSliceReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
