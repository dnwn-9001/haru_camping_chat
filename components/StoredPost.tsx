import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { List } from "antd";

const StoredList = styled(List)`
  margin-top: 50px;
`;

const StoredPost = ({ header, data }) => {
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
        renderItem={(item) => (
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
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </>
  );
};

StoredPost.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default StoredPost;
