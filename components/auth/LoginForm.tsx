import React, { useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import { supabase } from "src/lib/supabase";
import { makeStore, AppStore } from "store/store";
import { useAppSelector, useAppDispatch, useAppStore } from "store/hooks";

const LoginTitle = styled.h1`
  margin: auto;
  width: 300px;
  text-align: center;
  padding: 100px 0 50px 0;
`;

const ButtonWrapper = styled.div`
  margin: auto;
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
`;

const GoogleBtnImg = styled(Image)`
  margin-top: 20px;
`;

const LoginForm = () => {
  async function signInWithKakao() {
    await supabase.auth.signInWithOAuth({
      provider: "kakao",
    });
  }

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  }

  return (
    <>
      <LoginTitle>로그인</LoginTitle>
      <ButtonWrapper>
        <Image
          src="/images/kakao_login_large_wide.png"
          width={300}
          height={60}
          alt="Sign in with KaKao"
          style={{ cursor: "pointer" }}
          onClick={signInWithKakao}
        />
        <GoogleBtnImg
          src="/images/web_light_sq_SI@3x.png"
          width={300}
          height={60}
          alt="Sign in with Google"
          style={{ cursor: "pointer" }}
          onClick={signInWithGoogle}
        />
      </ButtonWrapper>
    </>
  );
};

export default LoginForm;
