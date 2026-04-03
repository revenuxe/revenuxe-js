import "server-only";
import { headers } from "next/headers";

import { SITE_URL_FALLBACK } from "@/lib/seo/siteMetadata";

/**
 * Origin for the current request (matches Host / X-Forwarded-Host).
 * Fixes “canonical points to redirect” when www and apex both serve HTML but canonical used only apex.
 */
export async function getCanonicalOrigin(): Promise<string> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  if (!host) return SITE_URL_FALLBACK;

  const first = host.split(",")[0].trim();
  if (
    first.includes("localhost") ||
    first.startsWith("127.") ||
    first.startsWith("192.168.")
  ) {
    return `http://${first}`;
  }
  return `https://${first}`;
}

export async function absoluteCanonicalUrl(pathname: string): Promise<string> {
  const origin = await getCanonicalOrigin();
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${origin}${path}`;
}
