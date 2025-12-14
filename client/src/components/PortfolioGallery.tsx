import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import img1 from "@assets/52A9F783-F2FE-4B99-A498-D43B8094811F_1765702574079.jpeg";
import img2 from "@assets/5AB7E7CC-AD4E-4D13-A696-E3772568538A_1765702574079.jpeg";
import img3 from "@assets/0DE0BB47-9A1A-4B73-8C1D-082047BAD65C_1765702574079.jpeg";
import img4 from "@assets/40001A5A-4FD1-4CEB-A86C-61F09D2CB31D_1765702574079.jpeg";
import img5 from "@assets/5B5877CC-9B3A-4E88-A924-EBCC4A15EEFD_1765702574079.jpeg";
import img6 from "@assets/0F9D03F5-E9FC-4986-A743-973B811C9C92_1765702574079.jpeg";
import img7 from "@assets/6C7F6A23-DF18-46B9-9284-D8F4D2512A6F_1765702574079.jpeg";
import img8 from "@assets/IMG_3442_1765702574079.jpeg";
import img9 from "@assets/IMG_3443_1765702574079.jpeg";
import img10 from "@assets/39AC29EC-FA4D-43B8-9C80-396607B3D9B5_1765702574079.jpeg";

const portfolioImages = [
  { src: img1, alt: "Pool portrait" },
  { src: img2, alt: "Gold accent portrait" },
  { src: img3, alt: "Teal elegance" },
  { src: img4, alt: "Artistic studio" },
  { src: img5, alt: "Floral delicate" },
  { src: img6, alt: "Sunset convertible" },
  { src: img7, alt: "Natural interior" },
  { src: img8, alt: "City night" },
  { src: img9, alt: "Neon studio" },
  { src: img10, alt: "Dramatic lighting" },
];

export function PortfolioGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? portfolioImages.length - 1 : selectedIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === portfolioImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-center mb-16"
          data-testid="text-portfolio-title"
        >
          Portfolio
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] overflow-hidden rounded-md cursor-pointer group"
              onClick={() => openLightbox(index)}
              data-testid={`card-portfolio-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-black/95 overflow-hidden" aria-describedby={undefined}>
          <VisuallyHidden>
            <DialogTitle>Portfolio Image Viewer</DialogTitle>
          </VisuallyHidden>
          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              data-testid="button-lightbox-close"
            >
              <X className="h-6 w-6" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white"
              onClick={goToPrevious}
              aria-label="Previous image"
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/80 hover:text-white"
              onClick={goToNext}
              aria-label="Next image"
              data-testid="button-lightbox-next"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {selectedIndex !== null && (
              <img
                src={portfolioImages[selectedIndex].src}
                alt={portfolioImages[selectedIndex].alt}
                className="max-w-full max-h-[90vh] object-contain"
                data-testid="img-lightbox-current"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
