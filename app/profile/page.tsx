"use client";
import React from "react";
import Head from "next/head";
import UserProfile from "components/user/UserProfile";

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | Haru Camping</title>
      </Head>
      <UserProfile />
    </>
  );
};

export default Profile;
