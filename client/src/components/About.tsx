export function About() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-12"
          data-testid="text-about-title"
        >
          About Her
        </h2>
        
        <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-base md:text-lg">
          <p data-testid="text-about-p1">
            She is a visual creator defined by confidence, control, and modern elegance. Her work explores presence, form, and self-expression through a refined aesthetic that balances strength with restraint.
          </p>
          <p data-testid="text-about-p2">
            Each project is approached with intention — emphasizing quality, composition, and a clear visual identity rather than excess. Her portfolio reflects a curated evolution of style, built for audiences who value bold visuals delivered with sophistication.
          </p>
          <p data-testid="text-about-p3">
            This platform serves as a central space for her public work, creative direction, and exclusive offerings.
          </p>
        </div>
      </div>
    </section>
  );
}
