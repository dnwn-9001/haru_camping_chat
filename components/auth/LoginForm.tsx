import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { supabase } from "@/src/lib/supabase";
import { Provider } from "@supabase/supabase-js";

const LoginForm = () => {
  const handleSignIn = (provider: Provider) => {
    return () => {
      signIn(provider);
    };
  };

  async function signIn(provider: Provider) {
    await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo:
          process.env.NODE_ENV === "production"
            ? "http://haru-chat.o-r.kr/profile"
            : "http://localhost:3000/profile",
      },
    });
  }

  return (
    <LoginBtnWrap>
      <LoginTitle>로그인</LoginTitle>
      <ButtonWrapper>
        <Image
          src="https://haru-camping-chat-s3.s3.ap-northeast-2.amazonaws.com/kakao_login_large_narrow.png"
          width={300}
          height={65}
          alt="Sign in with KaKao"
          style={{ cursor: "pointer" }}
          onClick={handleSignIn("kakao")}
        />
        <GoogleBtnImg
          src="https://haru-camping-chat-s3.s3.ap-northeast-2.amazonaws.com/web_light_sq_SI%403x.png"
          width={300}
          height={65}
          alt="Sign in with Google"
          style={{ cursor: "pointer" }}
          onClick={handleSignIn("google")}
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
