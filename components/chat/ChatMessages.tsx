import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSocket } from "@/components/providers/SocketProvider";
import { SendOutlined } from "@ant-design/icons";
import ChatInput from "@/components/chat/ChatInput";

interface content {
  type: "welcome" | "me" | "other";
  userEmail: string;
  userName: string;
  message: string;
}
const ChatMessages = () => {
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState<content[]>([]);
  const [userName, setUserName] = useState("");
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;
  }, [socket]);

  return (
    <UnorderedList>
      <WelcomeList>
        <WelcomeLine />
        장영인 님이 입장하셨습니다.
        <WelcomeLine />
      </WelcomeList>
      <MyMessages>
        <UserName>장영인</UserName>
        <MyBubble>나의 메세지 자리</MyBubble>
      </MyMessages>
      <OtherMessages>
        <UserName>장영우</UserName>
        <OtherBubble>다른 사람 메세지</OtherBubble>
      </OtherMessages>
    </UnorderedList>
  );
};

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0 10px;
  margin: auto;
`;

const WelcomeList = styled.li`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  gap: 10px;
`;

const WelcomeLine = styled.div`
  height: 0.5px;
  flex: 1 1 auto;
  background-color: #cecece;
`;

const MyMessages = styled.li`
  text-align: right;
`;

const OtherMessages = styled.li`
  text-align: left;
`;

const UserName = styled.div`
  margin: 5px 0 3px 0;
  font-size: 13px;
  font-weight: bold;
`;

const MyBubble = styled.div`
  padding: 7px;
  display: inline-block;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #fadbd8;
  color: #000;
`;

const OtherBubble = styled.div`
  padding: 7px;
  display: inline-block;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #d4efdf;
  color: #000;
`;
export default ChatMessages;
