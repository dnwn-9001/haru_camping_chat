"use client";
import React from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import UserProfile from "../../components/UserProfile";
import StoredPost from "../../components/StoredPost";

const Profile = () => {
  const storeP = [
    { title: "메롱", content: "안녕하세요~~~" },
    { title: "이것은 텐트입니다.", content: "안녕하세요~~~" },
    { title: "빌려드립니다.", content: "안녕하세요~~~" },
  ];
  const myP = [
    { title: "내일 캠핑가는데 화롯대 구해요", content: "안녕하세요~~~" },
    { title: "쓰레기 처리", content: "안녕하세요~~~" },
    { title: "오늘...", content: "안녕하세요~~~" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | Haru Camping</title>
      </Head>
      <AppLayout>
        <UserProfile />
        <StoredPost header="보관한 글" data={storeP} />
        <StoredPost header="내가 쓴 글" data={myP} />
      </AppLayout>
    </>
  );
};

export default Profile;
