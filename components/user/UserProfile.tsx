import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, Button } from "antd";
import styled from "styled-components";
import { supabase } from "src/lib/supabase";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { userLoggedIn, userLoggedOut } from "store/features/user/authSlice";
import {
  setUserInfo,
  userState,
  selectEmail,
  selectAvatarUrl,
  selectName,
} from "store/features/user/userSlice";
import UserInfo from "./UserInfo";

const UserProfile = () => {
  const router = useRouter();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const email = useAppSelector(selectEmail);
  const avatarUrl = useAppSelector(selectAvatarUrl);
  const name = useAppSelector(selectName);
  const dispatch = useAppDispatch();

  // 로그인 후 처리
  useEffect(() => {
    const getOAuthTokenPromise = new Promise((resolve, reject) => {
      resolve(window.localStorage.getItem("oauth_provider_token"));
    });

    async function getOAuthTokenAndMovePage() {
      const result = await getOAuthTokenPromise;
      result !== null ? dispatch(userLoggedIn()) : dispatch(userLoggedOut());
    }
    getOAuthTokenAndMovePage();
  }, [dispatch]);

  if (isLoggedIn === true) {
    const userToken: string = window.localStorage.getItem(
      "sb-vifbaselokneezcalqdb-auth-token"
    )!;
    const { user } = JSON.parse(userToken);
    const { avatar_url, email, full_name } = user.user_metadata;
    const userData: userState = {
      avatar_url: avatar_url,
      email: email,
      full_name: full_name,
    };

    dispatch(setUserInfo(userData));
  } else {
    console.log("사용자 데이터가 없습니다.");
  }

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
      extra={<Button onClick={signOut}>로그아웃</Button>}
    >
      {/* <Image
        src={avatarUrl}
        width={60}
        height={60}
        alt="profile image"
        style={{ borderRadius: "50%" }}
      /> */}
      <p>
        <UserInfo>이름</UserInfo>
        {name}
      </p>
      <p>
        <UserInfo>이메일</UserInfo>
        {email}
      </p>
    </AccountBox>
  );
};

const AccountBox = styled(Card)`
  width: 50%;
  margin: auto;
  margin-top: 100px;
`;

export default UserProfile;
