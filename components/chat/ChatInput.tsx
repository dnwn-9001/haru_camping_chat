import { useEffect } from "react";
import styled from "styled-components";
import { SendOutlined } from "@ant-design/icons";
import {
  setCurrentMsg,
  initializeCurrentMsg,
  setMsgList,
  MsgData,
} from "@/store/features/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import { useSocket } from "@/components/providers/SocketProvider";
import { ChatInputProps } from "@/app/chat/page";

const ChatInput = ({ apiUrl }: ChatInputProps) => {
  const dispatch = useAppDispatch();
  const { msg, msgList } = useAppSelector((state) => state.chat);
  const { full_name, email } = useAppSelector((state) => state.user);
  const { area } = useAppSelector((state) => state.area);

  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    function messageCallback(data: MsgData) {
      const { userEmail, userName, msg, area } = data;
      dispatch(
        setMsgList({
          userEmail: userEmail,
          userName: userName,
          msg: msg,
          area: area,
        })
      );
    }

    socket.on("message", messageCallback);

    return () => {
      socket.off("message", messageCallback);
    };
  }, [dispatch, socket, msgList]);

  const onSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (msg !== "") {
      await axios.post(apiUrl, {
        area: area,
        userEmail: email,
        userName: full_name,
        msg: msg,
      });
      dispatch(initializeCurrentMsg());
    }
  };

  const onChangeMsgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCurrentMsg(e.target.value));
  };

  return (
    <InputArea>
      <InputBox
        placeholder="메세지를 입력해주세요."
        onChange={onChangeMsgHandler}
        value={msg}
      />
      <SendBtn type="submit" onClick={onSubmitHandler}>
        <span>Send</span>
        <SendOutlined style={{ color: "#fbfcfc", marginLeft: "15px" }} />
      </SendBtn>
    </InputArea>
  );
};

const InputArea = styled.form`
  width: 100%;
  height: 8%;
  background-color: #fbfcfc;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const InputBox = styled.input`
  width: 75%;
  height: 70%;
  background-color: transparent;
  border: transparent;
  border-radius: 10px;
  outline: none;
  font-size: 15px;
`;

const SendBtn = styled.button`
  width: 15%;
  height: 70%;
  color: #fbfcfc;
  background-color: #145a32;
  border: transparent;
  border-radius: 10px;
  cursor: pointer;
`;

export default ChatInput;
