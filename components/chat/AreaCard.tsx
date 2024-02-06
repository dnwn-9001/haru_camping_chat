import styled from "styled-components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import { setArea } from "@/store/features/chat/areaSlice";
import { ChatInputProps } from "@/app/chat/page";
import { useSocket } from "@/components/providers/SocketProvider";
import {
  MsgData,
  setMsgList,
  initializeMsgList,
} from "@/store/features/chat/chatSlice";

const AreaCard = ({ apiUrl }: ChatInputProps) => {
  const dispatch = useAppDispatch();
  const { socket } = useSocket();
  const { full_name, email } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!socket) return;

    function roomCallback(data: MsgData) {
      const { userEmail, userName, area } = data;
      dispatch(
        setMsgList({
          type: "welcome",
          userEmail: userEmail,
          userName: userName,
          msg: `${userName} 님이 입장하였습니다.`,
          area: area,
        })
      );
    }

    socket.on("room", roomCallback);

    return () => {
      socket.off("room", roomCallback);
    };
  }, [socket, dispatch]);

  const onClickArea = (e: React.MouseEvent<HTMLDivElement>) => {
    const { nodeName, innerText } = e.target as HTMLDivElement;
    if (nodeName === "H3") {
      dispatch(setArea(innerText));
      axios.post(apiUrl, {
        area: innerText,
        userName: full_name,
        userEmail: email,
      });

      dispatch(initializeMsgList());
    }
  };

  return (
    <div onClick={onClickArea}>
      <AreaName>서울</AreaName>
      <AreaName>인천</AreaName>
      <AreaName>경기도</AreaName>
      <AreaName>부산</AreaName>
      <AreaName>강원도</AreaName>
      <AreaName>충청도</AreaName>
      <AreaName>전라도</AreaName>
      <AreaName>경상도</AreaName>
      <AreaName>제주</AreaName>
    </div>
  );
};

const AreaName = styled.h3`
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  &:hover {
    background: #fbfcfc;
    cursor: pointer;
  }
`;

export default AreaCard;
