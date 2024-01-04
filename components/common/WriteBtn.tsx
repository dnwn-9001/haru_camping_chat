import React from "react";
import { Button } from "antd";
import styled from "styled-components";

const BtnStyle = styled(Button)`
  margin-right: 8px;
`;

const WriteBtn = () => {
  return <BtnStyle>글쓰기</BtnStyle>;
};

export default WriteBtn;
