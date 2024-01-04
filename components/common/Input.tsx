import React from "react";
import { Input } from "antd";

const InputSearchBox = () => {
  return (
    <Input.Search
      placeholder="검색할 제품"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  );
};

const onSearch = (value: string | number) => console.log(value);

export default InputSearchBox;
