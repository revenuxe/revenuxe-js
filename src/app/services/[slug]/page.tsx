import SoftwareServiceDetail from "@/page-views/SoftwareServiceDetail";
import { getSoftwareServicePage } from "@/data/softwareServicePages";
import { redirect } from "next/navigation";

const legacyServiceRedirects: Record<string, string> = {
  "ai-webapp": "/services/web-app-development",
  "ai-website": "/services/website-development",
  analytics: "/marketing/analytics",
  "basic-package": "/basic-package",
  branding: "/marketing/branding",
  "content-marketing": "/marketing/content-marketing",
  ecommerce: "/marketing/ecommerce",
  "email-marketing": "/marketing/email-marketing",
  "landing-pages": "/services/landing-page-development",
  migration: "/marketing/migration",
  "performance-marketing": "/marketing/performance-marketing",
  seo: "/marketing/seo",
  "social-media": "/marketing/social-media",
  "web-development": "/services/web-app-development",
};

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;
  const legacyRedirect = legacyServiceRedirects[resolved.slug];
  if (legacyRedirect) {
    redirect(legacyRedirect);
  }
  if (getSoftwareServicePage(resolved.slug)) {
    return <SoftwareServiceDetail slug={resolved.slug} />;
  }
  redirect("/services");
}

