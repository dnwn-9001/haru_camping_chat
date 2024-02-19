"use client";
import React from "react";
import styled from "styled-components";
import LoginForm from "@/components/auth/LoginForm";
import { useAppSelector } from "@/store/hooks";

const Login = () => {
  const { isBright } = useAppSelector((state) => state.lightControl);
  return (
    <LoginWrap $bright={isBright}>
      <LoginForm />
    </LoginWrap>
  );
};

const LoginWrap = styled.div<{ $bright: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${({ $bright }) => ($bright ? "#d4efdf" : "#212f3c")};
  color: ${({ $bright }) => ($bright ? "#000" : "#fff")};
  transition: var(--bg-color-transition);
`;

export default Login;
