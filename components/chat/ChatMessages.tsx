import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useAppSelector } from "@/store/hooks";
import { MsgData } from "@/store/features/chat/chatSlice";

const ChatMessages = () => {
  const { msgList } = useAppSelector((state) => state.chat);
  const { email } = useAppSelector((state) => state.user);
  const { area } = useAppSelector((state) => state.area);
  const messagesEndRef = useRef<null | HTMLLIElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [msgList]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  };

  return (
    <UnorderedList>
      {msgList.map((data: MsgData, index: number) =>
        data.area === area ? (
          data.type === "welcome" ? (
            <WelcomeList key={`${index}_welcome`}>
              <WelcomeLine />
              {data.msg}
              <WelcomeLine />
            </WelcomeList>
          ) : data.userEmail === email ? (
            <MyMessages key={`${index}_me`}>
              <UserName>{data.userName}</UserName>
              <MyBubble>{data.msg}</MyBubble>
            </MyMessages>
          ) : (
            <OtherMessages key={`${index}_other`}>
              <UserName>{data.userName}</UserName>
              <OtherBubble>{data.msg}</OtherBubble>
            </OtherMessages>
          )
        ) : (
          ""
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
