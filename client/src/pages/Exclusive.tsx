import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Crown, Heart, Star } from "lucide-react";

import teaserImg1 from "@assets/40001A5A-4FD1-4CEB-A86C-61F09D2CB31D_1765702574079.jpeg";
import teaserImg2 from "@assets/0DE0BB47-9A1A-4B73-8C1D-082047BAD65C_1765702574079.jpeg";
import teaserImg3 from "@assets/IMG_3442_1765702574079.jpeg";

export default function Exclusive() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const preference = localStorage.getItem("content_preference");
    if (preference === "exclusive") {
      setAgeVerified(true);
      setShowContent(true);
    }
  }, []);

  const handleVerify = () => {
    if (ageVerified) {
      localStorage.setItem("content_preference", "exclusive");
      localStorage.setItem("portfolio_visited", "true");
      setShowContent(true);
    }
  };

  if (!showContent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="space-y-3">
            <h1 className="font-serif text-4xl font-light tracking-wide">
              Age Verification
            </h1>
            <p className="text-muted-foreground font-light">
              This section contains content intended for adults only
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <Checkbox
                id="exclusive-age-confirm"
                checked={ageVerified}
                onCheckedChange={(checked) => setAgeVerified(checked as boolean)}
                data-testid="checkbox-exclusive-age"
              />
              <label
                htmlFor="exclusive-age-confirm"
                className="text-sm text-muted-foreground cursor-pointer"
              >
                I confirm I am 18 years of age or older
              </label>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="w-full font-light tracking-wider"
                disabled={!ageVerified}
                onClick={handleVerify}
                data-testid="button-verify-age"
              >
                Continue
              </Button>
              
              <Link href="/">
                <Button
                  variant="ghost"
                  className="w-full gap-2 font-light"
                  data-testid="button-back-home"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6"
              data-testid="text-exclusive-title"
            >
              Exclusive Access
            </h1>
            <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto mb-4">
              Premium content for dedicated supporters. Unlock behind-the-scenes footage, 
              unreleased photosets, and direct interaction.
            </p>
            <p className="text-sm text-muted-foreground/70 mb-16">
              This section is intended for adults 18+ only.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[teaserImg1, teaserImg2, teaserImg3].map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] overflow-hidden rounded-md"
                  data-testid={`img-teaser-${index}`}
                >
                  <img
                    src={img}
                    alt={`Exclusive preview ${index + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      filter: "blur(8px) brightness(0.7)",
                      transform: "scale(1.1)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/90 font-light text-sm tracking-wider uppercase">
                      Premium
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Card className="text-center p-6">
                <CardContent className="pt-4 space-y-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Crown className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-light">VIP Access</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Exclusive photosets and videos not available anywhere else
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-4 space-y-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Heart className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-light">Direct Messages</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Personal interaction and custom content requests
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="pt-4 space-y-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Star className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-light">Early Access</h3>
                  <p className="text-sm text-muted-foreground font-light">
                    Be the first to see new content and announcements
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <a
                href="https://onlyfans.com/@cybergirrl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="min-w-[200px] font-light tracking-wider"
                  data-testid="button-onlyfans"
                >
                  Subscribe on OnlyFans
                </Button>
              </a>
              
              <Link href="/">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="min-w-[200px] font-light tracking-wider"
                  data-testid="button-back-to-public"
                >
                  Back to Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
