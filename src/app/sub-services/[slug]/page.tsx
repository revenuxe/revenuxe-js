import SupportSolutionDetail from "@/page-views/SupportSolutionDetail";
import { getSupportSolutionPage } from "@/data/supportSolutionPages";
import { redirect } from "next/navigation";

const legacySubServiceRedirects: Record<string, string> = {
  "ab-testing": "/services/conversion-platforms",
  "ai-advertising": "/services/ai-systems",
  "ai-blog-writing": "/services/ai-content-systems",
  "ai-content-generation": "/services/ai-content-systems",
  "ai-seo-automation": "/services/ai-content-systems",
  "automated-seo-audits": "/services/platform-modernization",
  "blog-writing": "/services/cms-website-development",
  "community-management": "/services/automation-engineering",
  "content-planning": "/services/cms-website-development",
  "conversion-design": "/services/landing-page-development",
  "conversion-optimization": "/services/conversion-platforms",
  "durable-ai": "/services/website-development",
  "framer-development": "/services/website-development",
  "google-ads": "/services/conversion-platforms",
  "hostinger-ai": "/services/website-development",
  "keyword-strategy": "/services/website-development",
  "landing-analytics": "/services/data-dashboard-development",
  "lead-forms": "/services/landing-page-development",
  "link-building": "/services/website-development",
  "meta-ads": "/services/conversion-platforms",
  "on-page-seo": "/services/website-development",
  "paid-social": "/services/conversion-platforms",
  "platform-optimization": "/services/performance-engineering",
  "retargeting": "/services/conversion-platforms",
  "technical-seo": "/services/platform-modernization",
  "video-advertising": "/services/enterprise-websites",
  "webflow-development": "/services/website-development",
  "wix-ai": "/services/website-development",
  "wordpress-ai": "/services/cms-website-development",
};

export default async function SubServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolved = await params;
  const legacyRedirect = legacySubServiceRedirects[resolved.slug];
  if (legacyRedirect) {
    redirect(legacyRedirect);
  }
  if (getSupportSolutionPage(resolved.slug)) {
    return <SupportSolutionDetail slug={resolved.slug} />;
  }
  redirect("/services");
}

