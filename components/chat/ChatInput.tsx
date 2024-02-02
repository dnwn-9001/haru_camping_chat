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

interface ChatInputProps {
  apiUrl: string;
}

const ChatInput = ({ apiUrl }: ChatInputProps) => {
  const dispatch = useAppDispatch();
  const { msg } = useAppSelector((state) => state.chat);
  const { full_name, email } = useAppSelector((state) => state.user);
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    function sMessageCallback(data: MsgData) {
      const { userEmail, userName, msg } = data;
      dispatch(
        setMsgList({
          type: "other",
          userEmail: userEmail,
          userName: userName,
          msg: msg,
        })
      );
    }

    socket.on("message", sMessageCallback);

    return () => {
      socket.off("message", sMessageCallback);
    };
  }, [dispatch, socket]);

  const onSubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await axios.post(apiUrl, {
      userEmail: email,
      userName: full_name,
      msg: msg,
    });

    dispatch(
      setMsgList({
        type: "me",
        userEmail: email,
        userName: full_name,
        msg: msg,
      })
    );
    dispatch(initializeCurrentMsg());
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
