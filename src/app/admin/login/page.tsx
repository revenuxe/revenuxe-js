import AdminLogin from "@/page-views/AdminLogin";
import { absoluteCanonicalUrl } from "@/lib/seo/canonical";

export default async function AdminLoginPage() {
  const canonicalUrl = await absoluteCanonicalUrl("/admin/login");
  return <AdminLogin canonicalUrl={canonicalUrl} />;
}

