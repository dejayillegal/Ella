import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { EntryModal } from "@/components/EntryModal";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [, setLocation] = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("portfolio_visited");
    if (hasVisited) {
      setShowContent(true);
    } else {
      setShowModal(true);
    }
  }, []);

  const handleEntrySelect = (choice: "public" | "exclusive") => {
    setShowModal(false);
    if (choice === "exclusive") {
      setLocation("/exclusive");
    } else {
      setShowContent(true);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {showModal && <EntryModal onSelect={handleEntrySelect} />}
      
      {showContent && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <PortfolioGallery />
            <SocialLinks />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
