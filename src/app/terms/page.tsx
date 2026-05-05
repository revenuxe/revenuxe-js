import type { Metadata } from "next";
import TermsAndConditions from "@/page-views/TermsAndConditions";
import { getCanonicalOrigin } from "@/lib/seo/canonical";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await getCanonicalOrigin();

  return {
    metadataBase: new URL(origin),
    title: "Terms & Conditions - Revenuxe Service Agreement",
    description:
      "Read Revenuxe's terms and conditions for digital marketing services, payment terms, and client responsibilities.",
    alternates: {
      canonical: "/terms",
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

export default function TermsPage() {
  return <TermsAndConditions />;
}

