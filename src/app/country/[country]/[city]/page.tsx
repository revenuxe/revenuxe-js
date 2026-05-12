import type { Metadata } from "next";
import CityCountryPage from "@/page-views/CityCountryPage";
import { fetchPublishedProjects } from "@/lib/projectsServer";
import { getCanonicalOrigin } from "@/lib/seo/canonical";
import { getCityCountrySeo } from "@/lib/seo/locationPages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; city: string }> | { country: string; city: string };
}): Promise<Metadata> {
  const resolved = await params;
  const country = (resolved.country || "").toLowerCase();
  const city = (resolved.city || "").toLowerCase();
  const origin = await getCanonicalOrigin();
  const seo = getCityCountrySeo(country, city);

  return {
    metadataBase: new URL(origin),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.split(", ").filter(Boolean),
    alternates: {
      canonical: `/country/${country}/${city}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${origin}/country/${country}/${city}`,
      siteName: "Revenuxe",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      site: "@revenuxe",
    },
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function CityCountryRoutePage({
  params,
}: {
  params: Promise<{ country: string; city: string }> | { country: string; city: string };
}) {
  const resolved = await params;
  const recentProjects = await fetchPublishedProjects(8);
  return <CityCountryPage country={resolved.country} city={resolved.city} recentProjects={recentProjects} />;
}

