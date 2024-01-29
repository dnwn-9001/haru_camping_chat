"use client";
import UserInfoCard from "components/user/UserInfoCard";
import styled from "styled-components";

const Chat = () => {
  return (
    <>
      <RootWrap>
        <FlexWrap>
          <AsideCard>
            <UserInfoWrap>
              <UserInfoCard />
            </UserInfoWrap>
            <AreaName>서울</AreaName>
            <AreaName>인천</AreaName>
            <AreaName>경기도</AreaName>
            <AreaName>부산</AreaName>
            <AreaName>강원도</AreaName>
            <AreaName>충청도</AreaName>
            <AreaName>전라도</AreaName>
            <AreaName>경상도</AreaName>
            <AreaName>제주</AreaName>
          </AsideCard>
          <ChatArea>
            <h3 style={{ position: "relative", top: "40%", left: "38%" }}>
              지역을 선택해 주세요.
            </h3>
          </ChatArea>
        </FlexWrap>
      </RootWrap>
    </>
  );
};

const RootWrap = styled.div`
  height: 88%;
  background-color: #d4efdf;
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

const AreaName = styled.h2`
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  &:hover {
    background: #fbfcfc;
    cursor: pointer;
  }
`;
export default Chat;
