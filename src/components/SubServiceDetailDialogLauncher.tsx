"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GetStartedDialog } from "./GetStartedDialog";

export default function SubServiceDetailDialogLauncher() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button size="lg" onClick={() => setDialogOpen(true)}>
        Start Your Project
        <ArrowRight className="ml-2" />
      </Button>

      <GetStartedDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </>
  );
}

