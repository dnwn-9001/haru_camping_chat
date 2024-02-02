import { useEffect } from "react";
import styled from "styled-components";
import { useSocket } from "@/components/providers/SocketProvider";
import ChatInput from "@/components/chat/ChatInput";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";

export default function ChatRoom() {
  const { socket, isConnected } = useSocket();

  return (
    <RoomWrap>
      <ChatScreen>
        <ChatHeader />
        <ChatMessages />
      </ChatScreen>
      <ChatInput type="channel" apiUrl="/api/socket/messages" />
    </RoomWrap>
  );
}

const RoomWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ChatScreen = styled.div`
  width: 100%;
  height: 92%;
  background-color: #fbfcfc;
  margin-bottom: 15px;
  border-radius: 10px;
`;
