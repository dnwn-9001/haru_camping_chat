import React, { useState, useCallback, ChangeEvent, useEffect } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers";

const LoginTitle = styled.h1`
  margin: auto;
  width: 300px;
  text-align: center;
  padding: 100px 0 50px 0;
`;

const InputWrapper = styled.div`
  margin: auto;
  margin-bottom: 20px;
  width: 300px;
`;

const LoginButton = styled(Button)`
  background-color: rgba(50, 92, 62, 0.5);
  border: none;
  width: 100%;
`;

const SignupBtn = styled.a`
  color: grey;
  padding-top: 15px;
`;

const ButtonWrapper = styled.div`
  margin: auto;
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = () => {
  // const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, []);
  const onChangePwd = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    // setIsLoggedIn(true);
    // dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <>
      <LoginTitle>로그인</LoginTitle>
      <Form onFinish={onSubmitForm}>
        <InputWrapper>
          <Input
            name="user-id"
            value={id}
            onChange={onChangeId}
            placeholder="아이디를 입력해주세요."
            size="large"
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Input.Password
            name="user-password"
            value={password}
            onChange={onChangePwd}
            placeholder="비밀번호를 입력해주세요."
            size="large"
            required
          />
        </InputWrapper>
        <ButtonWrapper>
          <LoginButton type="primary" htmlType="submit" loading={false}>
            로그인
          </LoginButton>
          <Link href="/signup">회원가입</Link>
        </ButtonWrapper>
      </Form>
    </>
  );
};

export default LoginForm;
