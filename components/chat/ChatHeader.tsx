import styled from "styled-components";
import { useSocket } from "@/components/providers/SocketProvider";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { initializeArea } from "@/store/features/chat/areaSlice";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ChatHeader = () => {
  const { area } = useAppSelector((state) => state.area);
  const dispatch = useAppDispatch();
  const { isConnected } = useSocket();

  const clickGoBack = () => {
    const result = confirm(
      `${area} 채팅방에서 퇴장하시겠습니까? \n퇴장 처리된 방의 채팅 내역은 모두 삭제됩니다.`
    );
    if (result) dispatch(initializeArea());
    else return;
  };

  return (
    <HeaderWrapper>
      <BackwardArrow onClick={clickGoBack} />
      <h2 style={{ marginLeft: "25px" }}>{area}</h2>
      {isConnected ? (
        <ConnectionIndicator style={{ backgroundColor: "green" }} />
      ) : (
        <ConnectionIndicator style={{ backgroundColor: "red" }} />
      )}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  position: sticky;
  top: 0;
`;

const ConnectionIndicator = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 25px;
`;

const BackwardArrow = styled(ArrowLeftOutlined)`
  cursor: pointer;
  margin-left: 10px;
  font-size: 20px;
`;

export default ChatHeader;
