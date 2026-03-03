import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";

const CTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-accent/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Left - CTA Text */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground">
                <span className="italic">Find</span> your perfect strategy today. Contact us for expert marketing guidance!
              </h2>

              <Button
                size="lg"
                className="px-10 py-6 text-base font-bold rounded-full group shadow-lg shadow-primary/20"
                style={{ background: "var(--brand-gradient)" }}
                onClick={() => setDialogOpen(true)}
              >
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Address</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Revenuxe Digital Marketing<br />
                  Bangalore, India
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Phone</h4>
                <a href="tel:+919886285028" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +91 9886285028
                </a>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-2">Email</h4>
                <a href="mailto:revenuxe@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  revenuxe@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
