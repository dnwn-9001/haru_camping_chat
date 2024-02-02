import styled from "styled-components";
import { useSocket } from "@/components/providers/SocketProvider";

const ChatHeader = () => {
  const { isConnected } = useSocket();
  return (
    <HeaderWrapper>
      <h2 style={{ marginLeft: "25px" }}>지역명</h2>
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
`;

const ConnectionIndicator = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 25px;
`;

export default ChatHeader;
