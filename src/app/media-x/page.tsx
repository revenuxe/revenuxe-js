import type { Metadata } from "next";
import MediaX from "@/page-views/MediaX";
import { getCanonicalOrigin } from "@/lib/seo/canonical";

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
      canonical: "/media-x",
    },
    openGraph: {
      title: "AI Media Solutions - High-Performing Content Creation",
      description,
      url: `${origin}/media-x`,
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

export default async function MediaXPage() {
  return <MediaX recentProjects={[]} />;
}
