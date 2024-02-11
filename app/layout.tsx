"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Switch, Row, Col } from "antd";
import UserIcon from "@/components/user/UserIcon";
import StoreProvider from "@/app/StoreProvider";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { userLoggedIn, userLoggedOut } from "@/store/features/user/authSlice";
import { setUserInfo } from "@/store/features/user/userSlice";
import GetUserInfo from "@/utils/getUserInfo";
import { useRouter, usePathname } from "next/navigation";
import { SocketProvider } from "@/components/providers/SocketProvider";
import { setLightState } from "@/store/features/design/lightControlSlice";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <SocketProvider>
        <Layout>{children}</Layout>
      </SocketProvider>
    </StoreProvider>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const { isBright } = useAppSelector((state) => state.lightControl);
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

  const onChange = (checked: boolean) => {
    dispatch(setLightState(checked));
  };

  return (
    <html lang="en">
      <head>
        <title>Haru Camping</title>
      </head>
      <Body>
        <NavBar $bright={isBright} $path={pathname!}>
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
                <Link href="/" scroll={false}>
                  <Image
                    src="/images/logo.png"
                    width={130}
                    height={90}
                    alt="하루캠핑 로고"
                    priority={true}
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

const NavBar = styled.div<{ $bright: boolean; $path: string }>`
  position: sticky;
  top: 0px;
  background-color: ${({ $path, $bright }) =>
    $path === "/chat"
      ? $bright
        ? "#d4efdf"
        : "#212f3c"
      : $bright
      ? "#fff"
      : "#212f3c"};
  transition: background-color 0.5s ease;
  z-index: 10;
`;
