 "use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";

const CTA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
  return (
    <section className="py-14 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display leading-tight font-bold">
              Build Your Next Product With Revenuxe
            </h2>
            <p className="mt-4 text-muted-foreground">
              Bring us your SaaS idea, AI workflow, internal platform, or modernization challenge. We will help shape it into production-ready software.
            </p>
          </div>

          {/* Right: contact info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider">Phone</p>
              <a href="tel:+919886285028" className="text-muted-foreground hover:text-accent transition-colors">
                +91 9886285028
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider">Email</p>
              <a href="mailto:revenuxe@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                revenuxe@gmail.com
              </a>
            </div>
            <Button 
              size="lg" 
              className="rounded-full px-8 py-6 text-base font-semibold text-primary-foreground"
              style={{ background: "var(--brand-gradient)" }}
              onClick={() => setDialogOpen(true)}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default CTA;
