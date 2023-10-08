import React, { useCallback } from "react";
import { Card, Button } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";

const AccountBox = styled(Card)`
  width: 100%;
  margin: auto;
  margin-top: 100px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
    // setIsLoggedIn(false);
  });

  return (
    <AccountBox
      title="계정 정보"
      extra={<Button onClick={onLogOut}>로그아웃</Button>}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </AccountBox>
  );
};

export default UserProfile;
