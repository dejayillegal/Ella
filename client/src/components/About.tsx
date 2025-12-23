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
            Ella is a multidisciplinary creator—model, artist, songwriter, and AI-driven content strategist. She has built a multi-platform presence across Instagram, Snapchat, TikTok, and Twitch, reaching an audience of over 300,000 followers.
          </p>
          <p data-testid="text-about-p2">
            With strong expertise in photography and videography, Ella produces consistently high-quality visual content across formats. Every project is approached with a balance of creative intuition and technical execution, resulting in work that is both aesthetically refined and strategically effective.
          </p>
          <p data-testid="text-about-p3">
            Beyond content creation, Ella is the founder of The AI Creator Blueprint, a structured system designed to help creators build sustainable, scalable income streams using AI-powered workflows.
          </p>
        </div>
      </div>
    </section>
  );
}
