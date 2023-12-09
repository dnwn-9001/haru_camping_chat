"use client";
import React from "react";
import Head from "next/head";
import styled from "styled-components";
import SignUpForm from "../../components/SignUpForm";

const SignUpTitle = styled.h1`
  margin: auto;
  width: 300px;
  text-align: center;
  padding: 100px 0 50px 0;
`;

const Signup = () => {
  return (
    <>
      <Head>
        <title>회원가입 | Haru Camping</title>
      </Head>
      <SignUpTitle>회원가입</SignUpTitle>
      <SignUpForm />
    </>
  );
};

export default Signup;
