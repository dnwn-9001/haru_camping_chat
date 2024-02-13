import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, Button } from "antd";
import styled from "styled-components";
import { supabase } from "@/src/lib/supabase";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { userLoggedOut } from "@/store/features/user/authSlice";
import UserInfoCard from "@/components/user/UserInfoCard";

const UserProfile = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isBright } = useAppSelector((state) => state.lightControl);

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
    <AccountWrap $bright={isBright}>
      <AccountBox
        title="계정 정보"
        extra={
          <>
            <Link href="/chat">
              <Button style={{ marginRight: "3px" }}>채팅</Button>
            </Link>
            <Button onClick={signOut}>로그아웃</Button>
          </>
        }
      >
        <UserInfoCard />
      </AccountBox>
    </AccountWrap>
  );
};

const AccountWrap = styled.div<{ $bright: boolean }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ $bright }) => ($bright ? "#d4efdf" : "#212f3c")};
  transition: var(--bg-color-transition);
  background-image: url(/images/004.png);
  background-position: top center;
  background-repeat: no-repeat;
  overflow: hidden;
`;

const AccountBox = styled(Card)`
  width: 30%;
  margin: auto;
  margin-top: 200px;
`;

export default UserProfile;
