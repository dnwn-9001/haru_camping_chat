"use client";
import React from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <>
      <Head>
        <title>로그인 | Haru Camping</title>
      </Head>
      <AppLayout>
        <LoginForm />
      </AppLayout>
    </>
  );
};

export default Login;
