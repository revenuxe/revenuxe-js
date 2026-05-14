import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";

type RecentProject = {
  id: string;
  title: string;
  info?: string | null;
  short_description?: string | null;
  logo_url?: string | null;
  website_url?: string | null;
};

const Index = ({ recentProjects }: { recentProjects: RecentProject[] }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <RecentProjects projects={recentProjects} />
      <Stats />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
