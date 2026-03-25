"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";

export default function ServiceDetailDialogLauncher() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button
        size="lg"
        className="rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base font-semibold text-primary-foreground"
        style={{ background: "var(--brand-gradient)" }}
        onClick={() => setDialogOpen(true)}
      >
        Start Your Project
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}

