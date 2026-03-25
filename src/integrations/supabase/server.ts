import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

// Public anon key (same as `client.ts`). This file exists to make SSR/server components explicit.
const SUPABASE_URL = "https://fobyfercflxkwcsiliem.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvYnlmZXJjZmx4a3djc2lsaWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3MDIxMDEsImV4cCI6MjA4NzI3ODEwMX0.Qe7GJ1KdEdL0YjNOR8jjwz-TXI-9r72UT1L2vnZIlzs";

export const supabaseServer = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      // Avoid any browser storage/session behavior on the server.
      persistSession: false,
      autoRefreshToken: false,
      storage: undefined,
    },
  }
);

