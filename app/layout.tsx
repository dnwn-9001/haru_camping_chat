"use client";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Switch, Row, Col } from "antd";
import UserIcon from "components/user/UserIcon";
import StoreProvider from "app/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
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
                    <Image
                      src="/images/logo.png"
                      width={130}
                      height={90}
                      alt="하루캠핑 로고"
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
                  paddingRight: "30px",
                }}
              >
                <UserIcon />
              </Col>
            </Row>
          </NavBar>
          {children}
        </Body>
      </html>
    </StoreProvider>
  );
}

const Body = styled.body`
  margin: 0;
  height: 100vh;
`;

const NavBar = styled.div`
  position: sticky;
  top: 0px;
`;

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
