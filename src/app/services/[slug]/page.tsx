import SoftwareServiceDetail from "@/page-views/SoftwareServiceDetail";
import { getSoftwareServicePage } from "@/data/softwareServicePages";
import { redirect } from "next/navigation";

const legacyServiceRedirects: Record<string, string> = {
  "ai-webapp": "/services/web-app-development",
  "ai-website": "/services/website-development",
  analytics: "/services/data-dashboard-development",
  "basic-package": "/services/website-development",
  branding: "/services/enterprise-websites",
  "content-marketing": "/services/cms-website-development",
  ecommerce: "/services/ecommerce-development",
  "email-marketing": "/services/automation-engineering",
  "landing-pages": "/services/landing-page-development",
  migration: "/services/platform-modernization",
  "performance-marketing": "/services/performance-engineering",
  seo: "/services/website-development",
  "social-media": "/services/enterprise-websites",
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

