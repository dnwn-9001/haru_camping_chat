import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const UserIcon = () => {
  return (
    <>
      <Avatar
        icon={<UserOutlined />}
        style={{
          backgroundColor: "transparent",
          color: "black",
          fontSize: "25px",
          border: "2px solid black",
        }}
      />
    </>
  );
};

export default UserIcon;
