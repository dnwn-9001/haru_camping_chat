import { useRouter } from "next/navigation";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAppSelector } from "store/hooks";
import styled from "styled-components";

const UserIcon = () => {
  const router = useRouter();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const { isBright } = useAppSelector((state) => state.lightControl);

  return (
    <UserIconImg
      icon={<UserOutlined />}
      onClick={() =>
        isLoggedIn ? router.push("/profile") : router.push("/login")
      }
      $bright={isBright}
    />
  );
};

const UserIconImg = styled(Avatar)<{ $bright: boolean }>`
  background-color: transparent;
  color: ${({ $bright }) => ($bright ? "black" : "#fff")};
  font-size: 25px;
  border: 2px solid ${({ $bright }) => ($bright ? "black" : "#fff")};
  cursor: pointer;
  transition: all 0.5s ease;
`;

export default UserIcon;
