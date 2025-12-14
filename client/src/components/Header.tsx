import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/">
          <span 
            className="font-serif text-xl md:text-2xl tracking-wide cursor-pointer"
            data-testid="link-home"
          >
            STUDIO
          </span>
        </Link>

        <nav className="flex items-center gap-2 md:gap-4 flex-wrap">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className={`font-light tracking-wide text-sm ${location === "/" ? "text-foreground" : "text-muted-foreground"}`}
              data-testid="link-portfolio"
            >
              Portfolio
            </Button>
          </Link>
          <Link href="/exclusive">
            <Button
              variant="ghost"
              size="sm"
              className={`font-light tracking-wide text-sm ${location === "/exclusive" ? "text-foreground" : "text-muted-foreground"}`}
              data-testid="link-exclusive"
            >
              Exclusive
            </Button>
          </Link>
          <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
        </nav>
      </div>
    </header>
  );
}
