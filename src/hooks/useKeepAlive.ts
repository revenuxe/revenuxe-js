import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useKeepAlive = () => {
  useEffect(() => {
    // Ping database on load to keep project active
    const ping = async () => {
      try {
        await supabase.from("articles").select("id", { count: "exact", head: true });
      } catch (e) {
        // Silent fail - this is just a keep-alive ping
      }
    };

    ping();

    // Ping every 12 hours while the tab is open
    const interval = setInterval(ping, 12 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);
};
