import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Switch, Row, Col } from "antd";
import UserIcon from "@/components/user/UserIcon";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setLightState } from "@/store/features/design/lightControlSlice";

const NavBar = () => {
  const dispatch = useAppDispatch();
  const { isBright } = useAppSelector((state) => state.lightControl);
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const [scrollNum, setScrollNum] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollNum(window.scrollY);

      const currentNavBar = navBarRef.current as HTMLElement;

      if (scrollNum > 0) {
        currentNavBar.style.backgroundColor = "transparent";
      }
    });
  }, [scrollNum]);

  const onChange = (checked: boolean) => {
    dispatch(setLightState(checked));
  };

  return (
    <NavBarWrap ref={navBarRef} $bright={isBright} $path={pathname!}>
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
                src="https://haru-camping-chat-s3.s3.ap-northeast-2.amazonaws.com/logo.png"
                width={150}
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
    </NavBarWrap>
  );
};

const NavBarWrap = styled.div<{ $bright: boolean; $path: string }>`
  position: ${({ $path }) => ($path === "/" ? "sticky" : "absolute")};
  top: 0px;
  ${({ $path }) => ($path !== "/" ? "right: 0px; left:0px;" : "")};
  background-color: ${({ $path, $bright }) =>
    $path !== "/"
      ? $bright
        ? "#d4efdf"
        : "#212f3c"
      : $bright
      ? "#fff"
      : "#212f3c"};
  transition: var(--bg-color-transition);
  z-index: 10;
`;

export default NavBar;
