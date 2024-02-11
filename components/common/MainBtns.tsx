import styled from "styled-components";
import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";

interface Props {
  src: string;
  alt: string;
}

const MainBtns = ({ src, alt }: Props) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const onBtnClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const altPhrase = target.alt;
    switch (altPhrase) {
      case "채팅해요":
        if (isLoggedIn) router.push("/chat");
        else {
          alert("로그인 후 이용 가능한 서비스입니다.");
          router.push("/login");
        }
        break;
      case "익명투표":
        alert("'익명투표 게시판'은 만들어지고 있는 중입니다.");
    }
  };
  return (
    <BtnImg
      width={120}
      height={120}
      src={src}
      alt={alt}
      priority={true}
      onClick={onBtnClick}
    />
  );
};

const BtnImg = styled(Image)`
  background-color: white;
  border-radius: 20%;
  cursor: pointer;
`;

export default MainBtns;
