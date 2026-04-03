import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { homepageFAQs } from "@/data/faqData";
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
      <Stats />
      <RecentProjects projects={recentProjects} />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ items={homepageFAQs} />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
