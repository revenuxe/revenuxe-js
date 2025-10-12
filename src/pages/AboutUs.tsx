import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Target, Users, Zap } from "lucide-react";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us - ArrowMind Digital Marketing";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">ArrowMind</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your Trusted Partner in Digital Excellence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 mb-4">
              ArrowMind was founded with a simple yet powerful vision: to help businesses navigate the complex 
              world of digital marketing with precision and creativity. Like an arrow hitting its target, we focus 
              on delivering results that matter to your business.
            </p>
            <p className="text-foreground/80 mb-4">
              In today's fast-paced digital landscape, businesses need more than just a presence online—they need 
              a strategic partner who understands their goals and can turn them into reality. That's where we come in.
            </p>
            <p className="text-foreground/80">
              Our team of experienced digital marketers, designers, and strategists work together to create 
              customized solutions that drive growth, engagement, and success for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Results-Driven</h3>
              <p className="text-muted-foreground">
                We focus on measurable outcomes and ROI, ensuring every campaign delivers tangible results for your business.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Client-Centric</h3>
              <p className="text-muted-foreground">
                Your success is our success. We build lasting partnerships based on trust, transparency, and exceptional service.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We stay ahead of trends and leverage cutting-edge strategies to keep your brand at the forefront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">What We Do</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Digital Strategy</h3>
                <p className="text-foreground/80">
                  We craft comprehensive digital strategies tailored to your business objectives and target audience.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Brand Building</h3>
                <p className="text-foreground/80">
                  From brand identity to online reputation, we help establish and strengthen your brand presence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Growth Marketing</h3>
                <p className="text-foreground/80">
                  Through SEO, PPC, social media, and content marketing, we drive sustainable growth for your business.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Creative Solutions</h3>
                <p className="text-foreground/80">
                  Our creative team delivers compelling content, stunning designs, and engaging campaigns that resonate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-foreground/80">
              To empower businesses with innovative digital marketing solutions that drive measurable growth, 
              build meaningful connections, and create lasting impact in the digital world.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
