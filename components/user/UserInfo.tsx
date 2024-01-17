import React from "react";

const UserInfo = ({ children }: { children: React.ReactNode }) => {
  return (
    <span style={{ fontWeight: "bold", marginRight: "7px" }}>{children}</span>
  );
};

export default UserInfo;
