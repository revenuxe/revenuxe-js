import type { Metadata } from "next";
import Looplic from "@/page-views/Looplic";
import { HomeStructuredData } from "@/components/HomeStructuredData";
import { supabaseServer } from "@/integrations/supabase/server";
import { getCanonicalOrigin } from "@/lib/seo/canonical";
import { normalizeProjectLinks } from "@/lib/projectsServer";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getCanonicalOrigin();

  const description = "Transform your brand with AI Media Solutions - AI-powered content creation for D2C, SaaS, creator-led and enterprise brands. Create high-performing media that drives engagement and conversion.";
  const keywords = [
    "AI media solutions",
    "AI content creation",
    "high-performing content",
    "AI-powered marketing",
    "digital media solutions",
    "AI media studio",
    "content creation AI",
    "D2C marketing",
    "SaaS content",
    "enterprise media",
    "AI-driven content",
    "brand content strategy",
    "conversion-focused content",
    "digital content solutions",
    "media automation",
    "AI marketing platform"
  ];

  return {
    metadataBase: new URL(origin),
    title: "AI Media Solutions - High-Performing Content Creation | Revenuxe",
    description,
    keywords,
    alternates: {
      canonical: "/looplic",
    },
    openGraph: {
      title: "AI Media Solutions - High-Performing Content Creation",
      description,
      url: `${origin}/looplic`,
      siteName: "Revenuxe",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Media Solutions - High-Performing Content Creation",
      description,
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

export default async function LooplicPage() {
  let recentProjects: any[] = [];
  try {
    const { data: raw } = await supabaseServer
      .from("projects")
      .select("id, title, info, short_description, logo_url, website_url, published")
      .order("created_at", { ascending: false })
      .limit(6);

    const hasPublishedField = raw?.some((p: any) =>
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
    recentProjects = normalizeProjectLinks(recentProjects);
  } catch (error) {
    console.error("Error fetching recent projects:", error);
    recentProjects = [];
  }

  return <Looplic recentProjects={recentProjects} />;
}