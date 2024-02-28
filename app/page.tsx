"use client";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import MainBtns from "@/components/common/MainBtns";

const Home = () => {
  const [scrollNum, setScrollNum] = useState(0);
  const ImageWrapRef = useRef<HTMLDivElement | null>(null);
  const { isBright } = useAppSelector((state) => state.lightControl);

  useEffect(() => {
    const childNodes = ImageWrapRef.current
      ?.childNodes as NodeListOf<HTMLElement>;
    const totalNum = childNodes?.length;

    window.addEventListener("scroll", () => {
      setScrollNum(window.scrollY);

      childNodes?.forEach((item, index) => {
        item.style.transform = `perspective(500px) translate3d(0,0, ${
          scrollNum / (2 * (totalNum - index))
        }px)`;
      });
    });
  }, [scrollNum]);

  return (
    <>
      <MainPageSection>
        <ImageWrap ref={ImageWrapRef} $bright={isBright}>
          <ParallaxImageCommon></ParallaxImageCommon>
          <ParallaxImageCommon></ParallaxImageCommon>
          <ParallaxImageCommon></ParallaxImageCommon>
          <ParallaxImageCommon></ParallaxImageCommon>
          <ParallaxImageCommon></ParallaxImageCommon>
        </ImageWrap>
      </MainPageSection>
      <SubPageSection>
        <SubPageInnerWrap>
          <PhraseWrap>
            <Image
              src="https://haru-camping-chat-s3.s3.ap-northeast-2.amazonaws.com/main_phrase.png"
              width={400}
              height={300}
              alt="지역별 실시간 캠핑 정보 공유 '하루캠핑챗'"
              priority={true}
            />
          </PhraseWrap>
          <BtnWrap>
            <MainBtns
              src="https://haru-camping-chat-s3.s3.ap-northeast-2.amazonaws.com/btn_chat.png"
              alt="채팅해요"
            />
            <MainBtns
              src="https://haru-camping-chat-s3.s3.ap-northeast-2.amazonaws.com/btn_vote.png"
              alt="익명투표"
            />
          </BtnWrap>
        </SubPageInnerWrap>
      </SubPageSection>
    </>
  );
};

const MainPageSection = styled.section`
  width: 100%;
  position: fixed;
  top: 70px;
`;

const ImageWrap = styled.div<{ $bright: boolean }>`
  height: 100vh;
  background-color: ${({ $bright }) => ($bright ? "#fff" : "#212f3c")};
  transition: var(--bg-color-transition);
`;

const ParallaxImageCommon = styled.div`
  position: fixed;
  top: 108px;
  width: 100%;
  height: inherit;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  &:nth-child(1) {
    background-image: url(https://haru-camping-chat-s3.s3.ap-northeast-2.amazonaws.com/004.png);
  }

  &:nth-child(2) {
    background-image: url(https://haru-camping-chat-s3.s3.ap-northeast-2.amazonaws.com/005.png);
  }

  &:nth-child(3) {
    background-image: url(https://haru-camping-chat-s3.s3.ap-northeast-2.amazonaws.com/006.png);
  }

  &:nth-child(4) {
    background-image: url(https://haru-camping-chat-s3.s3.ap-northeast-2.amazonaws.com/007.png);
  }

  &:nth-child(5) {
    background-image: url(https://haru-camping-chat-s3.s3.ap-northeast-2.amazonaws.com/008.png);
  }
`;

const SubPageSection = styled.section`
  z-index: 10;
  padding-top: 100vh;
  padding-bottom: 60px;
  width: 700px;
  margin: auto;
`;

const SubPageInnerWrap = styled.div`
  position: relative;
  background-color: rgba(50, 92, 62, 0.5);
  height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
`;

const PhraseWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default Home;
