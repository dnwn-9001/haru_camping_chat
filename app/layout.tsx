"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import styled from "styled-components";
import { Avatar, Switch, Row, Col } from "antd";

const inter = Inter({ subsets: ["latin"] });

const Body = styled.body`
  margin: 0;
  height: 100vh;
`;

const NavBar = styled.div`
  position: sticky;
  top: 0px;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Haru Camping</title>
      </head>
      <Body className={inter.className}>
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
                  <img
                    src="/images/logo.png"
                    alt="하루캠핑 로고"
                    style={{ width: "130px" }}
                  />
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
                <Avatar
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: "#87d068",
                  }}
                />
        
            </Link>
          ) : (
            <Link href="/profile">
            
                <Avatar
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: "#87d068",
                  }}
                />
            </Link>
          )} */}
            </Col>
          </Row>
        </NavBar>
        {children}
      </Body>
    </html>
  );
}

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
