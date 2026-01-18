import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";
import { X, Clock, Shield } from "lucide-react";
import { Button } from "./ui/button";

interface GetStartedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const GetStartedDialog = ({ open, onOpenChange }: GetStartedDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              Book <span className="text-primary">Repair Service</span>
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap gap-4 py-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>Same Day Service</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span>90-Day Warranty</span>
          </div>
        </div>
        
        <div className="mt-2">
          <ContactForm variant="compact" onSuccess={() => onOpenChange(false)} />
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-4">
          We'll call you back within 30 minutes to confirm your appointment
        </p>
      </DialogContent>
    </Dialog>
  );
};
