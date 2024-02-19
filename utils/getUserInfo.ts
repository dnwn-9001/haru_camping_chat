import { UserState } from "@/store/features/user/userSlice";

export default function GetUserInfo() {
  const userToken: string = window.localStorage.getItem(
    "oauth_provider_token"
  )!;

  if (userToken) {
    const userData: UserState = {
      avatar_url: window.localStorage.getItem("userAvatar")!,
      email: window.localStorage.getItem("userEmail")!,
      full_name: window.localStorage.getItem("userName")!,
    };

    return userData;
  }
}
