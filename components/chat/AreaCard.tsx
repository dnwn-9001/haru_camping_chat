import styled from "styled-components";
import { useEffect, useState } from "react";
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
  const { area } = useAppSelector((state) => state.area);
  const [areaList, setAreaList] = useState<string[]>([]);

  useEffect(() => {
    setAreaList([
      "서울",
      "인천",
      "경기도",
      "부산",
      "강원도",
      "충청도",
      "전라도",
      "경상도",
      "제주",
    ]);
  }, []);

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
    e.preventDefault();
    const { nodeName, innerText } = e.target as HTMLDivElement;

    const dispatchAndPost = async () => {
      dispatch(setArea(innerText));
      await axios.post(apiUrl, {
        area: innerText,
        userName: full_name,
        userEmail: email,
      });
    };

    if (nodeName === "H3") {
      if (area !== "") {
        if (area === innerText) {
          alert("이미 입장한 방입니다.");
          return;
        }
        const result = confirm(
          `${innerText} 채팅방으로 입장하시겠습니까? \n현재 채팅방은 퇴장 처리됩니다. \n퇴장 처리된 방의 채팅 내역은 모두 삭제됩니다.`
        );
        if (result) {
          dispatch(initializeMsgList());
          dispatchAndPost();
        } else return;
      } else {
        dispatchAndPost();
      }
    }
  };

  return (
    <div onClick={onClickArea}>
      {areaList.map((name, i) => (
        <AreaName key={`${i}_area`} selected={area === name}>
          {name} 캠핑방
        </AreaName>
      ))}
    </div>
  );
};

const AreaName = styled.h3<{ selected?: boolean }>`
  padding: 10px;
  margin: 5px 0;
  border-radius: 10px;
  background-color: ${({ selected }) => (selected ? "#fbfcfc" : "transparent")};
  transition: var(--bg-color-transition);
  &:hover {
    background-color: #fbfcfc;
    cursor: pointer;
  }
`;

export default AreaCard;
