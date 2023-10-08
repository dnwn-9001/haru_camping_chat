import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Switch, Row, Col } from "antd";
import styled from "styled-components";
// import { useSelector } from "react-redux";

const NavBar = styled.div`
  position: sticky;
  top: 0px;
`;

const AppLayout = ({ children }) => {
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <NavBar>
      <Row>
        <Col
          xs={2}
          md={2}
          style={{
            margin: "auto",
            paddingLeft: "20px",
          }}
        >
          <div>
            <Switch defaultChecked onChange={onChange} />
          </div>
        </Col>

        <Col
          xs={20}
          md={20}
          style={{
            marginTop: "14px",
            textAlign: "center",
          }}
        >
          <div>
            <Link href="/">
              <a>
                <img
                  src="/images/logo.png"
                  alt="하루캠핑 로고"
                  style={{ width: "130px" }}
                />
              </a>
            </Link>
          </div>
        </Col>

        <Col
          xs={2}
          md={2}
          style={{
            margin: "auto",
            textAlign: "right",
            paddingRight: "20px",
          }}
        >
          {/* {isLoggedIn ? (
            <Link href="/login">
              <a>
                <Avatar
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: "#87d068",
                  }}
                />
              </a>
            </Link>
          ) : (
            <Link href="/profile">
              <a>
                <Avatar
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: "#87d068",
                  }}
                />
              </a>
            </Link>
          )} */}
        </Col>
      </Row>

      <Row gutter={8}>
        <Col xs={2} sm={6} md={4} />
        <Col xs={20} sm={12} md={16}>
          {children}
        </Col>
        <Col xs={2} sm={6} md={4} />
      </Row>
    </NavBar>
  );
};

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
