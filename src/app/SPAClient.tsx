"use client";

import { useEffect, useState } from "react";

export default function SPAClient() {
  // Phase 2: route parity only.
  // We temporarily mount the existing SPA (react-router) inside Next routes.
  // Later phases will remove the SPA mounting and replace pages with server-rendered Next routes.
  // Important: Next prerenders client components during `next build`.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return null;
}

