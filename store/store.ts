import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "@/store/features/user/authSlice";
import userSliceReducer from "@/store/features/user/userSlice";
import chatSliceReducer from "@/store/features/chat/chatSlice";
import areaSliceReducer from "@/store/features/chat/areaSlice";
import lightControlSlice from "@/store/features/design/lightControlSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authSliceReducer,
      user: userSliceReducer,
      chat: chatSliceReducer,
      area: areaSliceReducer,
      lightControl: lightControlSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
