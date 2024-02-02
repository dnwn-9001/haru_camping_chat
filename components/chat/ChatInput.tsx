import styled from "styled-components";
import { SendOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";

interface ChatInputProps {
  apiUrl: string;
  type: "channel";
}

const ChatInput = ({ apiUrl, type }: ChatInputProps) => {
  const onSubmitHandler = async (value: { content: string }) => {
    console.log(value);
  };
  return (
    <InputArea>
      <InputBox placeholder="메세지를 입력해주세요." />
      <SendBtn onClick={() => {}}>
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
