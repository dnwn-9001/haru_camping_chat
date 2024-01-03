import React, { useCallback } from "react";
import { Card, Button } from "antd";
import styled from "styled-components";
import { supabase } from "@/lib/supabase";

const AccountBox = styled(Card)`
  width: 100%;
  margin: auto;
  margin-top: 100px;
`;

const UserProfile = () => {
  async function signOut() {
    const { error } = await supabase.auth.signOut();

    if (!error) console.log("로그아웃 완료");
    else console.log("로그아웃 실패", error.message);
  }

  return (
    <AccountBox
      title="계정 정보"
      extra={<Button onClick={signOut}>로그아웃</Button>}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </AccountBox>
  );
};

export default UserProfile;
