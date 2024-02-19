"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import NavBar from "@/components/common/NavBar";
import StoreProvider from "@/components/providers/StoreProvider";
import { useAppDispatch } from "@/store/hooks";
import { userLoggedIn, userLoggedOut } from "@/store/features/user/authSlice";
import { setUserInfo } from "@/store/features/user/userSlice";
import GetUserInfo from "@/utils/getUserInfo";
import { useRouter, usePathname } from "next/navigation";
import { SocketProvider } from "@/components/providers/SocketProvider";
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
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const authToken = window.localStorage.getItem("oauth_provider_token");
    if (authToken) {
      dispatch(userLoggedIn());
      switch (pathname) {
        case "/login":
          dispatch(setUserInfo(GetUserInfo()!));
          router.push("/profile");
          break;
        default:
          dispatch(setUserInfo(GetUserInfo()!));
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
        <title>Haru Camping Chat</title>
      </head>
      <Body>
        <NavBar />
        {children}
      </Body>
    </html>
  );
}

const Body = styled.body`
  margin: 0;
  height: 100vh;
`;
