import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://vifbaselokneezcalqdb.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpZmJhc2Vsb2tuZWV6Y2FscWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NjA0MDQsImV4cCI6MjAxOTQzNjQwNH0.seSu2UsNpRJn9l29OZe6K0IOJHFkoLrdA0Ssyr1ZldA";

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export { supabase };
