import type { Metadata } from "next";
import { getCanonicalOrigin } from "@/lib/seo/canonical";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getCanonicalOrigin();

  const description = "Build practical AI software systems with Revenuxe, from assistants and workflow automation to intelligent product features and data-driven platforms.";
  const keywords = [
    "AI software development",
    "AI systems development",
    "AI assistants",
    "workflow automation",
    "AI product features",
    "AI software development company",
  ];

  return {
    metadataBase: new URL(origin),
    title: "AI Software Systems | Revenuxe",
    description,
    keywords,
    alternates: {
      canonical: "/services/ai-systems",
    },
    openGraph: {
      title: "AI Software Systems | Revenuxe",
      description,
      url: `${origin}/services/ai-systems`,
      siteName: "Revenuxe",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Software Systems | Revenuxe",
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
  redirect("/services/ai-systems");
}
