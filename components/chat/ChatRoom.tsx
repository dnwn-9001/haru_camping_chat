import styled from "styled-components";
import ChatInput from "@/components/chat/ChatInput";
import ChatHeader from "@/components/chat/ChatHeader";
import ChatMessages from "@/components/chat/ChatMessages";

const ChatRoom = () => {
  return (
    <RoomWrap>
      <ChatScreen>
        <ChatHeader />
        <ChatMessages />
      </ChatScreen>
      <ChatInput apiUrl="/api/socket/messages" />
    </RoomWrap>
  );
};

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
  overflow-y: auto;
`;

export default ChatRoom;
