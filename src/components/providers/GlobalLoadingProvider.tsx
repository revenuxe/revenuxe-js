"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type GlobalLoadingContextValue = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  setLoading: (v: boolean) => void;
};

const GlobalLoadingContext = createContext<GlobalLoadingContextValue | null>(null);

export function useGlobalLoading() {
  const ctx = useContext(GlobalLoadingContext);
  if (!ctx) throw new Error("useGlobalLoading must be used within GlobalLoadingProvider");
  return ctx;
}

export function GlobalLoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = useCallback((v: boolean) => setIsLoading(v), []);
  const startLoading = useCallback(() => setIsLoading(true), []);
  const stopLoading = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    // Internal route changes: hide overlay shortly after navigation starts.
    // `pathname` changes after routing; this keeps UX smooth.
    if (!isLoading) return;
    const t = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(t);
  }, [pathname, isLoading]);

  useEffect(() => {
    const handleSubmit = () => {
      setIsLoading(true);
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // If clicking a link (internal or external), show loader.
      const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
      if (anchor) {
        const href = anchor.getAttribute("href") || "";
        if (!href) return;

        // Ignore anchors used for scrolling.
        if (href.startsWith("#")) return;

        // mailto/tel: opening native apps; still safe to show loader briefly.
        if (href.startsWith("mailto:") || href.startsWith("tel:")) {
          setIsLoading(true);
          return;
        }

        // Internal navigation
        if (href.startsWith("/")) {
          setIsLoading(true);
          return;
        }

        // External navigation
        if (href.startsWith("http://") || href.startsWith("https://")) {
          try {
            const url = new URL(href);
            if (url.origin !== window.location.origin) {
              setIsLoading(true);
            }
          } catch {
            // If URL parsing fails, don't block navigation.
          }
        }
      }

      // Also show on any submit buttons not caught by form submit event.
      const btn = target.closest('button[type="submit"]') as HTMLButtonElement | null;
      if (btn) setIsLoading(true);
    };

    document.addEventListener("submit", handleSubmit);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("submit", handleSubmit);
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  const value = useMemo(
    () => ({ isLoading, startLoading, stopLoading, setLoading }),
    [isLoading, startLoading, stopLoading, setLoading],
  );

  return (
    <GlobalLoadingContext.Provider value={value}>
      {children}
      {isLoading ? (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center bg-background/70 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse" />
              <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent animate-spin" />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold">Just a moment...</div>
              <div className="text-xs text-muted-foreground">We are preparing your request</div>
            </div>
          </div>
        </div>
      ) : null}
    </GlobalLoadingContext.Provider>
  );
}

