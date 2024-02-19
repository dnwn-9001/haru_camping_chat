import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

supabase.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN") {
    if (session && session.provider_token) {
      window.localStorage.setItem(
        "oauth_provider_token",
        session.provider_token
      );
      const { full_name, email, avatar_url } = session.user.user_metadata;
      window.localStorage.setItem("userEmail", email);
      window.localStorage.setItem("userName", full_name);
      window.localStorage.setItem("userAvatar", avatar_url);
    }

    if (session && session.provider_refresh_token) {
      window.localStorage.setItem(
        "oauth_provider_refresh_token",
        session.provider_refresh_token
      );
    }
  }

  if (event === "SIGNED_OUT") {
    window.localStorage.removeItem("oauth_provider_token");
    window.localStorage.removeItem("oauth_provider_refresh_token");
    window.localStorage.removeItem("userEmail");
    window.localStorage.removeItem("userName");
    window.localStorage.removeItem("userAvatar");
  }
});

export { supabase };
