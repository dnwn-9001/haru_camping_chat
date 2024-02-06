import styled from "styled-components";
import { useSocket } from "@/components/providers/SocketProvider";
import { useAppSelector } from "@/store/hooks";

const ChatHeader = () => {
  const { area } = useAppSelector((state) => state.area);
  const { isConnected } = useSocket();
  return (
    <HeaderWrapper>
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

export default ChatHeader;
