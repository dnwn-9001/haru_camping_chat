import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, Button } from "antd";
import styled from "styled-components";
import { supabase } from "src/lib/supabase";
import { useAppDispatch } from "store/hooks";
import { userLoggedOut } from "store/features/user/authSlice";
import UserInfoCard from "./UserInfoCard";

const UserProfile = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  //로그아웃
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    const dispatchPromise = new Promise((resolve, reject) => {
      resolve(dispatch(userLoggedOut()));
    });
    if (!error) {
      const result = await dispatchPromise;

      if (result) {
        alert("로그아웃이 완료 되었습니다.");
        router.push("/");
      } else alert("로그아웃 실패 [dispatch fail]");
    } else alert("로그아웃 실패 [OAuth error]");
  }

  return (
    <AccountBox
      title="계정 정보"
      extra={
        <>
          <Link href="/chat">
            <Button>채팅</Button>
          </Link>
          <Button onClick={signOut}>로그아웃</Button>
        </>
      }
    >
      <UserInfoCard />
    </AccountBox>
  );
};

const AccountBox = styled(Card)`
  width: 50%;
  margin: auto;
  margin-top: 100px;
`;

export default UserProfile;
