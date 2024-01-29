import { userState } from "store/features/user/userSlice";

export default function GetUserInfo() {
  const userToken: string = window.localStorage.getItem(
    "sb-vifbaselokneezcalqdb-auth-token"
  )!;
  const { user } = JSON.parse(userToken);
  const { avatar_url, email, full_name } = user.user_metadata;
  const userData: userState = {
    avatar_url: avatar_url,
    email: email,
    full_name: full_name,
  };

  return userData;
}
