import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { SiInstagram, SiTwitch, SiYoutube, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";

export function SocialLinks() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 
          className="font-serif text-3xl md:text-4xl font-light tracking-wide mb-8"
          data-testid="text-social-title"
        >
          Connect
        </h2>
        <p className="text-muted-foreground font-light mb-12">
          Follow for updates and behind-the-scenes content
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-12">
          <a
            href="https://www.instagram.com/native.princessella/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-instagram"
          >
            <Button variant="outline" size="lg" className="gap-3 font-light">
              <SiInstagram className="h-5 w-5" />
              Instagram
            </Button>
          </a>

          <a
            href="https://www.twitch.tv/baebladegamesz"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-twitch"
          >
            <Button variant="outline" size="lg" className="gap-3 font-light">
              <SiTwitch className="h-5 w-5" />
              Twitch
            </Button>
          </a>

          <a
            href="https://www.youtube.com/@SincerelyEloisa"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-youtube"
          >
            <Button variant="outline" size="lg" className="gap-3 font-light">
              <SiYoutube className="h-5 w-5" />
              YouTube
            </Button>
          </a>

          <a
            href="https://www.linkedin.com/in/eloisa-chairez-580158133/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-linkedin"
          >
            <Button variant="outline" size="lg" className="gap-3 font-light">
              <SiLinkedin className="h-5 w-5" />
              LinkedIn
            </Button>
          </a>
        </div>

        <Link href="/exclusive">
          <Button 
            size="lg" 
            className="font-light tracking-wider px-8"
            data-testid="button-social-exclusive"
          >
            Exclusive Access
          </Button>
        </Link>
      </div>
    </section>
  );
}
