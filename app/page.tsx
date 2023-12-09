"use client";
import React, { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";

const MainPageSection = styled.section`
  width: 100%;
  position: fixed;
  top: 70px;
`;

const ImageWrap = styled.div`
  height: 100vh;
`;

const ParallaxImageCommon = styled.div`
  position: fixed;
  width: 100%;
  height: inherit;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  &:nth-child(1) {
    background-image: url(/images/004.png);
  }

  &:nth-child(2) {
    background-image: url(/images/005.png);
  }

  &:nth-child(3) {
    background-image: url(/images/006.png);
  }

  &:nth-child(4) {
    background-image: url(/images/007.png);
  }

  &:nth-child(5) {
    background-image: url(/images/008.png);
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
`;

const PhraseWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const PhraseImg = styled.img`
  width: 70%;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const BtnImgCommon = styled.img`
  background-color: white;
  width: 120px;
  height: 120px;
  border-radius: 20%;
  cursor: pointer;
`;

const Home = () => {
  const [scrollNum, setScrollNum] = useState(0);

  useEffect(() => {
    const allParallaxImage = document.querySelectorAll(
      `${ParallaxImageCommon}`
    );
    const totalNum = allParallaxImage.length;

    // window.addEventListener("scroll", () => {
    //   setScrollNum(window.scrollY);

    //   allParallaxImage.forEach((item, index) => {
    //     item.style.transform = `perspective(500px) translate3d(0,0, ${
    //       scrollNum / (2 * (totalNum - index))
    //     }px)`;
    //   });
    // });
  }, [scrollNum]);

  return (
    <>
      <MainPageSection>
        <ImageWrap>
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
            <PhraseImg
              src="/images/main_phrase.png"
              alt="집에서 놀고 있는 캠핑 용품으로 용돈 벌어요!"
            />
          </PhraseWrap>
          <BtnWrap>
            <BtnImgCommon src="/images/btn_rental.png" alt="대여해요" />
            <BtnImgCommon src="/images/btn_vote.png" alt="익명투표" />
          </BtnWrap>
        </SubPageInnerWrap>
      </SubPageSection>
    </>
  );
};

export default Home;
