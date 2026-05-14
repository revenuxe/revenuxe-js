import type { Metadata } from "next";
import PrivacyPolicy from "@/page-views/PrivacyPolicy";
import { getCanonicalOrigin } from "@/lib/seo/canonical";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getCanonicalOrigin();

  return {
    metadataBase: new URL(origin),
    title: "Privacy Policy - How Revenuxe Protects Your Data",
    description:
      "Read Revenuxe's privacy policy and how we protect personal information across our software development services.",
    alternates: {
      canonical: "/privacy",
    },
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
  };
}

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}

