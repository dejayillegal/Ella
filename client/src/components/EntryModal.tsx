import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface EntryModalProps {
  onSelect: (choice: "public" | "exclusive") => void;
}

export function EntryModal({ onSelect }: EntryModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [ageConfirmed, setAgeConfirmed] = useState(false);

  const handlePublicSelect = () => {
    localStorage.setItem("portfolio_visited", "true");
    localStorage.setItem("content_preference", "public");
    setIsOpen(false);
    onSelect("public");
  };

  const handleExclusiveSelect = () => {
    if (ageConfirmed) {
      localStorage.setItem("portfolio_visited", "true");
      localStorage.setItem("content_preference", "exclusive");
      setIsOpen(false);
      onSelect("exclusive");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent 
        className="sm:max-w-md border-none bg-background p-8 md:p-12"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide" data-testid="text-modal-title">
              Welcome
            </h2>
            <p className="text-muted-foreground text-sm font-light tracking-wide">
              Select your experience
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <Button
              variant="outline"
              className="w-full py-6 text-base font-light tracking-wider border-border"
              onClick={handlePublicSelect}
              data-testid="button-public-portfolio"
            >
              Public Portfolio
            </Button>

            <div className="space-y-4">
              <Button
                variant="default"
                className="w-full py-6 text-base font-light tracking-wider"
                onClick={handleExclusiveSelect}
                disabled={!ageConfirmed}
                data-testid="button-exclusive-access"
              >
                Exclusive 18+ Access
              </Button>

              <div className="flex items-center justify-center gap-3">
                <Checkbox
                  id="age-confirm"
                  checked={ageConfirmed}
                  onCheckedChange={(checked) => setAgeConfirmed(checked as boolean)}
                  data-testid="checkbox-age-confirm"
                />
                <label
                  htmlFor="age-confirm"
                  className="text-xs text-muted-foreground cursor-pointer"
                >
                  I confirm I am 18 years or older
                </label>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
