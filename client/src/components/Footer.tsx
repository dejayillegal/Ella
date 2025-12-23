import { SiInstagram, SiX } from "react-icons/si";
import { Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p 
              className="font-serif text-xl tracking-wide mb-2 font-thin"
              data-testid="text-footer-name"
            >Eloisa Chairez</p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
              data-testid="link-footer-instagram"
            >
              <SiInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter / X"
              data-testid="link-footer-twitter"
            >
              <SiX className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
              data-testid="link-footer-email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-footer-disclaimer">
            This website contains age-restricted content. By accessing certain sections, you confirm you are 18 years of age or older. All content is protected by copyright and may not be reproduced without permission.
          </p>
        </div>
      </div>
    </footer>
  );
}
