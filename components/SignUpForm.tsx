import React, { useState, useCallback } from "react";
import { Button, Form, Input, Space, Checkbox } from "antd";
import useInput from "../hooks/useInput";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
`;

const SubmitBtn = styled(Button)`
  margin-top: 20px;
`;

const SignUpForm = () => {
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) return setPasswordError(true);
    if (!term) return setTermError(true);

    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);

  return (
    <>
      <Form
        onFinish={onSubmit}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          name="name"
          label="아이디"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={id} onChange={onChangeId} />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="닉네임"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={nickname} onChange={onChangeNickname} />
        </Form.Item>

        <Form.Item
          name="password"
          label="비밀번호"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password value={password} onChange={onChangePassword} />
        </Form.Item>

        <Form.Item
          name="passwordCheck"
          label="비밀번호 확인"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <div>
            <Input.Password
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
            {passwordError && (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            )}
          </div>
        </Form.Item>

        <Checkbox checked={term} onChange={onChangeTerm}>
          약관에 동의합니다.
        </Checkbox>
        {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        <Form.Item>
          <Space>
            <SubmitBtn htmlType="submit">가입하기</SubmitBtn>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUpForm;
