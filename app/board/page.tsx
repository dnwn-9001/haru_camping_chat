"use client";
import React from "react";
import Head from "next/head";
import styled from "styled-components";
import InputSearchBox from "components/common/Input";
import WriteBtn from "components/common/WriteBtn";

const RowDirection = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

const TitleAndBtnsWrap = styled(RowDirection)`
  justify-content: space-between;
`;

const BtnsWrap = styled(RowDirection)`
  justify-content: flex-end;
`;

const BoardTitle = styled.h1`
  margin: 0;
  width: 115px;
  text-align: left;
  border-bottom: 2px solid;
`;

const Board = () => {
  return (
    <>
      <Head>
        <title>게시판 | Haru Camping</title>
      </Head>
      <TitleAndBtnsWrap>
        <BoardTitle>대여해요</BoardTitle>
        <BtnsWrap>
          <WriteBtn />
          <InputSearchBox></InputSearchBox>
        </BtnsWrap>
      </TitleAndBtnsWrap>
    </>
  );
};

export default Board;
