import AdminDashboard from "@/page-views/AdminDashboard";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

export default async function AdminDashboardPage() {
  const canonicalUrl = await absoluteCanonicalUrl("/admin/dashboard");
  return <AdminDashboard canonicalUrl={canonicalUrl} />;
}

