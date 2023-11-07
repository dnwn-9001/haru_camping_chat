import React from "react";
import styled from "styled-components";
import { List } from "antd";

interface PostedItem {
  title: string;
  content: string;
}

interface Props {
  header: string;
  data: PostedItem[];
}

const StoredList = styled(List)`
  margin-top: 50px;
`;

const StoredPost = ({ header, data }: Props) => {
  return (
    <>
      <StoredList
        itemLayout="vertical"
        size="small"
        header={<h1>{header}</h1>}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={data}
        renderItem={(item: PostedItem) => (
          <List.Item
            key={item.title}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              title={<a>{item.title}</a>}
              description={item.content}
            />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
};

export default StoredPost;
