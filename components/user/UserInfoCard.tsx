import Image from "next/image";
import { useAppSelector } from "@/store/hooks";
import {
  selectEmail,
  selectAvatarUrl,
  selectName,
} from "@/store/features/user/userSlice";

const UserInfoCard = () => {
  const email = useAppSelector(selectEmail);
  const avatarUrl = useAppSelector(selectAvatarUrl);
  const name = useAppSelector(selectName);
  return (
    <>
      <Image
        src={avatarUrl ? avatarUrl : "/images/userIcon.png"}
        width={60}
        height={60}
        alt="profile image"
        style={{ borderRadius: "50%" }}
      />
      <p style={{ margin: "auto", marginTop: "16px", fontSize: "xx-large" }}>
        {name}
      </p>
      <p
        style={{
          marginTop: "8px",
          marginBottom: "20px",
          fontSize: "medium",
          color: "#839192",
        }}
      >
        {email}
      </p>
    </>
  );
};

export default UserInfoCard;
