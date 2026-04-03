import type { Metadata } from "next";
import Index from "@/page-views/Index";
import { HomeStructuredData } from "@/components/HomeStructuredData";
import { supabaseServer } from "@/integrations/supabase/server";
import { getCanonicalOrigin } from "@/lib/seo/canonical";
import {
  defaultSiteDescription,
  defaultSiteKeywords,
  defaultSiteTitle,
} from "@/lib/seo/siteMetadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getCanonicalOrigin();
  return {
    metadataBase: new URL(origin),
    title: defaultSiteTitle,
    description: defaultSiteDescription,
    keywords: defaultSiteKeywords.split(", ").filter(Boolean),
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: defaultSiteTitle,
      description: defaultSiteDescription,
      url: origin,
      siteName: "Revenuxe",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: defaultSiteTitle,
      description: defaultSiteDescription,
      site: "@revenuxe",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function HomePage() {
  let recentProjects: any[] = [];
  try {
    const { data } = await supabaseServer
      .from("projects" as any)
      .select("*")
      .order("created_at", { ascending: false })
      .limit(9);

    const raw = (data as any) || [];
    const hasPublishedField = raw.some((p: any) =>
      Object.prototype.hasOwnProperty.call(p, "published")
    );

    const isPublished = (v: any) => {
      if (v === true) return true;
      if (v === 1) return true;
      if (v === "1") return true;
      if (typeof v === "string") {
        const s = v.toLowerCase();
        return s === "true" || s === "t" || s === "yes" || s === "y";
      }
      return false;
    };

    recentProjects = hasPublishedField
      ? raw.filter((p: any) => isPublished(p.published))
      : raw;
  } catch (error) {
    console.error("Error fetching recent projects:", error);
    recentProjects = [];
  }

  return (
    <>
      <HomeStructuredData />
      <Index recentProjects={recentProjects} />
    </>
  );
}
