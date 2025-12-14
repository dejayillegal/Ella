import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/5AB7E7CC-AD4E-4D13-A696-E3772568538A_1765702574079.jpeg";

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Visual Creator"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-wide mb-6"
          data-testid="text-hero-title"
        >
          Visual Creator
        </h1>
        <p 
          className="text-white/80 text-lg md:text-xl font-light tracking-wide mb-12 max-w-xl mx-auto"
          data-testid="text-hero-tagline"
        >
          Confidence. Elegance. Modern Vision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="min-w-[180px] bg-white/10 backdrop-blur-sm border-white/30 text-white font-light tracking-wider"
            onClick={scrollToPortfolio}
            data-testid="button-view-portfolio"
          >
            View Portfolio
          </Button>
          <Link href="/exclusive">
            <Button
              size="lg"
              className="min-w-[180px] bg-white text-black font-light tracking-wider"
              data-testid="button-hero-exclusive"
            >
              Exclusive Access
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
