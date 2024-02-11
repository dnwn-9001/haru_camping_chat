"use client";
import styled from "styled-components";
import UserInfoCard from "@/components/user/UserInfoCard";
import ChatRoom from "@/components/chat/ChatRoom";
import AreaCard from "@/components/chat/AreaCard";
import { useAppSelector } from "@/store/hooks";

export interface ChatInputProps {
  apiUrl: string;
}

const Chat = () => {
  const { area } = useAppSelector((state) => state.area);
  const { isBright } = useAppSelector((state) => state.lightControl);
  return (
    <>
      <RootWrap $bright={isBright}>
        <FlexWrap>
          <AsideCard>
            <UserInfoWrap>
              <UserInfoCard />
            </UserInfoWrap>
            <AreaCard apiUrl="/api/socket/rooms" />
          </AsideCard>
          <ChatArea>
            {area ? (
              <ChatRoom />
            ) : (
              <h3 style={{ position: "relative", top: "40%", left: "38%" }}>
                지역을 선택해 주세요.
              </h3>
            )}
          </ChatArea>
        </FlexWrap>
      </RootWrap>
    </>
  );
};

const RootWrap = styled.div<{ $bright: boolean }>`
  height: 88%;
  background-color: ${({ $bright }) => ($bright ? "#d4efdf" : "#212f3c")};
  color: ${({ $bright }) => ($bright ? "#000" : "#808B96")};
  transition: background-color 0.5s ease;
`;

const FlexWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const AsideCard = styled.aside`
  width: 20%;
  height: 90%;
  background-color: trnasparent;
  border-radius: 20px;
  margin-right: 20px;
  margin-top: 30px;
`;

const ChatArea = styled.div`
  width: 50%;
  height: 90%;
  background-color: #fbfcfc;
  border-radius: 20px;
  margin-top: 30px;
`;

const UserInfoWrap = styled.div`
  margin-top: 32px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #95a5a6;
`;

export default Chat;
