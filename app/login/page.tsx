"use client";
import React from "react";
import Head from "next/head";
import LoginForm from "components/auth/LoginForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>로그인 | Haru Camping</title>
      </Head>
      <LoginForm />
    </>
  );
};

export default Login;
