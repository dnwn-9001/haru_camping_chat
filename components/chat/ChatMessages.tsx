import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useSocket } from "@/components/providers/SocketProvider";
import { useAppSelector } from "@/store/hooks";

interface content {
  type: "welcome" | "me" | "other";
  userEmail: string;
  userName: string;
  message: string;
}
const ChatMessages = () => {
  const { msgList } = useAppSelector((state) => state.chat);
  const { socket } = useSocket();
  const messagesEndRef = useRef<null | HTMLLIElement>(null);

  useEffect(() => {
    if (!socket) return;
  }, [socket]);

  useEffect(() => {
    scrollToBottom();
  }, [msgList]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <UnorderedList>
      {msgList.map((v, i) =>
        v.type === "welcome" ? (
          <WelcomeList key={`${i}_welcome`}>
            <WelcomeLine />
            장영인 님이 입장하셨습니다.
            <WelcomeLine />
          </WelcomeList>
        ) : v.type === "me" ? (
          <MyMessages key={`${i}_me`}>
            <UserName>{v.userName}</UserName>
            <MyBubble>{v.msg}</MyBubble>
          </MyMessages>
        ) : (
          <OtherMessages key={`${i}_other`}>
            <UserName>{v.userName}</UserName>
            <OtherBubble>{v.msg}</OtherBubble>
          </OtherMessages>
        )
      )}

      <li ref={messagesEndRef} />
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
