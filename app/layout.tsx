"use client";
import { gamja_flower } from "./fonts";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Switch, Row, Col } from "antd";
import UserIcon from "components/user/UserIcon";
import StoreProvider from "app/StoreProvider";
import { useAppDispatch } from "store/hooks";
import { userLoggedIn, userLoggedOut } from "store/features/user/authSlice";
import { setUserInfo } from "store/features/user/userSlice";
import GetUserInfo from "utils/getUserInfo";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <Layout>{children}</Layout>
    </StoreProvider>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authToken = window.localStorage.getItem("oauth_provider_token");
    if (authToken) {
      dispatch(userLoggedIn());
      switch (pathname) {
        case "/login":
          dispatch(setUserInfo(GetUserInfo()));
          router.push("/profile");
          break;
        default:
          dispatch(setUserInfo(GetUserInfo()));
          break;
      }
    } else {
      dispatch(userLoggedOut());
      switch (pathname) {
        case "/profile":
          router.push("/login");
          break;
        case "/chat":
          router.push("/login");
          break;
        default:
          break;
      }
    }
  }, [dispatch, pathname, router]);

  return (
    <html lang="en">
      <head>
        <title>Haru Camping</title>
      </head>
      <Body className={gamja_flower.className}>
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
