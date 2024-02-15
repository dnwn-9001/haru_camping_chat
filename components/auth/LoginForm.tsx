import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { supabase } from "@/src/lib/supabase";
import { Provider } from "@supabase/supabase-js";

const LoginForm = () => {
  // async function signIn(provider: Provider,  redirectUrl: string) {
  //   await supabase.auth.signInWithOAuth({
  //     provider: provider,
  //     options: {
  //       redirectTo: redirectUrl,
  //     },
  //   });
  // }

  async function signInWithKakao() {
    await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: "http://localhost:3000/profile",
      },
    });
  }

  async function signInWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/profile",
      },
    });
  }

  return (
    <LoginBtnWrap>
      <LoginTitle>로그인</LoginTitle>
      <ButtonWrapper>
        <Image
          src="/images/kakao_login_large_narrow.png"
          width={300}
          height={65}
          alt="Sign in with KaKao"
          style={{ cursor: "pointer" }}
          onClick={signInWithKakao}
        />
        <GoogleBtnImg
          src="/images/web_light_sq_SI@3x.png"
          width={300}
          height={65}
          alt="Sign in with Google"
          style={{ cursor: "pointer" }}
          onClick={signInWithGoogle}
        />
      </ButtonWrapper>
    </LoginBtnWrap>
  );
};

const LoginBtnWrap = styled.div`
  padding-top: 108px;
  display: flex;
  flex-direction: column;
`;

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

export default LoginForm;
