import { useRouter } from "next/navigation";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAppSelector } from "store/hooks";

const UserIcon = () => {
  const router = useRouter();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return (
    <Avatar
      icon={<UserOutlined />}
      style={{
        backgroundColor: "transparent",
        color: "black",
        fontSize: "25px",
        border: "2px solid black",
        cursor: "pointer",
      }}
      onClick={() =>
        isLoggedIn ? router.push("/profile") : router.push("/login")
      }
    />
  );
};

export default UserIcon;
