import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "store/store";

export interface MsgData {
  type: "welcome" | "me" | "other";
  userEmail: string;
  userName: string;
  msg: string;
}

export interface ChatState {
  msg: string;
  msgList: MsgData[];
}

const initialState: ChatState = {
  msg: "",
  msgList: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setCurrentMsg: (state, action: PayloadAction<string>) => {
      state.msg = action.payload;
    },
    initializeCurrentMsg: (state) => {
      state.msg = "";
    },
    setMsgList: (state, action: PayloadAction<MsgData>) => {
      state.msgList.push(action.payload);
    },
  },
});

export const { setCurrentMsg, initializeCurrentMsg, setMsgList } =
  chatSlice.actions;
export const selectMsg = (state: RootState) => state.chat.msg;
export default chatSlice.reducer;
